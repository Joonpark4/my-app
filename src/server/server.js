const express = require("express");
const oracledb = require("oracledb");

const app = express();

// OracleDB로의 연결 정보를 설정하세요.
const dbConfig = {
  user: 'scott',
  password: 'tiger',
  connectString: 'jdbc:oracle:thin:@localhost:1521:xe'
};

// 데이터베이스 연결 및 쿼리 실행 함수
async function executeQuery(res, query) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(query);
    
    res.json(result.rows);
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

// API 엔드포인트 예제
app.get("/api/getData", (req, res) => {
  const query = `SELECT * FROM emp`;
  executeQuery(res, query);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
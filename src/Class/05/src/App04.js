/*eslint-disable*/

import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import bg from "./img/bg.jpg";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import About from "./routes/About.js";

function App() {
    let [shoes] = useState(data);
    // 페이지 이동을 도와주는 함수
    // 훅이란? 유용한 것들이 들어있는 함수들
    let navigate = useNavigate();

    return (
        <div className="App">
            <Button variant="primary">Primary</Button>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">NavBar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Nav.Link>
                        {/* <Nav.Link onClick={()=>{navigate(1)}}>앞으로</Nav.Link>
                        <Nav.Link onClick={()=>{navigate(-1)}}>뒤로</Nav.Link> */}
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail");
                            }}
                        >
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>

            <Routes>
                {/* 메인페이지임 */}
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>
                            <div className="container">
                                <div className="row">
                                    {shoes.map((a, i) => {
                                        return (
                                            <Card shoes={shoes[i]} i={i + 1} key={i}></Card>
                                            // <div key={i} className="col-md-4">
                                            //     <img src={process.env.PUBLIC_URL + "/shoes/" + (i + 1) + ".jpg"} width="60%" />
                                            //     <div className="card-content">
                                            //         <h4>{shoes[i].title}</h4>
                                            //         <p>{shoes[i].price}</p>
                                            //     </div>
                                            // </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    // path="/detail/0" element={ <Detail shoe={shoes}/> }/>
                    // path="/detail/1" element={ <Detail shoe={shoes}/> }/>
                    // path="/detail/2" element={ <Detail shoe={shoes}/> }/>
                    path="/detail/:id"
                    element={<Detail shoes={shoes} />}
                />

                {/* <Route path="*" element= { <div>없는 페이지임</div>} /> */}
                {/* /about/member로 접속 시 <About>안에 <div>멤버들</div> 을 보여줍니다.  */}

                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버들</div>} />
                    <Route path="location" element={<div>회사위치</div>} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/event" element={<EventPage />}>
                    <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
                    <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
                </Route>
            </Routes>
        </div>
    );
}
// 라우터의 장점
// 뒤로가기 버튼 이용가능
// 페이지 이동이 쉬움
// function About() {
//     return (
//         <div>
//             <h4>회사정보임</h4>
//             {/* 위에서 import 해온 <Outlet>은 rested routes안의 element들을 어디에 보여줄지 표기하는 곳입니다. */}
//             <Outlet></Outlet>
//         </div>
//     );
// }

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={`https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h${props.i}.jpg`} width="30%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    );
}

function EventPage() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}
export default App;

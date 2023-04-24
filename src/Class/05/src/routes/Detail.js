/*eslint-disable*/
import { useParams } from "react-router-dom";

function Detail(props) {
    let { id } = useParams();
    console.log(id);
    return (
        <div className="container">
            {/* <Box>
            <YellowBtn bg="orange">오랜지색 버튼임</YellowBtn>
            <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
        </Box> */}

            <div className="row">
                <div className="col-md-6">
                    <img src={"https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h" + 
                    (parseInt(id) + 1) + ".jpg"} width="30%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;

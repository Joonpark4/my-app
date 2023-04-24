import { Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            {/* 위에서 import 해온 <Outlet>은 rested routes안의 element들을 어디에 보여줄지 표기하는 곳입니다. */}
            <Outlet></Outlet>
        </div>
    );
}

export default About
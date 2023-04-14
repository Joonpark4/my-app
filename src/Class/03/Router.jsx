import {BrowserRouter, Routes, Route, Link, useLocation, Outlet} from "react-router-dom"
// npm install react-router-dom
// 라우트는 프론트엔드에서 사용되는 용어로, 사용자가 웹 페이지에서 요청한 URL에 따라 적절한 컴포넌트를 렌더링 하는 것을 말합니다.

function App(){
    return(
        <BrowserRouter>
        <Link to="/"> home </Link>
        <Link to="/one"> one </Link>
        <Link to="/two"> two </Link>
        <Link to="/three"> three </Link>
        {/* 라우트를 감싸줍니다 localhost:3000/three/hojunone = 중첩된 라우터 */}
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Outlet />}>
            <Route path="" element={<ThreeIndex />} ></Route>
            <Route path="hojungone/" element={<ThreeOne />} ></Route>
            <Route path="hojungtwo/" element={<ThreeTwo />} ></Route>
        </Route>
        <Route path="/blog/:id"element={<Blog />} ></Route>
        </Routes>
        </BrowserRouter>
    )
}
// 예를 들어, /blog/123의 경우 :id는 123이 됩니다.

function Index(){
    return <h1>Hello world0</h1>
}

function One({name}){
    return <h1>{name} world1</h1>
}

function Two(){
    return <h1>Hello world2</h1>
}

function Three(){
    return <h1>Hello world3</h1>
}

function Blog(){
    const location = useLocation()
    console.log(location)
    return <h1>Hello Blog</h1>
}

function ThreeIndex(){
    return <h1>Hello ThreeIndex</h1>
}

function ThreeOne(){
    return <h1>Hello ThreeOne</h1>
}

function ThreeTwo(){
    return <h1>Hello ThreeTwo</h1>
}

export default App;
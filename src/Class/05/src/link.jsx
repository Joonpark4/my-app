// public 폴더의 용도
// 여러가지 소스코드는 src 폴더에 보관하면 되는데
// 이미지 같은 static 파일의 경우 public 폴더에 보관해도 됩니다. 

// 리액트로 개발을 끝내면 build 작업이라는걸 하는데
// 지금까지 짰던 코드르 ㄹ한 파일로 압축해주는 작업입니다. 
// src 폴더에 있던 코드와 파일은 다 압축이 되는데 public 폴더에 있는 것들은
// 그대로 보존해줍니다. 
// 그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js파일은 그럴 일은
// 거의 없고 이미지, txt, json 등 수정이 필요없는 static 파일들의 경우엔
// public 폴더에 보관해도 상관없습니다. 
// <img src="/logo192.png">

// 하지만 권장되는 방식은 이렇게입니다. 내사이트의 현재 경로를 뜻함
// <img src={process.env.PUBLIC_URL + '/logo192.png'} />



/*eslint-disable*/
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className='App'>

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#features'>Features</Nav.Link>
                        <Nav.Link href='#pricing'>Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className='main-bg'></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>안녕</div> 
                    <div className='col-md-4'>안녕</div> 
                    <div className='col-md-4'>안녕</div> 
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        {/* <img src="/logo192.png" width="80%" /> */}
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} />
                        <h1>상품명</h1>
                        <p>상품정보</p>
                    </div>
                    <div className='col-md-4'>
                        {/* <img src="/logo192.png" width="80%" /> */}
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} />
                        <h1>상품명</h1>
                        <p>상품정보</p>
                    </div>
                    <div className='col-md-4'>
                        {/* <img src="/logo192.png" width="80%" /> */}
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} />
                        <h1>상품명</h1>
                        <p>상품정보</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
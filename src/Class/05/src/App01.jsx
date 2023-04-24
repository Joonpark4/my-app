import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import data from './data.js'

function App() {
    let [shoes] = useState(data)
    console.log(shoes[0].title);

    return (
        <div className="App">
            <Navbar className="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#features'>Features</Nav.Link>
                        <Nav.Link href='#pricing'>Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="main-bg"></div>
            <div className="container">
                <div className="row">
                    <Card shoes={shoes}></Card>
                    <Card2 shoes={shoes}></Card2>
                    <Card shoes={shoes}></Card>
                </div>
            </div>
        </div>
    )
}
function Card(props) {
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/boy.jpg'} width="60%" />
            {/* <img src="./shoes.jpg" width='80%' /> */}
            {/* <img src="c:\shop\shoes/shoes.jpg" width="80%" /> 허용을 안하네 로컬장소 
            됬다안됬다 함*/}
            <h4>{ props.shoes[0].title }</h4>
            <p>{ props.shoes[0].price }</p>
        </div>
    )
}
function Card2(props) {
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/shoes/girl.jpg'} width="60%" />
            {/* <img src="./shoes.jpg" width='80%' /> */}
            {/* <img src="c:\shop\shoes/shoes.jpg" width="80%" /> 허용을 안하네 로컬장소 
            됬다안됬다 함*/}
            <h4>{ props.shoes[1].title }</h4>
            <p>{ props.shoes[1].price }</p>
        </div>
    )
}

export default App
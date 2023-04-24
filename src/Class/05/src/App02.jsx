// import { Button, Navbar, Container, Nav } from "react-bootstrap";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import data from "./data.js";

// function App() {
//     let [shoes] = useState(data);
//     console.log(shoes[0].title);

//     return (
//         <div className="App">
//             <Navbar className="light" variant="light">
//                 <Container>
//                     <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#features">Features</Nav.Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>

//             <div className="main-bg"></div>

//             <div className="container">
//                 <div className="row">
                // {
                //     shoes.map((value, idx)=>{
                //         return (
                //             <div className="col-md-4" key={value.id}>
                //                 <img src={process.env.PUBLIC_URL + "/shoes/math_img_"+ value.link} width="60%" />
                //                 <h4>{value.title}</h4>
                //                 <p>{value.price}</p>
                //             </div>
                //         )
                //     })
                // }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;


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
                {
                    shoes.map((value, i)=>{
                        return (
                            <Card shoes={shoes[i]} i={i} key={i}></Card>
                            )
                    })
                }
                </div>
            </div>
        </div>
    )
}
function Card(props) {
    return (
        <div className="col-md-4">
            <img src={`${process.env.PUBLIC_URL}/shoes/${props.i+1}.jpg`} width="60%" />
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.price }</p>
        </div>
    )
}

export default App
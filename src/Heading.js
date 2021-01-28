import React from 'react'
import {Link} from 'react-router-dom'
import{ Navbar, Nav, NavItem, NavbarBrand, Container} from 'reactstrap'
function Heading() {
    return (

            <Navbar color="dark" dark>
               
                    <NavbarBrand href="/">Citoyens</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className="btn btn-primary " to="/add">Ajouter citoyen</Link>
                        </NavItem>
                    </Nav>
              

            </Navbar>
          
    )
}

export default Heading

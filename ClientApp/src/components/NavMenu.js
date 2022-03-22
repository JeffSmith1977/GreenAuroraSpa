import React, { Component, useContext } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { DataContext } from "../context/SpaContext";
import { useState } from "react";

export const NavMenu = ()=>{

  const { carts } = useContext(DataContext);
 
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar= ()=>{
    setCollapsed(!collapsed)
  } 

  
    return (
      <header className="header">
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/" className="logo me-auto">
              GREEN AURA SPA
            </NavbarBrand>
            <NavbarToggler className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    Home
                  </NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Services
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/massage"
                        >
                          Massages
                        </NavLink>
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Products"
                        >
                          Facial Treatments
                        </NavLink>
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/facialwax"
                        >
                          Facial Waxing
                        </NavLink>
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to="/Bodywax"
                        >
                          Body Waxing
                        </NavLink>
                      </NavItem>
                    </DropdownItem>

                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/portfolio">
                    Portfolio
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/About">
                    About Us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Contact">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <i className="bx bx-hot">
                    {carts.length}                   
                    <box-icon name='cart'></box-icon>
                  </i>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  
}

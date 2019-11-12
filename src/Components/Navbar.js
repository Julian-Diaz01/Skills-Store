import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import {ButtonContainer} from "./Button"


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">

            <img src={logo} alt="store"  className="MyLogo" height="50"/>      
        </Link>
        <ul className="navbar-nav align-items-right">
          <li className="nav-item ml-5">
            <Link to="/Details" className="nav-link">
              skills
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus" /> {" "}My cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
color: white !important;
font-size:1.2rem;
text-transform: capitalize;
}
`

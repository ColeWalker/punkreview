import React, { Component } from 'react';
import styled from 'styled-components';
import checkerboard from '../../images/checkerboard.png'
import logo from '../../images/logo3.png'
import { Link } from 'gatsby'
const HeaderDiv = styled.div`
    width: 100%;
    height: 15vh;
    margin: 0 auto;
    padding: 3%;
    background-image: url(${checkerboard});
    hover:{
        cursor:default;
    }
    margin-bottom: 5%;
`
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 5%;
`

const Logo = styled.img`
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 186.93px;
    height: 231.89px;
`

export default class Header extends Component {
  render() { 
    return ( 
      <HeaderDiv>   
          <Link to={'/'}> 
            <Logo src={logo} alt="logo"/>
        </Link>
      </HeaderDiv>
      
    )
  }
}

import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const CardWrapper = styled.div`
    position: relative;
    width: 750px;
    display: flex;
    flex-direction: row;
    height: 380px;
    left: 19%;
    margin-top: 10%;
`

const CardRight = styled.img`
    width: inherit;
    margin-bottom:0;
    height: inherit;
`
const CardLeft = styled.div`
    min-width: 800px;
    background-color: white;
    padding: 30px;
    margin-top:0;
    margin-bottom: 10%;
    height: inherit;
    color: black;
    text-align: center;

`



export default class FeaturedCard extends Component {
  render() {
    return (
      <CardWrapper>
        <CardLeft> 
            <h2>Featured Artist:</h2> 
            <h1>Senses Fail</h1>
            <hr></hr>
            <p>Test</p> 
        </CardLeft>
        <CardRight src="https://pbs.twimg.com/profile_images/936265336780763137/NajiOShM_400x400.jpg"/>
      </CardWrapper>
    )
  }
}
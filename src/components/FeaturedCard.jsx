import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const CardWrapper = styled.div`
    position: relative;
    width: 750px;
    display: flex;
    flex-direction: row;
    height: 380px;
`

const CardRight = styled.img`
    width: inherit;
    margin-bottom:0;
    height: inherit;
`
const CardLeft = styled.div`
    width: inherit;
    background-color: white;
    padding:20px;
    margin-top:0;
    margin-bottom: 10%;
    height: inherit;
`

export default class FeaturedCard extends Component {
  render() {
    return (
      <CardWrapper>
        <CardLeft>
            <p>Test</p>
        </CardLeft>
        <CardRight src="https://pbs.twimg.com/profile_images/936265336780763137/NajiOShM_400x400.jpg"/>
      </CardWrapper>
    )
  }
}
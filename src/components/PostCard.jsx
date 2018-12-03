import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 335px;
    display: flex;
    flex-direction: column;
`

const CardTop = styled.img`
    width: inherit;
    margin-bottom:0;

`
const CardBottom = styled.div`
    width: inherit;
    background-color: white;
    padding:20px;
    margin-top:0;
    margin-bottom: 10%;

`

export default class PostCard extends Component {
  render() {
    return (
      <CardWrapper>
        <CardTop src="https://pbs.twimg.com/profile_images/936265336780763137/NajiOShM_400x400.jpg"/>
        <CardBottom>
            <p>Test</p>
        </CardBottom>
      </CardWrapper>
    )
  }
}

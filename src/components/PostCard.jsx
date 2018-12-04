import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 335px;
    display: flex;
    flex-direction: column;
    height: 400px;
`

const CardTop = styled.div`
    width: inherit;
    margin-bottom:0;
    background-color: white;
    padding: 20px;
    text-align: center;
    min-height: 30%;
`
const CardBottom = styled.div`
    width: inherit;
    background-color: white;
    padding:10px;
    margin-top:0;
    margin-bottom: 10%;
    text-align: center;
    height: 70%;
`

export default function PostCard({title, excerpt,path}) {
    return (
      <CardWrapper>
        <CardTop >
            <h1>{title}</h1>
            <hr></hr>
        
        </CardTop>
        <CardBottom>
            <p>{excerpt}</p>
        </CardBottom>
      </CardWrapper>
    )
  }

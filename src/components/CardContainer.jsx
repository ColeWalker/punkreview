import React, { Component } from 'react'
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    color: black;
`

export default class CardContainer extends Component {
  render() {
      const {children} = this.props;
    return (
      <GridContainer>
        {children}
      </GridContainer>
    )
  }
}

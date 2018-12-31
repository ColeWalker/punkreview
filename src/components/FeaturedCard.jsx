import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticQuery, graphql} from 'gatsby';

const CardWrapper = styled.div`
    position: relative;
    width: 750px;
    display: flex;
    flex-direction: row;
    height: 380px;
    left: 19%;
    margin-top: 10%;
    color:black;
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
      <StaticQuery query= {query} render={data => (
         
        <CardWrapper>
        <CardLeft>
          <Link to={data.allMarkdownRemark.edges[0].node.fields.slug}  activeStyle={{color:'black',}} >
            <h2 style={{color:'black'}} >Featured Artist: </h2> 
            <h1 style={{color:'black'}}>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
            </Link>
            <hr></hr>
            <p>{data.allMarkdownRemark.edges[0].node.frontmatter.excerpt}</p> 
        </CardLeft>
        <CardRight src={data.allMarkdownRemark.edges[0].node.frontmatter.cover}/>
      </CardWrapper>
      )
      }/>

    )
  }
}

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date
            cover
            excerpt
          }
        }
      }
    }
  }
`;

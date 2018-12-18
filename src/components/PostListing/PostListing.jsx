import React from "react";
import { Link } from "gatsby";
import { Panel } from 'react-bootstrap'
import PostCard from '../PostCard'
import CardContainer from '../CardContainer'




class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <CardContainer>
        {/* Your post list here. */
        postList.map(post => (
          
            <PostCard title={post.title} excerpt={post.excerpt} slug={post.path}></PostCard>
      
        ))}
      </CardContainer>
    );
  }
}

export default PostListing;

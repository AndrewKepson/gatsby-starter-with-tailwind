import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <ol className={''}>
        {data.allMarkdownRemark.edges.map(post => (
          <li className={''}>
            <Link to={`/blog/${post.node.fields.slug}`}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
              <p>{post.node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage

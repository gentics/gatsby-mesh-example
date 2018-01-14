import React, { Component } from 'react'
import Markdown from 'react-markdown'
import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link'

class IndexPage extends Component {
  render() {
    const vehicles = this.props.data.vehicles.edges;
    const categories = this.props.data.categories.edges;

    return (
      <div>
        <section className="vehicles">
          <p>
            Welcome to your new Gatsby example site using the Gentics Mesh source plugin.
          </p>
          <h2>Vehicles</h2>
          <nav>
            <ul
              style={{
                listStyle: 'none',
                margin: '0 0 2rem',
              }}
            >
              {vehicles.map(({ node }, i) => (
                <li key={node.id + `nav`}>
                  <h4>
                    <Link to={`#${node.slug}`}>{node.name}</Link>
                  </h4>
                </li>
              ))}
            </ul>
          </nav>

          {vehicles.map(({ node }, i) => (
            <article key={node.id}>
              <h3 id={node.data.slug}>{node.data.name}</h3>
              <figure>
                <img
                  src={`https://demo.getmesh.io/api/v1/demo/webroot${
                    node.data.vehicleImage.path
                  }?w=725&h=512&fpx=0.25&fpy=0.5&crop=fp`}
                  alt={node.data.name}
                  title={node.data.name}
                  width="256"
                />
                <p>{node.data.description}</p>
                <p>Weight: {node.data.weight} kg</p>
                <figcaption>
                  <small
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                    }}
                  >
                    <a
                      href={`https://demo.getmesh.io/api/v1/demo/webroot/${node.data.vehicleImage.path}`}
                    >
                      full-size, hi-res photo: ({node.data.vehicleImage.fields.image.width} W &times;{' '}
                      {node.data.vehicleImage.fields.image.height} H)
                    </a>
                  </small>
                </figcaption>
              </figure>
              <ul
                style={{
                  listStyle: 'none',
                  margin: '0 0 2rem',
                }}
              >
              </ul>
            </article>
          ))}
        </section>
        <section className="categories">
          <h2>Categories</h2>
          {categories.map(({ node }, i) => (
            <article
              id={node.data.slug}
              key={node.id}
              style={{
                marginBottom: '3rem',
              }}
            >
              <figure>
                <figcaption>
                  <h3>{node.data.name}</h3>
                </figcaption>
                {node.childrenNodes.map((vehicle, i) => (
                  <p>
                    <Link to={`#${vehicle.data.slug}`}>{vehicle.data.name}</Link>
                  </p>
                ))}
              </figure>
             
            </article>
          ))}
        </section>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query getAllVehiclesCategories {
  vehicles: allNodes(filter: {schema: {name: {eq: "vehicle"}}}) {
    edges {
      node {
        data {
          slug
          name
          description
          weight
          vehicleImage {
            uuid
            path
            fields {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }
  categories: allNodes(filter: {schema: {name: {eq: "category"}}}) {
    edges {
      node {
        childrenNodes {
          id
          data {
            name
            slug
          }
        }
        data {
          slug
          name
        }
      }
    }
  }
}
`

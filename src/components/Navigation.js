import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        mesh {
          categories: nodes(filter: {schema: {is: category}}) {
            elements {
              uuid
              path
              ... on Mesh_category {
                fields {
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>
          </div>

          <ul className="nav navbar-nav">
            {data.mesh.categories.elements.map(category => (
              <NavElement key={category.uuid} category={category} />
            ))}
          </ul>
        </div>
      </nav>

    )}
  />
)

function NavElement({ category }) {
  return (
    <li>
      <Link to={`${category.path}`}>
        {category.fields.name}
      </Link>
    </li>
  )
}

import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

function ProductList({ category, imageBaseUrl }) {
  return (
    <div className="product-list">
      <h1>{category.fields.name}</h1>
      <p>{category.fields.description}</p>
      <div className="row">
        {category.children.elements.map(product => (
          <Product product={product} key={product.path} imageBaseUrl={imageBaseUrl} />
        ))}
      </div>
    </div>
  );
}

function Product({ product, imageBaseUrl }) {
  return (
    <div className="product-row col-xs-12 col-sm-6 col-md-4">
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>
            <Link to={`${product.path}`}>{product.fields.name}</Link>
            {" "}
            <small>{product.fields.SKU}</small>
          </h3>

          <Link to={`${product.path}`}>
            <img alt="" className="img-thumbnail" src={`${imageBaseUrl}${product.fields.vehicleImage.path}?w=328`} />
          </Link>
          <p className="description">{product.fields.description}</p>

          <hr />

          <div className="row">
            <div className="col-xs-6 price">
              <span className="label label-primary">
                {toEuro(product.fields.price)}
              </span>
            </div>
            <div className="col-xs-6 text-right">
              <span className="label label-default">Weight: {product.fields.weight}</span>
              <br />
              <span className="label label-default">Stock: {product.fields.stocklevel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const intl = new Intl.NumberFormat('de-DE', { style: 'currency', 'currency': 'EUR' })
function toEuro(value) {
  return intl.format(value);
}

export default ({ data }) => {
  const category = data.mesh.category;
  const imageBaseUrl = data.site.siteMetadata.imageBaseUrl;
  return (
    <Layout>
      <ProductList category={category} imageBaseUrl={imageBaseUrl} />
    </Layout>
  );
};

export const query = graphql`
  query ($nodePath: String!) {
    site {
      siteMetadata {
        imageBaseUrl
      }
    }
    mesh {
      category: node(path: $nodePath) {
        uuid
        ... on Mesh_category {
          fields {
            name
          }
          children(filter: {schema: {is: vehicle}}) {
            elements {
              ... on Mesh_vehicle {
                path
                fields {
                  price
                  stocklevel
                  weight
                  name
                  vehicleImage {
                    path
                  }      
                }
              }
            }
          }
        }
      }
    }
  }

`;

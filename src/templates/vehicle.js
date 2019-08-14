import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => {
  const vehicle = data.mesh.vehicle;
  return (
    <Layout>
      <ProductDetail product={vehicle} />
    </Layout>
  );
};

function ProductDetail({product, imageBaseUrl}) {
  return (
    <div className="product-detail">
      <h1>{product.fields.name}</h1>
      <div className="row">
        <div className="col-md-6">
            <dl className="form-group">
              <dt>Name</dt>
              <dd>{product.fields.name}</dd>
            </dl>

            <dl className="form-group">
              <dt>Description</dt>
              <dd dangerouslySetInnerHTML={{__html: product.fields.description}} />
            </dl>

            <dl className="form-group">
              <dt>SKU</dt>
              <dd>{product.fields.SKU}</dd>
            </dl>

            <div className="row">
              <dl className="col-sm-4 form-group">
                <dt>Price</dt>
                <dd>{product.fields.price}</dd>
              </dl>
              <dl className="col-sm-4 form-group">
                <dt>Weight</dt>
                <dd>{product.fields.weight}</dd>
              </dl>
              <dl className="col-sm-4 form-group">
                <dt>Stock Level</dt>
                <dd>{product.fields.stocklevel}</dd>
              </dl>
            </div>
        </div>
        <div className="col-md-6">
          <img alt="" className="img-thumbnail" src={`${imageBaseUrl}${product.fields.vehicleImage.path}?w=328`} />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query ($nodePath: String!) {
    site {
      siteMetadata {
        imageBaseUrl
      }
    }
    mesh {
      vehicle: node(path: $nodePath) {
        uuid
        ... on Mesh_vehicle {
          fields {
            name
            description
            price
            weight
            SKU
            stocklevel
            vehicleImage {
              path
            }
          }
        }
      }
    }
  }

`;

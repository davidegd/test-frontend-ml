import React, { useEffect, useCallback, useState, useContext } from "react";
import { AppContext } from "../provider";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/components/ProductDetail.scss";
import { apiClient } from "../services";
import { useParams } from "react-router-dom";

export const ItemDetail = ({ productData }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  // const [state, setState] = useContext(AppContext);
  const fetchItemDetail = useCallback(async (id) => {
    const { data } = await apiClient.Api.getProductDetail(id);
    setProduct(data.item);
  }, []);

  useEffect(() => {
    fetchItemDetail(id);
  }, [id]);
  return (
    <>
      {!!product ? (
        <Row className="p-0">
          <Col
            lg={{ span: 8, offset: 1 }}
            className="product__detail__container"
          >
            <div className="d-flex product__data__content">
              <img src={product.picture} alt="product-image" width="680" />
            </div>
          </Col>
          <Col lg={2} className="product__detail__container">
            <div className="product__data__content">
              <span className="product__sales">
                {product.condition} - {product.sold_quantity}
              </span>
              <span className="product__name">{product.title}</span>
              <span className="product__price">{product.price.amount}</span>
              <button
                href="#"
                className="w-100 d-flex align-items-center justify-content-center button__buy"
              >
                <span>Comprar</span>
              </button>
            </div>
          </Col>
          <Col
            lg={{ span: 10, offset: 1 }}
            className="product__detail__container"
          >
            <div className="d-flex product__data__content">
              <h4>Descripción</h4>
              <span>{product.description}</span>
            </div>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

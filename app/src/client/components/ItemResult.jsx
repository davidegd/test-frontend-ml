import React, { useCallback, useContext } from "react";
import { AppContext } from "../provider";
import { useHistory } from "react-router";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/components/ItemResult.scss";

export const ItemResult = ({ itemData }) => {
  const { picture, price, title, condition, id } = itemData;
  const { push } = useHistory();
  const [state, setState] = useContext(AppContext);
  const handleItemClick = useCallback(() => {
    setState({ ...state, productId: id });
    push(`/items/${id}`);
  }, [id, push, setState, state]);

  return (
    <Row lg={12} className="item__result__row" onClick={handleItemClick}>
      <div className="item_result__image__container">
        <img className="item_result__image" src={picture} alt="img" />
      </div>
      <Col
        lg={9}
        sm={9}
        md={8}
        xl={10}
        xs={12}
        className="d-flex flex-column align-items-center justify-content-start p-0 "
      >
        <Row className="w-100 m-0">
          <Col md={8} lg={10} xs={6} className="p-0 item__result__data ">
            <div className="item__price">
              <span className="item__result__price">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: price.currency,
                }).format(price.amount)}
              </span>
            </div>
          </Col>
          <Col
            lg={2}
            md={4}
            xs={6}
            className="d-flex item__result__data  justify-content-center  p-0 "
          >
            <span className="item__result__title">{condition}</span>
          </Col>
        </Row>
        <Row lg={12} className="d-flex align-items-center m-0 p-0 w-100">
          <Col lg={4} md={6} xs={6} className="p-0">
            <span className="item__result__title">{title}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

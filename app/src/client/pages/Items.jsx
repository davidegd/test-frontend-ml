import React, { useContext, useEffect, useCallback } from "react";
import { AppContext } from "../provider";
import { apiClient } from "../services";
import { Row, Col } from "react-bootstrap";
import { ItemResult } from "../components/ItemResult";
import "../assets/styles/components/ItemResult.scss";

export const Items = () => {
  const [state, setState] = useContext(AppContext);
  const { items, search } = state;

  const searchItems = useCallback(
    async (value) => {
      const { data } = await apiClient.Api.searchProducts(value);
      setState({ items: data.items, search: value });
    },
    [setState]
  );
  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search).get("search");
    if (urlParam && !items) {
      searchItems(urlParam);
    }
  }, [items, search, searchItems]);
  return (
    <>
      {!!items && items.length > 0 && (
        <Row>
          <Col
            className="items__result__container p-0"
            lg={{ span: 10, offset: 1 }}
          >
            {items.map((item, index) => {
              return <ItemResult key={index + item.id} itemData={item} />;
            })}
          </Col>
        </Row>
      )}
    </>
  );
};

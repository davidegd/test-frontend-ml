import React, { useState, useCallback, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { AppContext } from "../provider";

import "../assets/styles/components/SearchBar.scss";
import SearchIcon from "../assets/images/icon-search.png";
import { apiClient } from "../services";

export const SearchBar = () => {
  const [timerId, setTimerId] = useState();
  const history = useHistory();
  const [state, setState] = useContext(AppContext);

  const search = useCallback(
    async (value) => {
      const { data } = await apiClient.Api.searchProducts(value);
      setState({ ...state, items: data.items, search: value });
    },
    [setState, state]
  );
  const redirectToItems = useCallback(
    async (value) => {
      if (value.length > 0) {
        await history.push({
          pathname: "/items",
          search: `?search=${value}`,
        });
      } else {
        await history.push({
          pathname: "/",
        });
      }
    },
    [history]
  );

  const handleChange = ({ target }) => {
    const { value } = target;
    if (timerId) {
      clearTimeout(timerId);
    }
    const timerIdValue = setTimeout(() => {
      search(value);
      redirectToItems(value);
    }, 500);
    setTimerId(timerIdValue);
  };

  return (
    <div className="input__container">
      <input
        className="input__search"
        placeholder="Nunca dejes de buscar"
        id="searchInput"
        type="text"
        onChange={handleChange}
      />

      <a href="/" className="button__search">
        <img width="16" height="16" src={SearchIcon} alt="search" />
      </a>
    </div>
  );
};

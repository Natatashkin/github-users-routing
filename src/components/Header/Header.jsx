import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Logo } from "./Logo";
import { pageTitle } from "../../helpers";
import { TextField } from "../TextField";
import { PageTitle } from "../PageTitle";
import "./Header.scss";

const Header = ({ onGetQuery, location, isSearchPage, isUserPage }) => {
  const title = pageTitle(location, isUserPage);
  const [query, setQuery] = useState("");

  const handleOnChange = useCallback(({ target: { value } }) => {
    setQuery(value);
    onGetQuery(value);
  }, []);

  return (
    <header
      className={classNames("Header-container", {
        "Header-isSearch": isSearchPage,
      })}
    >
      <div className="Header-logoAndTitleContainer">
        <div className="Header-logoContainer">
          <Logo />
        </div>
        <div
          className={classNames("Header-titleContainer", {
            "Header-titleContainer--isSearch": isSearchPage,
          })}
        >
          <PageTitle title={title} />
        </div>
      </div>
      {isSearchPage && (
        <div className="Header-textFieldContainer">
          {/*  Добавить фокус */}
          <TextField name="search" value={query} onChange={handleOnChange}>
            {/* добавить класс "TextField-adornment" scss */}
            <IoSearchOutline size={20} className="TextField-adornment" />
          </TextField>
          <Link
            to="/favorites"
            state={{ from: location }}
            className="Header-favLink"
          >
            {/* Добвавить анимацию на hover*/}
            <FaStar size={24} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

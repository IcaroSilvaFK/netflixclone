import React, { useState } from "react";

import { HiSearch } from "react-icons/hi";
import { IoMdNotifications, IoMdArrowDropdown } from "react-icons/io";
import { BiUser } from "react-icons/bi";

import "./styles.scss";

export function HeaderDesktop() {
  const [hidden, setHidden] = useState(false);
  return (
    <header className="container-header-desktop">
      <div className="header-desktop-subContainer">
        <div className="header-desktop-container-title">
          <h2 className="header-desktop-title">
            N
            <span className="effect-netflix">
              E<span className="effect-netflix-second">TFL</span>I
            </span>
            X
          </h2>
        </div>
        <nav className="header-desktop-navigation">
          <ul>
            <li>
              <a href="/">Descobrir</a>
            </li>
            <li>
              <a href="/">Séries TV</a>
            </li>
            <li>
              <a href="/">Films</a>
            </li>
            <li>
              <a href="/">Programas Originais</a>
            </li>
            <li>
              <a href="/">Adições recentes</a>
            </li>
            <li>
              <a href="/">Minha lista</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-desktop-secondContainer">
        <main className="container-desktop-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={hidden ? "box-shadow-search" : ""}>
              <input
                type="text"
                placeholder="Digite aqui a busca"
                id=""
                className={hidden ? "" : "inputhidden"}
              />
              <button className={hidden ? "" : "inputhidden"} type="submit">
                search
              </button>
            </div>
            <HiSearch
              onClick={() => setHidden(!hidden)}
              className="toggleClass"
            />
          </form>
        </main>
        <div className="header-desktop-user">
          <IoMdNotifications />
          <div className="header-desktop-userIcons">
            <div className="header-desktop-userProfile">
              <BiUser />
            </div>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

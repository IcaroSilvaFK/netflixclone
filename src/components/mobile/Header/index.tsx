import React from "react";

import { SiNetflix } from "react-icons/si";
import { MdArrowDropDown, MdCast } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import "./styles.scss";

export function HeaderMobile() {
  return (
    <header className="HeaderMobile">
      <div className="User-Logo">
        <div className="logo">
          <SiNetflix />
        </div>
        <div className="container-User-Profile">
          <MdCast className="cast" />
          <div className="User">
            <AiOutlineUser />
          </div>
        </div>
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <a href="">TV Shows</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li className="arrow">
              <a href="">
                My List <MdArrowDropDown />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import React from "react";
import Logo from "../../../assets/img/png/J-removebg-preview.png";
import { Button} from "antd";
import {Link} from "react-router-dom"
import {
  HomeOutlined,
} from "@ant-design/icons";
import "./MenuTopUser.scss";

export default function MenuTopUser() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={Logo} alt="Alternate" />
      </div>
      <div className="menu-top__right">
        <Button type="link">
        <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Ingresar</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
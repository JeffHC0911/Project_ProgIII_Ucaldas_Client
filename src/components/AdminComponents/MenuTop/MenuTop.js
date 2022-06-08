import React from "react";
import Logo from "../../../assets/img/png/J-removebg-preview.png";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./MenuTop.scss";
import { logout } from "../../../api/auth";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const userLogout = () =>{
    console.log("Cerrando sesión")
    logout()
    window.location.reload()
  }
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={Logo} alt="Alternate" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={userLogout}>
          <UserOutlined />
        </Button>
      </div>
    </div>
  );
}
 
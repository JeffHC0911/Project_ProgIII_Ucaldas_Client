import React from "react";
import Logo from "../../../assets/image/png/logo.png";
import {Button} from "antd"
import "./TopMenu.scss"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined
} from "@ant-design/icons"

export default function Menu(props){
    const {menuCollapsed, setMenuCollapsed} = props

    return(
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" src={Logo} alt="Alternate"/>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Log Off!")}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}
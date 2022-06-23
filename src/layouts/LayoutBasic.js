import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/UserComponents/MenuTopUser";
import MenuSider from "../components/AdminComponents/MenuSider";
import {GithubOutlined  } from "@ant-design/icons";
import { Button } from "antd";


import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;

  
    return (
      <Layout>
        <Layout
          className="layout-admin"
        >
          <Header className="layout-admin__header">
            <MenuTop
            />
          </Header>
          <Content className="layout-admin__content">{children}</Content>
          <Footer className="layout-admin__footer">
          <Button type="link" href="https://github.com/JeffHC0911"  onClick={() => console.log("Github")}>
            <GithubOutlined style={{ fontSize: "17px" }} /> JeffHC0911
          </Button>
        </Footer>
        </Layout>
      </Layout>
    );
  }

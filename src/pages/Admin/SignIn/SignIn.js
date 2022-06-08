import React from "react";
import { Layout, Tabs } from "antd";
import Login from "../../../components/AdminComponents/Login";
import Register from "../../../components/AdminComponents/Register";
import Logo from "../../../assets/img/png/J-removebg-preview.png";
import {getAccesToken} from "../../../api/auth"
import "./SignIn.scss";
import { Routes, Route } from "react-router-dom";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if(getAccesToken()){
    <Routes>
      <Route path="/admin" />
    </Routes>
  }
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt=""/>
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Iniciar sesión</span>} key="1">
              <Login />
            </TabPane>
            <TabPane tab={<span>Registro</span>} key="2">
              <Register />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}

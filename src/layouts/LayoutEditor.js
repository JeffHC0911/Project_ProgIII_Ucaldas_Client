import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import SignIn from "../pages/Admin/SignIn";
import { GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useAuth from "../hooks/useAuth";


import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { children } = props;
    const {user, isLoading} = useAuth()

    if (!user && !isLoading) {
        return (
            <>
                <SignIn />
                <Routes>
                    <Route path="/admin/login/*" element={<SignIn />} />
                </Routes>
                {/* <Navigate to={"/admin/login"} state={{ from: location }} replace /> */}
            </>
        );
    }

    if(user && !isLoading){
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout
                className="layout-admin"
                style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
            >
                <Header className="layout-admin__header">
                    <MenuTop
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className="layout-admin__content">{children}</Content>
                <Footer className="layout-admin__footer">
                    <Button type="link" href="https://github.com/JeffHC0911" onClick={() => console.log("Github")}>
                        <GithubOutlined style={{ fontSize: "17px" }} /> JeffHC0911
                    </Button>
                </Footer>
            </Layout>
        </Layout>
    );
    }
}
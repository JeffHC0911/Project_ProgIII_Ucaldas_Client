import React, { useState } from "react";
import { Layout } from "antd";
import './layoutAdmin.scss'
import MenuTop from '../components/AdminComponents/Menu/TopMenu'
import MenuSider from "../components/AdminComponents/MenuSider"

export default function LayoutAdmin(){
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    // const {children} = props
    /*Especificar los componentes que se quieren dar en este layout */
    const {Header, Content, Footer} = Layout
    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <MenuTop
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className="layout-admin__content">
                    <h1>Rutas</h1>
                </Content>
                <Footer className="layout-admin__footer">React Project 2022</Footer>
            </Layout>
        </Layout>
    );
}
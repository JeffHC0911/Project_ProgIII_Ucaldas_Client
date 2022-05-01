import React from "react";
import { Layout } from "antd";
export default function LayoutAdmin(props){
    const {children} = props
    /*Especificar los componentes que se quieren dar en este layout */
    const {Header, Content, Footer} = Layout
    return(
        <Layout>
            <h2>Menu Sider</h2>
            <Layout>
                <Header>Header</Header>
                <Content>{children}</Content>
                <Footer>React Project 2022</Footer>
            </Layout>
        </Layout>
    );
}
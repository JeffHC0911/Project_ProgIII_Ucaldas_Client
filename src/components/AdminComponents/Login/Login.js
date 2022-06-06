import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Form, Button, Input, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { signIn } from "../../../api/user"
import "./Login.scss";

export default function Login() {

  /* Validar valor - estado inicial de los campos input vacíos */
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = inputs.email
    const passwordVal = inputs.password

    if(!email || !passwordVal){
      notification["error"]({
        message: "Todos los campos son obligatorios"
      })
    }else{
      const result = await signIn(inputs)
      if(!result.user_iniciado){
        notification.error({
          message: result.message
        })
      }else{
        notification.success({
          message: result.message
        })
      }
      navigate("/admin")
    }
  }

  const changeForm = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form className="login-form" onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="login-form__input"
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleLogin} htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}

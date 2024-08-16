import React from 'react';
import { useState } from "react";
// import { getUsersApi, loginApi } from "../helper/fetchApi";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Input } from "antd";
import './Login.css';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const longinData = {
      username,
      password,
    };

    try {
      const data = await loginApi(longinData);
      localStorage.setItem("accessToken", data.token);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUsers = async () => {
    try {
      const data = await getUsersApi();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  return (
    <>
      <div className='login-page'>
            <div className='card'>
                <p>WELCOME</p>
                <Input
                placeholder='input username'
                prefix={<UserOutlined />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <Input.Password
                placeholder='input password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                prefix={<LockOutlined />}
                />
                <Button type='primary' onClick={handleLogin}>
                Sign in
                </Button>
                <Button type='primary' onClick={handleUsers}>
                Get Users
                </Button>
            </div>
        </div>
    </>
  );
}

export default Login;
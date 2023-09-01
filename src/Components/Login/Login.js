import React from 'react'
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "../Login/Login.css"
import Signup from "../../signup.svg"
import { Card, Divider } from 'antd';
import logo from "../../logo.png"

function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    axios
      .get("http://localhost:8080/attendance/" + values.username)
      .then(data => {
        sessionStorage.setItem("associateId", data.data.associate_id)
        sessionStorage.setItem("associateName", data.data.associate_name)
        sessionStorage.setItem("isLoggedin", "user")
        console.log(data.data);
        window.location.reload()
        navigate("/DailyAttendance")

      }
      )
      .catch(error => console.log(error));


  };
  return (
      <div className='body login'>
      <div className='logincard'>
        <img className='signupimg' src={Signup} alt="signup"></img>
        <Divider type="vertical" style={{height: "auto"}}/>
        <Form form={form} name="horizontal_login" onFinish={onFinish} className="userform">
          <div style={{ marginBottom: "3vh" }}>
            <img className='logo' src={logo} alt="cognizant logo"></img>
            <h2>Hello Again!</h2>
            <h3 className='muted'>Enter your Associate Id to login</h3>
          </div>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Associate ID!',
              },
            ]}
            style={{
              width: "50%",
              margin: "5px auto"
            }}
          >
            <Input
              type='text'
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Associate Id" />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
                style={{ marginTop: "2vh" }}
              >
                Login
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login

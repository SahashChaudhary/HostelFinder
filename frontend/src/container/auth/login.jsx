import { Button, Checkbox, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout";
import "./login.css";
import axios from "axios";

// const values = { remember: true, email: 'suraj@gmail.com', password: 'hello' }

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log(values);
    const response = await axios.post("http://localhost:8000/api/auth/login", {
      email: values.email,
      password: values.password,
    });

    if (response.data) {
      alert(response.data.message);
      localStorage.setItem("userRole", "user");
      messageApi.open({
        type: "success",
        content: "This is a success message",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {contextHolder}
      <Layout>
        <div>
          <h1 className="login-title">Login to your account</h1>
        </div>
        <div className="logindetail">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className="login-button" type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>

            <p className="login-text-noacc">
              Do not have an account?{" "}
              <Link to="/register" className="login-font-bold">
                Register
              </Link>
            </p>
          </Form>
        </div>
      </Layout>
    </div>
  );
};
export default Login;

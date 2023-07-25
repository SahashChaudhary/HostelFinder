import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout";
import "./register.css";
import axios from "axios";

const onFinish = async (values) => {
  const { data } = await axios.post(
    "http://localhost:8000/api/auth/user_registration",
    {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    }
  );
  if (data) {
    console.log("register succesffully");
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Register = () => (
  <Layout>
    <div>
      <h1 className="register-title text-center">Register to your account</h1>
    </div>
    <div className="registerdetail">
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone No"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button className="register-button" type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <p className="text-center">
          Already have an account? <Link to="/login"> Login </Link>{" "}
        </p>
      </Form>
    </div>
  </Layout>
);
export default Register;

import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../component/Layout";
import "./login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  assignUserRole,
  setLoginDetails,
} from "../../redux/reducers/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const { data } = await axios.post("http://localhost:8000/api/auth/login", {
      email: values.email,
      password: values.password,
    });
    if (data.success) {
      const { token } = data;
      // Set the authorization header for subsequent requests
      axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("userRole", "user");
      dispatch(assignUserRole("user"));
      dispatch(
        setLoginDetails({
          id: data.user._id,
          username: data.user.name,
          token: data.token,
          profile: data?.user?.profile,
        })
      );
      toast.success(data.message);
      navigate("/");
    } else {
      toast.success(data.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
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

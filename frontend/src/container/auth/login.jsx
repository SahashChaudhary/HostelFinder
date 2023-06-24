import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Layout from '../../component/Layout';
import "./login.css"

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Login = () => (
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
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
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
                        message: 'Please input your password!',
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
                <Button className='login-button' type="primary" htmlType="submit">
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
export default Login
import Layout from "../../component/Layout";
import { Button, Upload, Form, Input } from "antd";
import "./addHostel.css";
import axios from "axios";
import { useState } from "react";

const { TextArea } = Input;

const AddHostel = () => {
  const [isGirlsHostel, setIsGirlsHostel] = useState(false);

  return (
    <Layout>
      <div>
        <Button
          onClick={() => {
            isGirlsHostel ? setIsGirlsHostel(false) : setIsGirlsHostel(true);
          }}
        >
          {isGirlsHostel ? "Change to Boys Hostel" : "Change to Girls Hostel"}
        </Button>
      </div>
      {isGirlsHostel ? <GirlsHostelForm /> : <BoysHostelForm />}
    </Layout>
  );
};

const GirlsHostelForm = () => {
  const onFinish = async (values) => {
    console.log("Success:", values);

    const { data } = await axios.post(
      "http://localhost:8000/api/hostel/add_hostel",
      {
        price: values.price,
        title: values.place_title,
        description: values.place_descriptioon,
        phone: values.phone,
        address: values.address,
        catagory: "Girls hostel",
      }
    );
    if (data) {
      alert("hostel added successfully");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div className="form_input">
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Girls Hostel</h3>
        <Form.Item
          label="Place title"
          name="place_title"
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
          label="Place Description"
          name="place_descriptioon"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Price per Month"
          name="price"
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
          label="Address"
          name="address"
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
          label="Phone"
          name="phone"
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
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const BoysHostelForm = () => {
  const onFinish = async (values) => {
    console.log("Success:", values);

    // const { data } = await axios.post(
    //   "http://localhost:8000/api/hostel/add_hostel",
    //   {
    //     price: values.price,
    //     title: values.place_title,
    //     description: values.place_descriptioon,
    //     phone: values.phone,
    //     address: values.address,
    //     catagory: "Boys hostel",
    //   }
    // );
    // if (data) {
    //   alert("hostel added successfully");
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="form_input">
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Boys Hostel</h3>

        <Form.Item
          label="Place title"
          name="place_title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Place Description"
          name="place_descriptioon"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Price per Month"
          name="price"
          rules={[
            {
              required: true,
              message: "invalid Price",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Upload"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddHostel;

import Layout from "../../component/Layout";
import { Button, Upload, Form, Input } from "antd";
import "./addHostel.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const { TextArea } = Input;

const AddHostel = () => {
  const [isGirlsHostel, setIsGirlsHostel] = useState(false);
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <Button
          onClick={() => {
            isGirlsHostel ? setIsGirlsHostel(false) : setIsGirlsHostel(true);
          }}
          style={{ backgroundColor: "red", color: "white" }}
        >
          {isGirlsHostel ? "Change to Boys Hostel" : "Change to Girls Hostel"}
        </Button>
      </div>
      {isGirlsHostel ? <GirlsHostelForm /> : <BoysHostelForm />}
    </Layout>
  );
};

const GirlsHostelForm = () => {
  const [images, setImages] = useState([]);

  const onFinish = async (values) => {
    const hostel = {
      price: values.price,
      title: values.place_title,
      description: values.place_descriptioon,
      phone: values.phone,
      address: values.address,
      catagory: "Girls hostel",
    };

    const bodyFormData = new FormData();
    Object.keys(hostel).map((item) => {
      bodyFormData.append(item, hostel[item]);
    });
    for (let i = 0; i < images.length; i++) {
      bodyFormData.append("photos", images[i]);
    }
    const { data } = await axios.post(
      "http://localhost:8000/api/hostel/add_hostel",
      bodyFormData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (data) {
      toast.success("hostel added successfully");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
<<<<<<< HEAD
              message: "Please input place title!",
=======
              message: "Please input the place title!",
>>>>>>> 097c2163b7d3775b3065a8c4e858a0ddb797e154
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
<<<<<<< HEAD
              message: "Please input place description!",
=======
              message: "Please input the place description!",
>>>>>>> 097c2163b7d3775b3065a8c4e858a0ddb797e154
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
<<<<<<< HEAD
              message: "Please input price per month!",
=======
              message: "Please input the price!",
>>>>>>> 097c2163b7d3775b3065a8c4e858a0ddb797e154
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
<<<<<<< HEAD
              message: "Please input address!",
=======
              message: "Please input the address!",
>>>>>>> 097c2163b7d3775b3065a8c4e858a0ddb797e154
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
<<<<<<< HEAD
              message: "Please input phone number!",
=======
              message: "Please input the phone number!",
>>>>>>> 097c2163b7d3775b3065a8c4e858a0ddb797e154
            },
          ]}
        >
          <Input />
        </Form.Item>
        <input
          type="file"
          onChange={(e) => setImages(e.target.files)}
          multiple
        />

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
  const [images, setImages] = useState([]);

  const onFinish = async (values) => {
    const hostel = {
      price: values.price,
      title: values.place_title,
      description: values.place_descriptioon,
      phone: values.phone,
      address: values.address,
      catagory: "Boys hostel",
    };

    const bodyFormData = new FormData();
    Object.keys(hostel).map((item) => {
      bodyFormData.append(item, hostel[item]);
    });
    for (let i = 0; i < images.length; i++) {
      bodyFormData.append("photos", images[i]);
    }
    const { data } = await axios.post(
      "http://localhost:8000/api/hostel/add_hostel",
      bodyFormData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (data) {
      toast.success("hostel added successfully");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              message: "Please input the place title!",
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
              message: "Please input the place description!",
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
              message: "Please input the price!",
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
              message: "Please input the address!",
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
              message: "Please input the phone number!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
<<<<<<< HEAD
        <Form.Item
          label="Photo"
          name="image"
         
        >
          <Upload {...props}>
            <Button>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
=======
        <input
          type="file"
          onChange={(e) => setImages(e.target.files)}
          multiple
        />

        <Form.Item>
>>>>>>> 097c2163b7d3775b3065a8c4e858a0ddb797e154
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddHostel;

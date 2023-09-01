import Layout from "../../component/Layout";
import { Button, Form, Input, Select } from "antd";
import "./addHostel.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddLocation from "./addLocation/addLocation";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Khalti from "./khalti/khalti";

const { TextArea } = Input;
const options = [
  {
    value: "24 hours electricity",
  },
  {
    value: "Hot and Cold water",
  },
  {
    value: "Laundary",
  },
  {
    value: "Wifi",
  },
  {
    value: "Locker room",
  },
  {
    value: "Parking Lot",
  },
  {
    value: "Security Guard",
  },
  {
    value: "CCTV",
  },
  {
    value: "Balcony/Terrace",
  },
  {
    value: "Halal Food ",
  },
  {
    value: "No Smoking",
  },
];

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
  const { state = {} } = useLocation();

  const [images, setImages] = useState([]);

  const { details, location } = useSelector((state) => state.room); //

  const [form] = Form.useForm(); //

  const [payment, setPayment] = useState(false);
  useEffect(() => {
    setInterval(() => {
      console.log(localStorage.getItem("payment"));
      setPayment(localStorage.getItem("payment"));
    }, 5000);
  }, [payment]);

  useEffect(() => {
    form.setFieldsValue({
      address: details.address,
    });
  }, [details.address]); //
  useEffect(() => {
    if (state?.roomId) {
      form.setFieldsValue({
        address: state.data.address,
        place_title: state.data.title,
        place_descriptioon: state.data.description,
        price: state.data.price,
        phone: state.data.phone,
      });
    }
  }, []); //

  const onFinish = async (values) => {
    const hostel = {
      price: values.price,
      title: values.place_title,
      description: values.place_descriptioon,
      phone: values.phone,
      address: values.address,
      features: values.features,
      lng: location.lng, //
      lat: location.lat, ///
      catagory: "Girls hostel",
    };

    const bodyFormData = new FormData();
    Object.keys(hostel).map((item) => {
      bodyFormData.append(item, hostel[item]);
    });
    for (let i = 0; i < images.length; i++) {
      bodyFormData.append("photos", images[i]);
    }
    // if (state.roomId) {
    //   const { data } = await axios.put(
    //     `http://localhost:8000/api/hostel/update/${state.roomId}`,
    //     bodyFormData,
    //     {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     }
    //   );
    //   if (data) {
    //     toast.success("hostel Updated");
    //   }
    // } else {
    const { data } = await axios.post(
      "http://localhost:8000/api/hostel/add_hostel",
      bodyFormData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (data) {
      toast.success("hostel added successfully");
      localStorage.setItem("payment", false);
    }
    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form_input">
      <Form
        form={form} //
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3 className=" text-center">Girls Hostel</h3>
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
          <Input />
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
        <AddLocation />
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
          <Input />
        </Form.Item>
        <Form.Item label="Hostel Features" name="features">
          <Select
            mode="multiple"
            showArrow
            // tagRender={tagRender}
            // defaultValue={["gold", "cyan"]}
            style={{
              width: "100%",
            }}
            options={options}
          />
        </Form.Item>
        <div className=" flex items-center justify-center mb-4">
          <input
            type="file"
            onChange={(e) => setImages(e.target.files)}
            multiple
          />
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!payment}>
            submit
          </Button>
        </Form.Item>
      </Form>
      <Khalti />
    </div>
  );
};

const BoysHostelForm = () => {
  const { state = {} } = useLocation();
  console.log(state);

  const [images, setImages] = useState([]);
  const { details, location } = useSelector((state) => state.room); //

  const [form] = Form.useForm(); //

  const [payment, setPayment] = useState(false);
  console.log(payment);
  useEffect(() => {
    setInterval(() => {
      console.log(localStorage.getItem("payment"));
      setPayment(localStorage.getItem("payment"));
    }, 5000);
  }, [payment]);

  useEffect(() => {
    form.setFieldsValue({
      address: details.address,
    });
  }, [details.address]); //
  useEffect(() => {
    if (state?.roomId) {
      form.setFieldsValue({
        address: state.data.address,
        place_title: state.data.title,
        place_descriptioon: state.data.description,
        price: state.data.price,
        phone: state.data.phone,
      });
    }
  }, []); //

  const onFinish = async (values) => {
    const hostel = {
      price: values.price,
      title: values.place_title,
      description: values.place_descriptioon,
      phone: values.phone,
      address: values.address,
      features: values.features,
      lng: location.lng, //
      lat: location.lat, ///
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
      localStorage.setItem("payment", false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form_input">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3 className=" text-center">Boys Hostel</h3>
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
        <AddLocation />
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
        <Form.Item label="Hostel Features" name="features">
          <Select
            mode="multiple"
            showArrow
            // tagRender={tagRender}
            // defaultValue={["gold", "cyan"]}
            style={{
              width: "100%",
            }}
            options={options}
          />
        </Form.Item>
        <div className=" flex items-center justify-center mb-4">
          <input
            type="file"
            onChange={(e) => setImages(e.target.files)}
            multiple
          />
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!payment}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Khalti />
    </div>
  );
};

export default AddHostel;

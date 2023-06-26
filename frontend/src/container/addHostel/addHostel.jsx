import Layout from "../../component/Layout";
import { Button, Upload, Form, Input } from "antd";
import "./addHostel.css";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const AddHostel = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <div className="form_input">
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Place title"
            name="place_title"
            rules={[
              {
                required: true,
                message: "Please input your place title!",
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
                message: "Please input your place description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price per Month"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
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
                message: "Please input your address!",
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
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Photo"
            name="image"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your username!",
            //   },
            // ]}
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
            <Button className="add-submit-button" type="primary" htmlType="submit">
              Submit 
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default AddHostel;

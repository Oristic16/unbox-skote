import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
  Table,
} from "reactstrap";

const Menu5 = () => {
  return (
    <FadeIn>
      <Card style={{minHeight:"730px"}}>
        <CardBody className="">
        <CardTitle className="mb-3">ปฏิทินวันหยุด</CardTitle>
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBangkok&src=a2FuaW5fY2hhbXBAaG90bWFpbC5jb20&src=OTgxcTdhNWxpMTloc2V1aW1iOTdjOW1oOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTY4OTI1NjcyNzYwNTA5NTQ4NDdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dGgudGgjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%23AD1457&color=%2333B679&color=%233F51B5&color=%230B8043"
            style={{ border: "solid 1px #777" }}
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default Menu5;

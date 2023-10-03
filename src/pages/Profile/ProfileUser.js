import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, CardBody, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import Breadcrumb from '../../components/Common/Breadcrumb'
import withRouter from '../../components/Common/withRouter'

import * as Yup from "yup";
import { useFormik } from "formik";

import avatar from "../../assets/images/man_2202112.png";

const ProfileUser = () => {

  //meta title
  document.title = "Profile | Skote - React Admin & Dashboard Template";

  const [name, setname] = useState("");
  const [email, setEmail] = useState("")
  const [idx, setidx] = useState(1);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || 'Nirut Nammuang',
      email: email || 'Nirut@growuptech.net',
      idx: idx || '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your UserName"),
      email: Yup.string().email().required("Please Enter Your Email")
    }),
    onSubmit: (values) => {
    }
  });

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Skote" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>Nirut Nammuang</h5>
                        <p className="mb-1">User Email</p>
                        <p className="mb-0">Id no: #1979</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <Form
                className="form-horizontal"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Row>
                <Col lg={4}>
                  <Label className="form-label">User Name</Label>
                  
                    <Input
                      name="username"
                      // value={name}
                      className="form-control"
                      placeholder="Enter User Name"
                      type="text"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.username || ""}
                      invalid={
                        validation.touched.username && validation.errors.username ? true : false
                      }
                    />
                    
                  {validation.touched.username && validation.errors.username ? (
                    <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                  ) : null}
                  </Col>
                  <Col lg={4} className='text-start'>
                    <Label className="form-label">Upload Image</Label>
                    <Input type='file' />
                  </Col>
                  
                  <Input name="idx" value={idx} type="hidden" />
                  
                  
                </Row>
                <Row className="form-group mt-2">
                  <Label className="form-label">User Email</Label>
                  <Col lg={6}>
                  <Input
                    name="email"
                    // value={name}
                    className="form-control"
                    placeholder="Enter User Email"
                    type="email"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.email || ""}
                    invalid={
                      validation.touched.email && validation.errors.email ? true : false
                    }
                  />
                  </Col>
                  {validation.touched.email && validation.errors.email ? (
                    <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                  ) : null}
                  <Input name="idx" value={idx} type="hidden" />
                  </Row>
                <div className="text-end mt-4">
                  <Button type="submit" color="success">
                    Update User Profile
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(ProfileUser)
import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom"
import { Row, Col, BreadcrumbItem, Button } from "reactstrap"

const Breadcrumb = props => {

  const navigate = useNavigate()

  const [isHover, setIsHover] = useState({
    isMenuHover: false
  })

  return (
    <Row>
      <Col className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          {props.isBack ? (
            <div className="d-flex justify-content-start align-items-center">
              <Button onClick={() => navigate(props.path ? props.path : -1)} className="me-3"><i className='fas fa-angle-left'></i> Back</Button>
              <h4 className="mb-sm-0 font-size-18">{props.breadcrumbItem}</h4>
            </div>
          ) : <h4 className="mb-sm-0 font-size-18">{props.breadcrumbItem}</h4>
          }
          {props.subMenu === "laonline" ? (
            <div>
              <div className="d-flex align-items-center">
                <div
                  style={{ width:"100px"}}
                  className=""
                  onMouseEnter={() => {
                    setIsHover({...isHover, isMenuHover: true})
                  }}
                  onMouseOut={() => {
                    setIsHover({...isHover, isMenuHover: false})
                  }}
                  >
                  <i style={{fontSize: "3em" }} className="fa-solid fa-square-sliders"></i>
                </div>
                {isHover.isMenuHover ? (
                  <div >
                  Hello World
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link to="#">{props.title}</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link to="#">{props.breadcrumbItem}</Link>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
}

export default Breadcrumb

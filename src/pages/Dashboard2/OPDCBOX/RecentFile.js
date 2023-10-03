import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  Card,
  CardBody,
} from "reactstrap";

import { recentfile2 } from "../../../common/data/file-manager";

const RecentFile = () => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="">
            <div className="d-flex flex-wrap">
              <h5 className="me-3">
                <i className="fa-solid fa-file font-size-20 me-2"></i>Recent Files
              </h5>

              <div className="ms-auto">
                <Link to="#" className="fw-medium text-reset">
                  View All
                </Link>
              </div>
            </div>
            <hr className="mt-2" />

            <div className="table-responsive">
              <Table className="table align-middle table-nowrap table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date modified</th>
                    <th scope="col" colSpan="2">
                      Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentfile2.map((item, key) => (
                    <tr key={key}>
                      <td>
                        <Link to="#" className="text-dark fw-medium">
                          <i className={item.icon}></i> {item.file}
                        </Link>
                      </td>
                      <td>{item.date}</td>
                      <td>{item.size} KB</td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            tag="a"
                            className="font-size-16 text-muted"
                            role="button"
                          >
                            <i className="mdi mdi-dots-horizontal"></i>
                          </DropdownToggle>

                          <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem href="#">Open</DropdownItem>
                            <DropdownItem href="#">Edit</DropdownItem>
                            <DropdownItem href="#">Rename</DropdownItem>
                            <div className="dropdown-divider"></div>
                            <DropdownItem href="#">Remove</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="mt-4" style={{ textAlign: "end" }}>
            <Link 
              to="https://eoffice.opdc.go.th/drive/home" 
              className="btn btn-primary  btn-md"
              target="_blank"
            >
              ดูข้อมูลเพิ่มเติมได้ที่ระบบจัดเก็บและแชร์ไฟล์{" "}
              <i className="mdi mdi-arrow-right ms-1"></i>
            </Link>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default RecentFile;

import React, { useMemo } from "react";
import { Card, CardBody } from "reactstrap";
import TableContainer from "../../components/Common/TableContainer";

const TableForm = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "ลำดับ",
        accessor: "id",
      },
      {
        Header: "หัวข้อ",
        accessor: "title",
      },
      {
        Header: "ตั้งแต่วันที่",
        accessor: "leaveFromDate",
      },
      {
        Header: "ถึงวันที่",
        accessor: "leaveToDate",
      },
      {
        Header: "สถานะ",
        accessor: "status",
      },
    ],[]
  );

  return (
    <React.Fragment>
          <TableContainer
            columns={columns}
            data={data}
            isGlobalFilter={true}
            isShowSelect={true}
            customPageSize={5}
            className="custom-header-css"
          />
    </React.Fragment>
  );
};

export default TableForm;

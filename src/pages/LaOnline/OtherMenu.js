import { Backdrop, Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const actions = [
    { icon: <i className="fa-solid fa-clipboard font-size-20"></i>, name: 'กำหนดข้อมูลวันลา', path: 'setdata?menuName=1' },
    { icon: <i className="fa-solid fa-user-shield font-size-20"></i>, name: 'มอบหมายการปฏิบัติราชการ', path: 'setdata?menuName=2' },
    { icon: <i className="fa-solid fa-calculator font-size-20"></i>, name: 'คำนวณวันลาสะสม', path: 'setdata?menuName=3' },
    { icon: <i className="fa-solid fa-calendar-clock font-size-20"></i>, name: 'คำนวณวันทำงานย้อนหลัง', path: 'setdata?menuName=4' },
    { icon: <i className="fa-solid fa-calendar-image font-size-20"></i>, name: 'ปฏิทินวันหยุด', path: 'setdata?menuName=5' },
    { icon: <i className="fa-solid fa-users-gear font-size-20"></i>, name: 'กำหนดสิทธิและบทบาท', path: 'setdata?menuName=6' },
  ];

const OtherMenu = () => {

    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
        <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            sx={{ position: 'fixed', bottom: "9%", right: "3%" }}
            icon={<i className="fa-solid fa-bars font-size-20"></i>}
            // onClose={handleClose}
            // onOpen={handleOpen}
            // open={open}
        >
            {actions.map((action) => (
            <SpeedDialAction
                sx={{width:"50px", height:"50px"}}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                // tooltipOpen
                onClick={() => {
                    navigate(`/laonline/${action.path}`)
                }}
            />
            ))}
        </SpeedDial>
  </React.Fragment>
  )
}

export default OtherMenu
import { Backdrop, Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const actions = [
    { icon: <i className="fa-solid fa-nfc-magnifying-glass font-size-20"></i>, name: 'ค้นหารายงาน', path: 'setdata?menuName=1' },
    { icon: <i className="fa-solid fa-user-magnifying-glass font-size-20"></i>, name: 'ค้นหาข้อมูลคำขอ', path: 'setdata?menuName=2' },
    { icon: <i className="fa-solid fa-landmark-magnifying-glass font-size-20"></i>, name: 'ค้นหาข้อมูลเข้าทำงาน', path: 'setdata?menuName=3' },
    { icon: <i className="fa-solid fa-user-gear font-size-20"></i>, name: 'จัดการข้อมูลพนักงาน', path: 'setdata?menuName=4' },
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
            sx={{ position: 'fixed', bottom: "6%", right: "3%" }}
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
                    navigate(`/entrywork/${action.path}`)
                }}
            />
            ))}
        </SpeedDial>
  </React.Fragment>
  )
}

export default OtherMenu
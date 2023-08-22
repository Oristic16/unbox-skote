
import React, { useState } from 'react'
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'



const ModalUpdate = (props) => {

    const [open, setOpen] = useState(false)

    const [data,setData] = useState(props.data)
    
    function openModal() {
        setOpen(false)
      }

    const [modalData, setModalData] = useState({
        id:null,
        username:null,
        password:null,
      })

      function updateButton(id) {
        setOpen(true)
        const itemToUpdate = data.find(item => item.id === id)
        setModalData({ id: id, ...itemToUpdate})
        console.log(modalData)
      }

      function saveChange() {
        
        const indexToUpdate = data.findIndex(item => item.id === modalData.id);
        
        const updatedItem = {
            id : modalData.id,
            username: modalData.username,
            password: modalData.password
        }
    
        const updatedData = [...data]
        updatedData[indexToUpdate] = updatedItem
    
        setData(updatedData)
    
        // updateDataBase(modalData.id, updatedData);
        setOpen(false)
      }

  return (
    <div>
        <Button color='warning' onClick={updateButton}>Update</Button>
        <Modal centered isOpen={open} toggle={openModal}>
            <ModalHeader>แก้ไขข้อมูล</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>ID</Label>
                    <Input
                        disabled
                        type="text"
                        value={modalData.id}
                        onChange={e => setModalData({ ...modalData, id: e.target.value})}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Username</Label>
                    <Input 
                        type="text"
                        value={modalData.username}
                        onChange={e => setModalData({ ...modalData, username: e.target.value})}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                    Password
                    </Label>
                    <Input 
                        type="text" 
                        value={modalData.password}
                        onChange={e => setModalData({ ...modalData, password: e.target.value})}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={saveChange}>saveChange</Button>
                <Button color="danger" onClick={openModal}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
    </div>
  )
}

export default ModalUpdate

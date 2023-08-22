import React, { useState } from 'react'
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter } from 'reactstrap'

const ModalAdd = (props) => {

    const [open, setOpen] = useState(false)

    function openAddModal() {
        setOpen(true)
    }

    function closeAddModal() {
        setOpen(false)
    }

    


  return (
    <div>
        <Button onClick={openAddModal}>Add Data</Button>
        <Modal isOpen={open}>
            <ModalBody>
            <FormGroup>
                    <Label>ID</Label>
                    <Input
                        disabled
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Username</Label>
                    <Input 
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                    Password
                    </Label>
                    <Input 
                        type="text" 
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button>บันทึก</Button>
                <Button onClick={closeAddModal}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
    </div>
  )
}

export default ModalAdd
import React from 'react'

const ConvertToISO = (date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}T${date.toLocaleTimeString()}.000Z`
}

export default ConvertToISO
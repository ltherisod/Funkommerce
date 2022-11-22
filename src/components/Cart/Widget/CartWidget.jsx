import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {Button} from '@mui/material'
const CartWidget = () => {
  return (
   <Button >
     <LocalMallIcon color='secondary' fontSize='medium' />
   </Button>
  )
}

export default CartWidget
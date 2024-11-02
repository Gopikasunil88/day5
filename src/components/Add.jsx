import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div class="form"> 
    <TextField class="formfield" id="outlined-basic" label="Product Name" variant="outlined"/><br />  
    <TextField class="formfield" id="outlined-multiline-flexible" label="Description" multiline maxRows={4}/><br />
    <TextField class="formfield" id="outlined-basic" label="Price" variant="outlined"/><br />
    <TextField class="formfield" id="outlined-basic" label="Category" variant="outlined"/><br />
    <Button class="formbtn">Submit</Button>
    <Button class="formbtn">Reset</Button>
</div>
  )
}

export default Add

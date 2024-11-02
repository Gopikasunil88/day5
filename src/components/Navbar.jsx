import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <AppBar>
        <Toolbar> 
            <Typography variant="h6">My_app</Typography><hr></hr>&nbsp; &nbsp;
            <Link to='/h'> 
            <Button variant='contained'>Home</Button>
            </Link> &nbsp; &nbsp;
            <Link to='/a'> 
            <Button variant='contained'>Add</Button>
            </Link>          
        </Toolbar>
       </AppBar>
       
    </div>
  )
}

export default Navbar

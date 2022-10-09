import React,{useState} from 'react'
import { Box, AppBar, InputBase,  Toolbar, Typography, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import {styled} from "@mui/material/styles"
import { Pets, Notifications } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import AvaImage from '../../../image/Avatar.jpg'

const StyledToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
});

const Search = styled('div')(({theme}) => ({
  backgroundColor:'White',
  padding:'0 10px',
  borderRadius:'',
  width:'40%'
}));

const Icons = styled(Box)(({theme}) => ({
  display:'none',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.up("sm")]:{
    display: 'flex'
  }
}));

const UserBox = styled(Box) (({theme}) => ({
  display:'flex', 
  alignItems:'center', 
  gap:'10px',
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }
}));

const NavBar = () => {

  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {" "}
          lama dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Maksat"
            src={AvaImage}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} alt="Maksat" src={AvaImage} />
          <Typography variant="span">Max</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default NavBar
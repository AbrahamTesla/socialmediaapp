import {
   AppBar,
   Avatar,
   Badge,
   InputBase,
   Menu,
   MenuItem,
   styled,
   Toolbar,
   Typography,
} from '@mui/material';
import { Book, Mail, Notifications } from '@mui/icons-material';
import React, { useState } from 'react';
import { Box } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
   diplay: 'flex',
   justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
   backgroundColor: 'white',
   padding: '0 10px',
   borderRadius: theme.shape.borderRadius,
   width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
   display: 'none',
   gap: '20px',
   alignItems: 'center',
   [theme.breakpoints.up('sm')]: {
      display: 'flex',
   },
}));

const ProfileTag = styled(Box)(({ theme }) => ({
   display: 'flex',
   gap: '10px',
   alignItems: 'center',
   [theme.breakpoints.up('sm')]: {
      display: 'none',
   },
}));

export default function NavBar() {
   const [open, setOpen] = useState(false);

   return (
      <AppBar position='sticky'>
         <StyledToolbar>
            <Toolbar variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
               Blog App
            </Toolbar>
            <Book sx={{ display: { xs: 'block', sm: 'none' } }} />
            <Search>
               <InputBase placeholder='search...' />
            </Search>
            <Icons onClick={e => setOpen(true)}>
               <Badge badgeContent={4} color='error'>
                  <Mail />
               </Badge>
               <Badge badgeContent={4} color='error'>
                  <Notifications />
               </Badge>
               <Avatar
                  alt='Alesso Neo'
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
                  sx={{ width: 30, height: 30 }}
                  onClick={e => setOpen(true)}
               />
            </Icons>
            <ProfileTag onClick={e => setOpen(true)}>
               <Avatar
                  alt='Alesso Neo'
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
                  sx={{ width: 30, height: 30 }}
               />
               <Typography variant='span'>Neo</Typography>
            </ProfileTag>
         </StyledToolbar>
         <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            open={open}
            onClose={e => setOpen(false)}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
         </Menu>
      </AppBar>
   );
}

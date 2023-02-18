import {
   AccountBox,
   Article,
   Brightness6,
   ContactPage,
   Home,
   Label,
   Settings,
} from '@mui/icons-material';
import {
   Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Switch,
} from '@mui/material';

import React from 'react';

export default function SideBar() {
   return (
      <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
         <List>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#home'>
                  <ListItemIcon>
                     <Home />
                  </ListItemIcon>
                  <ListItemText primary='Home' />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#accountBox'>
                  <ListItemIcon>
                     <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary='Account' />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#settings'>
                  <ListItemIcon>
                     <Settings />
                  </ListItemIcon>
                  <ListItemText primary='Settings' />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#contact'>
                  <ListItemIcon>
                     <ContactPage />
                  </ListItemIcon>
                  <ListItemText primary='Contacts' />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#article'>
                  <ListItemIcon>
                     <Article />
                  </ListItemIcon>
                  <ListItemText primary='Article' />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton component='a' href='#article'>
                  <ListItemIcon>
                     <Brightness6 />
                     <Switch color='warning' />
                  </ListItemIcon>
               </ListItemButton>
            </ListItem>
         </List>
      </Box>
   );
}

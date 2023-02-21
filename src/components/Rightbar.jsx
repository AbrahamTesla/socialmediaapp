import {
   Avatar,
   AvatarGroup,
   Box,
   Divider,
   ImageList,
   ImageListItem,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography,
} from '@mui/material';
import React from 'react';

export default function RightBar() {
   return (
      <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
         <Box position={'fixed'} width={300}>
            <Typography variant='h6' fontWeight={300} marginBottom={2}>
               Friends
            </Typography>
            <AvatarGroup max={7} mb={2}>
               <Avatar
                  alt='Alesso Neo'
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
               <Avatar
                  alt='Trinity Cle'
                  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
               <Avatar
                  alt='Sandy Baker'
                  src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
               <Avatar
                  alt='Agnes Walker'
                  src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
               <Avatar
                  alt='Alex Henderson'
                  src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
               <Avatar
                  alt='Morpheus Henderson'
                  src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
               <Avatar
                  alt='Alexy Nicole'
                  src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
               <Avatar
                  alt='Adrianna Brianna'
                  src='https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1600'
               />
            </AvatarGroup>
            <Typography variant='h6' fontWeight={300} mb={2} mt={2}>
               Shared Photo
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
               <ImageListItem>
                  <img
                     src='https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     alt='pain'
                  />
               </ImageListItem>

               <ImageListItem>
                  <img
                     src='https://images.pexels.com/photos/1209462/pexels-photo-1209462.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     alt='lemon'
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src='https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     alt='photography'
                  />
               </ImageListItem>
            </ImageList>
            <Typography variant='h6' fontWeight={300} mb={2} mt={2}>
               Forum
            </Typography>
            <List
               sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
               }}
            >
               <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                     <Avatar
                        alt='Alesso Neo'
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary='Focus everyday'
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component='span'
                              variant='body2'
                              color='text.primary'
                           >
                              Alesso Neo
                           </Typography>
                           {" Focus and you'll earn it someday"}
                        </React.Fragment>
                     }
                  />
               </ListItem>
               <Divider variant='inset' component='li' />
               <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                     <Avatar
                        alt='Alex Nicole'
                        src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary='Get up at 4:30 a.m.'
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component='span'
                              variant='body2'
                              color='text.primary'
                           >
                              Save by the bell
                           </Typography>
                           {' Practices makes perfect!!!'}
                        </React.Fragment>
                     }
                  />
               </ListItem>
               <Divider variant='inset' component='li' />
               <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                     <Avatar
                        alt='Cleo Tessie'
                        src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600'
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary='No what if?'
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component='span'
                              variant='body2'
                              color='text.primary'
                           >
                              Cleopatra Nile
                           </Typography>
                           {' Have you ever wondered?'}
                        </React.Fragment>
                     }
                  />
               </ListItem>
            </List>
         </Box>
      </Box>
   );
}

import React, { useState } from 'react';

import {
   Avatar,
   Button,
   ButtonGroup,
   Fab,
   Modal,
   TextField,
   Tooltip,
   Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack } from '@mui/system';
import styled from '@emotion/styled';
import {
   Camera,
   DateRange,
   EmojiEmotions,
   Publish,
   Share,
   VideoCameraBack,
} from '@mui/icons-material';

const StyledModal = styled(Modal)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
});

const UserBox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   marginBottom: '20px',
});

export default function Add() {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Tooltip
            onClick={e => setOpen(true)}
            title='Delete'
            sx={{
               bottom: 20,
               position: 'fixed',
               left: { xs: 'calc(50% - 25px)', md: 30 },
            }}
         >
            <Fab color='primary' aria-label='add'>
               <AddIcon />
            </Fab>
         </Tooltip>
         <StyledModal
            open={open}
            onClose={e => setOpen(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Box
               width={400}
               height={280}
               bgcolor={'background.default'}
               color={'text.primary'}
               p={3}
               borderRadius={5}
            >
               <Typography variant='h6' color='gray' textAlign='center'>
                  What do you want to Share?
               </Typography>
               <UserBox>
                  <Avatar
                     alt='Alesso Neo'
                     src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  />
                  <Typography variant='span' fontWeight={500}>
                     Alesso Neo
                  </Typography>
               </UserBox>
               <TextField
                  sx={{ width: '100%' }}
                  id='standard-multiline-static'
                  multiline
                  rows={2}
                  placeholder='Share here...'
                  variant='standard'
               />
               <Stack direction='row' gap={1} mt={2} mb={2}>
                  <EmojiEmotions sx={{ color: '#ffeb3b' }} />
                  <Camera sx={{ color: '#ff7043' }} />
                  <VideoCameraBack sx={{ color: '#039be5' }} />

                  <Share sx={{ color: '#ff5722' }} />
               </Stack>
               <ButtonGroup
                  fullWidth
                  variant='contained'
                  aria-label='outlined primary button group'
               >
                  <Button>
                     <Publish />
                  </Button>
                  <Button sx={{ width: '100px', marginLeft: '5px' }}>
                     <DateRange />
                  </Button>
               </ButtonGroup>
            </Box>
         </StyledModal>
      </>
   );
}

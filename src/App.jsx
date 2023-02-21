import { createTheme, ThemeProvider } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
   const [theme, setTheme] = useState('light');

   const darkTheme = createTheme({
      palette: {
         mode: theme,
      },
   });

   return (
      <ThemeProvider theme={darkTheme}>
         <Box bgcolor={'background.default'} color={'text.primary'}>
            <Navbar />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
               <Sidebar setTheme={setTheme} theme={theme} />
               <Feed />
               <Rightbar />
            </Stack>
            <Add />
         </Box>
      </ThemeProvider>
   );
}

export default App;

import './App.css';
import data from './data.json'
import Dropdown from './Dropdown';
import Imagesection from './Imagesection';
import Box from '@mui/material/Box';
import React from 'react';



function App() {
  const [filteredData, setfilteredData]=React.useState();
  return (
    <Box
    sx={{
      width: 300,
      height: 300,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
      <Dropdown setfilteredData={setfilteredData} data = {data}/>
      <Imagesection filteredData={filteredData} data = {data} />

      </Box>
  );
}

export default App;

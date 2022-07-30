import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Dropdown({setfilteredData, data}) {
    const handleChange=(event)=>{
        const filteredData=data.photos.filter(value=>value.heading===event.target.value);
        setfilteredData (filteredData);
    }
 
    
 
    return (
    <div>
      <Select
          //value={age}
          onChange={handleChange}
          //label="Age"
        >
          {data.photos.map((value) => {
            return(<MenuItem value={value.heading} key={value.id}>{value.heading}</MenuItem>);
          })}
        </Select>
    </div>
  )
}

export default Dropdown

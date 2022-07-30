import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Imagesection({filteredData,data}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {(filteredData ? filteredData : data.photos).map((value) =>
        !filteredData && value.id===1 ? (
        <>
        <CardMedia
        component="img"
        height="194"
        image={value.image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {value.discription}
        </Typography>
      </CardContent>
      </>
      ):filteredData ? (
        <>
        <CardMedia
        component="img"
        height="194"
        image={value.image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {value.discription}
        </Typography>
      </CardContent>
        </>
      ):null
      )}
      
      
    </Card>
    </div>
  )
}

export default Imagesection

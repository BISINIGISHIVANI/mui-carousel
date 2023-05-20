import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


interface Props{
  carouselItems:Items;
}
export  const CarouselCard:React.FC<Props>=({carouselItems})=>{
  return (
    <Card className="card"
    sx={{ display: 'flex',flexDirection:"column",
    width:"100%",
   }}>
      <Box sx={{ display: 'flex'}}>
        <CardMedia
        component="img"
        sx={{ width:"60%",height:"100%" }}
        image={carouselItems.picture}
        alt={carouselItems.description}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto'}}>
          <Typography component="div" variant="h5">
          {carouselItems.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {carouselItems.description}
          </Typography>
        </CardContent>
      </Box>
      </Box>
    </Card>
  );
}
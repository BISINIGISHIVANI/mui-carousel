import React from "react"
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
interface Props{
  carouselItems:Items;
}
export  const ThumbnailCard:React.FC<Props>=({carouselItems})=>{
  return (
    <Card className="thumbnail-card card"sx={{ display: 'flex',flexDirection:"column"}} >
        <CardMedia
        component="img"
        sx={{ width:140,height:140 }}
        image={carouselItems.picture}
        alt={carouselItems.description}
      />
    </Card>
  );
}
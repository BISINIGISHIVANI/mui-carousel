import React from "react"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


interface Props{
  carouselItems:Items;
}
export  const CarouselCard:React.FC<Props>=({carouselItems})=>{
  const theme = useTheme();

  return (
    <Card className="card"sx={{ display: 'flex',flexDirection:"column"}}>
      <Card sx={{ display: 'flex'}}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={carouselItems.picture}
        alt={carouselItems.description}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {carouselItems.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {carouselItems.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      </Card>
    </Card>
  );
}
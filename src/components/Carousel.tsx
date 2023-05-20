
import Carousel from 'react-material-ui-carousel'
import {CarouselCard} from './CarouselCard'
import { ThumbnailCard } from './ThumbnailCard'
import one from "../assets/one.avif"

import three from "../assets/three.avif"
import four from "../assets/four.avif"

export default function CarouselExample()
{
    const items:Items[] = [
        {
           picture:one,
           description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            picture:three,
            description:"but also the leap into electronic typesetting, remaining essentially unchanged. "
         },
         {
            picture:four,
            description:"orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
         },
    ]

    return (
        <div className='carousel-template'>
        <Carousel
          fullHeightHover={true}
          autoPlay={true}
          interval={3000}
          stopAutoPlayOnHover={true}
          animation='fade'
          duration={1000}
          indicators={true}
          IndicatorIcon={ items.map( (item, i) => <ThumbnailCard key={i} carouselItems={item} />) }
          indicatorIconButtonProps={{
            style: {
               margin: '0 10px',
               opacity:0.5
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
              boxShadow:"5px gray",
              borderRadius:"10px",
              opacity:1
            },
        }}
        indicatorContainerProps={{
    
        }}
          cycleNavigation={true}
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
            {
                items.map( (item, i) => <CarouselCard key={i} carouselItems={item} /> )
            }
        </Carousel>
       
        </div>
    )
}


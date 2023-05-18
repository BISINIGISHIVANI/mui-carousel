
import Carousel from 'react-material-ui-carousel'
import {CarouselCard} from './CarouselCard'
import one from "../assets/one.avif"
import two from "../assets/two.avif"
import three from "../assets/three.avif"
import four from "../assets/four.avif"
export default function CarouselExample()
{
  
    const items:Items[] = [
        {
           picture:one,
           description:"www"
        },
        {
            picture:two,
            description: "Hello World!"
        },
        {
            picture:three,
            description:"www"
         },
         {
            picture:four,
            description:"www"
         },
    ]

    return (
        <Carousel
          fullHeightHover={false}
          autoPlay={true}
        //   interval={3000}
          stopAutoPlayOnHover={true}
          animation='fade'
          duration={1000}
          indicators={true}
          IndicatorIcon={ items.map( (item, i) => <CarouselCard key={i} carouselItems={item} />) }
          indicatorIconButtonProps={{
            style: {
                padding: '10px', 
                color: 'blue' 
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: 'red'
            }
        }}
        indicatorContainerProps={{
            style: {
                marginTop: '50px', 
                textAlign: 'right' 
            }
    
        }}
          cycleNavigation={true}
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        //   navButtonsWrapperProps={{  
        //     style: {
        //         bottom: '0',
        //         top: 'unset'
        //     }
        // }}
        >
            {
                items.map( (item, i) => <CarouselCard key={i} carouselItems={item} /> )
            }
        </Carousel>
    )
}


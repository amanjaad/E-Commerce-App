import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";
import { makeStyles } from "@material-ui/core";

const useStykes = makeStyles(theme => ({
    image:{
        width:'100%',
        height:280,
        [theme.breakpoints.down("sm")]:{
            objectFit:'cover',
            height:180
        }
    },
    corousel:{
        marginTop:10
    }
}))
const Banner = () => {
    const classes = useStykes();
    return (
        <Carousel
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps = {{
            style:{
                background:'#ffffff',
                color:'#494949',
                borderRadius:0,
                margin:0

            }
        }}
        className={classes.corousel}
        >
        {
            bannerData.map(image => (
                <img src={image} className={classes.image}/> 
               ))
        }
    </Carousel>
    )
}
export default Banner;
import { Box, makeStyles } from "@material-ui/core";
import {useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
//component
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { getProducts as listProducts} from "../../redux/actions/productActions";
//import { products } from "../../constants/data";


const useStyles = makeStyles(theme => ({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightwrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
    [theme.breakpoints.down("md")]:{
      display:'none'
    }
  },
  leftWrapper:{
    width:"80%",
    [theme.breakpoints.down("md")]:{
      width:'100%'
    }
  }
}));
const Home = () => {
  const classes = useStyles();
  const { products } = useSelector(state => state.getProducts)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box className={classes.leftWrapper} >
            <Slide timer={true} title="Deal Of The Day" products = {products} />
          </Box>
          <Box className={classes.rightwrapper}>
            <img src={adURL} style={{ width: 230 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts For You" products = {products} />
        <Slide timer={false} title="Suggested Items"products = {products} />
        <Slide timer={false} title="Top Selection" products = {products}/>
        <Slide timer={false} title="Recommended Items" products = {products} />
        <Slide timer={false} title="Best Sellers" products = {products} />
      </Box>
    </div>
  );
};
export default Home;

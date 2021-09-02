import { Box, makeStyles, Typography ,Table , TableBody , TableRow , TableCell , Grid}  from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import clsx from "clsx";
import {LocalOffer as Badge} from '@material-ui/icons';

//component
import ActionItems from "./ActionItems";
import { products } from "../../constants/data";


const useStyles = makeStyles(theme => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
   // margin: "0 80px",
    background: "#fff",
    display: "flex",
    [theme.breakpoints.down("md")]:{
      margin:0,
    }
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  smallText: {
    fontSize: 14,
    verticalAlign:'baseline',
    '& > *':{
        marginTop:10,
        fontSize:14
    }
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 28,
  },
  badge:{
      fontSize:14,
      marginRight:10,
      color:"#00cc00"
  }
}));

const DetailView = ({ match }) => {
  const classes = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    
const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const { product } = useSelector((state) => state.getProductDetails);
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid 
              item lg={4} md ={4} sm ={8} xs ={12} ><ActionItems product={product} />
          </Grid>
          <Grid item lg ={8} md ={8} sm ={8} xs ={12} className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.smallText, classes.greyTextColor)}
            >
              8 Ratings & 1 Review
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>{product.price.mrp}</strike>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>{product.price.discount}</span>
            </Typography>
            <Typography style={{marginTop:20,fontWeight:600}}>Available Offers</Typography>
            <Box className={classes.smallText}>
              <Typography> <Badge className={classes.badge} />  Special PriceGet extra 5% offT&C </Typography>

              <Typography>
              <Badge className={classes.badge} />
                Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%See all
                productsT&{" "}
              </Typography>

              <Typography>
              <Badge className={classes.badge} />
                Bank Offer10% off on Kotak Bank Credit Cards, up to ₹1500. On
                Orders of ₹5000 and aboveT&C{" "}
              </Typography>

              <Typography>
              <Badge className={classes.badge} />
                Bank Offer10% off on Federal Bank Debit and Credit Cards, up to
                ₹1500. On orders of ₹5000 and aboveT&C{" "}
              </Typography>
            </Box>
            <Table>
              <TableBody>
                  <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                      <TableCell style={{fontWeight:600}}>{date.toDateString()} |₹40</TableCell>
                  </TableRow>
                  <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                      <TableCell>No Warranty</TableCell>
                  </TableRow>
                  <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>Seller</TableCell>
                      <TableCell className={classes.smallText}>
                        <span style={{color:"#2874f0"}}>SuperComNet</span>
                        <Typography> GST Invoice Available</Typography>
                        <Typography>14 Days Return Policy</Typography>
                        <Typography>View More Sellers Starting from ₹300</Typography>
                        </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell colSpan={2}><img style={{width:390}} src={sellerURL} /></TableCell>
                  </TableRow>
                  <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
                  </TableRow>
              </TableBody>
          </Table>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DetailView;

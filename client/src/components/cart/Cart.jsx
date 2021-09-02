import {useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import {Box , makeStyles , Typography , Button ,Grid} from "@material-ui/core";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
//component
import CartItem from "./CartItem";
import {removeFromCart} from "../../redux/actions/cartActions";
import EmptyCart from "./EmptyCart"; 
import TotalView from "./TotalView";


const useStyles = makeStyles(theme => ({
    component:{
        //marginTop:55,
        padding:"30px 135px",
        display:'flex',
        [theme.breakpoints.down("sm")]:{
            padding:'15px 0'
        }
    },
    leftComponent:{
        //width:"67%",
        [theme.breakpoints.down("sm")]:{
            padding:15
        }
    },
    header:{
        padding:"15px 24px",
        background:"#fff",
    },
    placeOrder:{
        background:"#fb641b",
        borderRadius:2,
        color:"#fff",
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto',
    },
    bottom:{
        padding:"16px 22px",
        borderTop:"1px solid #f0f0f0",
        background:"#fff",
        boxShadow:"0 -2px 10px 0 rgb(0 0 0/10%)"
    }
}));
const Cart = () => {
    const {cartItems} = useSelector(state => state.cart);
    const classes = useStyles();
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    
    useEffect(() => {
        console.log(cartItems);  
    })

    const buyNow = async () => {
        let response = await payUsingPaytm({amount:500,email:"amanjadeja52@gmail.com"});
        let information = ({
            action:"https://securegw-stage.paytm.in/order/process",
            params:response
        })
        post(information);
    }
    return (
        <>
        {
            cartItems.length ? <Grid container className={classes.component} >
                <Grid  item lg={9} md ={9} sm={9} xs={12} className={classes.leftComponent}>
                    <Grid className={classes.header}>
                        <Typography style={{fontSize:18,fontWeight:600}}>My Cart({cartItems.length})</Typography>
                    </Grid>
                    {
                        cartItems.map((item) => (
                            <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                        ))
                    }
                    <Box className={classes.bottom}>
                            <Button onClick={() => buyNow()} className={classes.placeOrder} variant="contained">
                                Place Order
                            </Button>
                    </Box>
                </Grid>
                <Grid item lg={3} md ={3} sm={3} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
                 </Grid> : 
                 <EmptyCart />
        }
        </>
    )
}
export default Cart;
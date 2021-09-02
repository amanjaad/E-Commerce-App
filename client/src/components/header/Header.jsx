import { AppBar, Toolbar, makeStyles ,Typography,Box,withStyles ,IconButton, Drawer , List , ListItem} from "@material-ui/core";
import {Link} from 'react-router-dom';
import { Menu } from "@material-ui/icons";
import { useState } from "react";
//component
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButtons";
const useStyles = makeStyles(theme => ({
    header:{
        background:'#2874f0',
        height:55,
    },
    logo:{
        width:75
    }
    ,sublogo:{
        width:10,
        marginLeft:4,
        height:10
    },
    container:{
        display:'flex',
        height:10,
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:'#fff'
        
    },
    subheading:{
        fontSize:10,
        fontStyle:'italic'
    },
    list:{
      width:250
    },
    menuButton:{
      display:'none',
      [theme.breakpoints.down("sm")]:{
        display:'block'
      }
    },
    headerButtons:{
      margin: "0 7% 0 auto",
      [theme.breakpoints.down("sm")]:{
        display:'none'
      }
    }
}));
const ToolBar =  withStyles({
  root:{
    minHeight: 55
  }
})(Toolbar);

const Header = () => {
  const classes = useStyles();
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
const [open , setOpen] = useState(false);

const handleClose = () => {
  setOpen(false);
}

const handleOpen = () => {
  setOpen(true);
}

const list = () => {
  return (
    <Box className={classes.list} onClick={handleClose} >
      <List>
          <ListItem button>
          <HeaderButtons />
          </ListItem>
      </List>
    </Box>
  )
}

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton className={classes.menuButton} color="inherit" onClick={handleOpen}>
          <Menu />
        </IconButton>
        <Drawer open ={open} onClose={handleClose}>
          {list()}
        </Drawer>
          <Link to ='/' className={classes.component}>
          <img src={logoURL} alt="logo" className ={classes.logo} />
          <Box className={classes.container}>
          <Typography className={classes.subheading}>Explore <Box component="span" style={{color:'#FFE500'}}>plus </Box></Typography>
          <img src={subURL} alt="plus logo" className={classes.sublogo} />
          </Box>
          </Link>
          <SearchBar />
          <span className={classes.headerButtons}><HeaderButtons /> </span>
      </ToolBar>
    </AppBar>
  );
};
export default Header;

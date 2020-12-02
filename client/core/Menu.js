import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import cart from './../cart/cart-helper.js'
import {Link, withRouter} from 'react-router-dom'
import Sidebar from './Sidebar.js'
import ModalSelectCity from './ModalSelectCity.js'
import Modal1Btn from './Modal1Btn.js'
import Modal2Btn from './Modal1Btn.js'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import logo from './../assets/images/logo.png'
import Buy from './../assets/images/icons/Buy.png'
import Dialog from './../assets/images/Union.png'
import Search from './../assets/images/icons/Search.png'
import Cart2 from './../cart/Cart2.js'

const useStyles = makeStyles(theme => ({
  header: {
      height: 80,
      width: 'auto',//'max-content',
      margin: 'auto',
      boxShadow: '0 15px 15px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  headerContainer: {
      marginLeft: theme.basic.outerMargins,
      marginRight: theme.basic.outerMargins,
      //border: '1px solid black',
      width: '100%',
      height: 52,
      display: 'flex',
      alignItems: 'center'
  },
  logo: {
      width: 150,
      height: 48,
      maxWidth: '-webkit-fill-available',
      height: 'auto'
  },
  searchbar: {
      maxWidth: 328,
      height: 50,
      backgroundColor: '#fbfbfb',
      boxShadow: 'inset 0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
      borderRadius: theme.basic.borderRadius,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',

  },
  dropdown: {
      maxWidth: 288,
      height: 50,
      left: 771,
      top: 16,
      backgroundColor: '#FBFBFB',
      borderRadius: theme.basic.borderRadius,
      filter: 'drop-shadow(0px 2px 4px rgba(117, 131, 142, 0.04)), drop-shadow(0px 8px 16px rgba(52, 60, 68, 0.1))',
      boxShadow: '1px 1px 8px -1px rgba(117, 131, 142, 0.60)',
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 0 0 12px'
  },
  Button: {
      maxHeight: 36,
      maxWidth: 132,
      padding: '7px 40px',
      backgroundColor: theme.palette.primary.accent,
      borderRadius: theme.basic.borderRadius,
      //#B0CB1F
      "&:hover": {
          backgroundColor: theme.palette.primary.accentHover
        },
  },
  gridContainer: {
      alignItems: "center",
      display: 'grid',
      gridTemplateColumns: '0.5fr 2fr 4.1fr 4.1fr auto 40px',
      gridTemplateRows: '1fr',
      gap: '1px 48px',
      width: 'inherit',
  },
  svg: {
      height: 'inherit',
      position: 'relative',
      float: 'right',
      marginRight: 15
  },
  relative: {
      position: 'relative'
  },
  cardCircle : {
      position: 'absolute',
      width: 16,
      height: 16,
      left: 17,
      bottom: 17,
      backgroundColor: '#B0CB1F',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.24)',
      borderRadius: '50%'
  }, 
  cartCount: {
      textAlign: 'center',
      fontЫize: 10,
      color: '#fff',
      height: '100%',
      padding: '.5'
  },
  mg12: {
      marginLeft: 12
  },
  placeholder: {
    fontSize: 15,
    color: '#797979',
    paddingLeft: 10,
    height: '100%',
    width: '100%',
    background: 'none',
    border: 'none',
    outline: 'none',
  },
}))

function SidebarBtn() {
  const [sidebarVisible, setSidebarVisible] = useState(0);
  const classes = useStyles()
    return(
      <div> 
        <div  onClick={() => setSidebarVisible(sidebarVisible + 1)}>
          <MenuRoundedIcon/>
        </div>
        {
          sidebarVisible
            ? <Sidebar hide={ ()=>{setSidebarVisible(false)} } />
            : null
        }
      </div>
    )
};



function CartBtn() {
  const [cartVisible, setCartVisible] = useState(0);
  const [showDialog, setShowDialog] = useState(0);
  const [sum, setSum] = useState(changeCartCount())
  const [currentCount, setCurrentCount] = useState(0);
  function changeCartCount () {
    let cartArr = cart.getCart()
    console.log('tcart', cartArr)
    let tryUseTutorial = {
      items: cartArr
    }
    let cartArrRes = tryUseTutorial.items.reduce(function(arr, item) {
      var found = false;
      console.log('arritem', arr, item)
  
      for (var i = 0; i < arr.length; i++) {
          if (arr[i].product._id === item.product._id) {
              found = true;
              arr[i].count++;
          }
      }
      console.log(found, item.count)
      if (!found && !item.count || item.count && item.count <= 1
        || !found && item.count && item.count == 1) {
          item.count = 1;
          arr.push(item);
      }
      if (!found && item.count) {
          item.count = item.count
          arr.push(item)
      }
  
      return arr;
  }, [])
  let sum = 0;
  cartArrRes.forEach(element => {
      console.log('el', element.count, element)
      sum += element.count;
  });
   console.log('menuCart',cartArrRes, sum)
   return sum
  }
  
  
  

  const classes = useStyles()
    return(
      <div> 
        <div  onClick={() => setCartVisible(cartVisible + 1)}>
          <div className={classes.relative} style={{cursor: 'pointer', height: 35, width: 35, display: 'flex', alignItems: 'center'}} 
            onMouseOver={() => {setShowDialog({ showDialog: true })} }
            onMouseLeave={() => {setShowDialog(false)} }
            
            >
            <img src={Buy} alt="cart" width={24} height={24}/>
            <span className={classes.cardCircle} >
              <Typography variant="body2" component="p" className={classes.cartCount}>
                  {sum}
              </Typography>
            </span>
          </div>
          { showDialog ? 
            <div style={{ position: 'absolute', backgroundImage: `url(${Dialog})`, width: 108, height: 39, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 2 }}>
              <div style={{fontSize: 9, textAlign: 'center', color: '#2c2738'}}>
                0 товаров<br/>на сумму 0 руб
              </div>
            </div>
            : null
          }
          
        </div>
        {
          cartVisible
            ? <Cart2 hide={ ()=>{setCartVisible(false)} } />
            : <></>
        }
      </div>
    )
};

function SearchBtn() {
  const [searchVisible, setSearchVisible] = useState(0);
  const classes = useStyles()
    return(
      <div> 
          <div  onClick={() => setSearchVisible(searchVisible + 1)} className={classes.dropdown} height={'inherit'}>
              <div style={{fontSize: 15}}>Выбор города</div>
              <svg width="16" height="10" className={classes.svg} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1.5L8 8.5L1 1.5" stroke="#2C2738" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
        {
          searchVisible
            ? <ModalSelectCity hide={ ()=>{setSearchVisible(false)} } />
            : null
        }
      </div>
    )
};

function Modal1BtnBtn() {
  const [modal1Visible, setModal1Visible] = useState(0);
  const classes = useStyles()
    return(
      <div> 
          <div  onClick={() => setModal1Visible(modal1Visible + 1)}>
              
          </div>
        {
          modal1Visible
            ? <Modal1Btn hide={ ()=>{setModal1Visible(false)} } />
            : null
        }
      </div>
    )
};

function Modal2BtnBtn() {
  const [modal2Visible, setModal2Visible] = useState(0);
  const classes = useStyles()
    return(
      <div> 
          <div  onClick={() => setModal2Visible(modal2Visible + 1)}>
              
          </div>
        {
          modal2Visible
            ? <Modal2Btn hide={ ()=>{setModal2Visible(false)} } />
            : null
        }
      </div>
    )
};

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}

const Menu = withRouter(({history}) => {
const classes = useStyles()
  return(

<div className={classes.header}>
  <div className={classes.headerContainer} >
    <div className={classes.gridContainer} >
        <div>
            <SidebarBtn/>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="marketa" className={classes.logo}/>
          </Link>
          <Modal2BtnBtn />
        </div>
        <div>
            
            <div className={classes.searchbar}>
              <img src={Search} alt="Search Icon" className={classes.mg12} />
              <input className={classes.placeholder} placeholder="Блюда, товары, заведения, адрес" />
            </div>
        </div>
        <div>
            <SearchBtn/>
        </div>
        <div>
          <Link to="/signin">
              <Button className={classes.Button} texttransform="none" padding={`7px 40px`} >Войти</Button>
          </Link>
        </div>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center'}}>
            <CartBtn />
        </div>
        {
        auth.isAuthenticated() && (<span style={{gridColumnEnd: 'none'}}>
          {auth.isAuthenticated().user.seller && (<>
            <Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>
            <Link to="/myauctions"><Button style={isPartActive(history, "/myauctions")}>My Auctions</Button></Link>
            </>
          )}
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>Личный кабинет</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Выйти</Button>
        </span>)
      }
    </div>
  </div>
  <div></div>
</div>


)})

export default Menu
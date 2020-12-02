import React, {useState} from 'react'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import cart from './cart-helper.js'
import {Link} from 'react-router-dom'

import box from './../assets/images/icons/menu/box 1.png'
import dinner from './../assets/images/icons/menu/dinner 1.png'
import stuff from './../assets/images/icons/menu/staff 1.png'
import flower from './../assets/images/icons/menu/flower 1.png'
import CloseIcon from '@material-ui/icons/Close';
//import Link from "@material-ui/core/Link"
import pizza from './../assets/images/pizza.png'
import lock from './../assets/images/icons/Lock.png'

const useStyles = makeStyles(theme => ({
  card: {
    /*margin: '24px 0px',
    padding: '16px 40px 60px 40px'*/
  },section: {
    width: 326,
    height: 80,
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: 18,
    alignItems: 'center',
    '&:hover div:first-of-type': {
        fontSize: 40,
            marginTop: 2,
            boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)',
            borderRadius: 10,
    }
},
icon: {
    width: 80,
    height: 80,
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.2)',
    borderRadius: 10,
    display: 'grid'
},
buttonSlogan: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '17px 0px',
  width: '100%',
  height: 58,
  backgroundColor: '#fbfbfb',
  boxShadow: '0 8px 16px 0 rgba(52, 60, 68, 0.1)',
  borderRadius: theme.basic.borderRadius,
  fontFamily: 'Gilroy',
  alignSelf: 'center',
  textTransform: 'none',
  fontSize: 20
},
label: {
    textTransform: 'uppercase',
    fontSize: 22,
    color: theme.palette.primary.text,
    fontWeight: 700,
    //paddingLeft: 40
},
cross: {
    position: 'absolute',
    position: 'relative',
    top: -25,
    right: '-80%'
},
greenHat: {
    height: 60,
    //width:  '100%',
    backgroundColor: theme.palette.primary.accent,
    padding: '10px 36px',
    display: 'grid',
    gridTemplateColumns: '40px 1fr 150px',
    gridGap: 16,
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'baseline'
},
greySquare: {
    background: '#EDEDED',
    boxShadow: 'inset 0px 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    verticalAlign: 'middle',
    height: 40,
    width: 40,
    alignItems: 'center'
},
greyRec: {
    background: '#EDEDED',
    padding: '3px 25px',
    boxShadow: 'inset 0px 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    verticalAlign: 'middle',
    height: 40,
    width: 110,
    alignItems: 'center'
},
bold: {
    fontWeight: 800
},
greyLine: {
    backgroundColor: '#E0E0E0',
    paddingLeft: 96,
    height: 30,
    display: 'flex',
    alignItems: 'center'
},
mainBlock: {
    padding: 15,
    display: 'grid',
},
item: {
    minHeight: 102,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottom: '1px solid #EDEDED',
    display: 'grid',
    gridGap: 40,
    gridTemplateColumns: '100px 2fr 77px',
    width: '100%',
},
button: {
    width: 418,
    border: '1px solid #B0CB1F',
    filter: 'drop-shadow(0px 8px 16px rgba(52, 60, 68, 0.1))',
    height: 44,
    padding: '10px 48px 0px 48px',
    boxSizing: 'border-box',
    textAlign: 'center',
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 45
},
table: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: 15,
    fontSize: 22,
    color: '#797979',
    gridGap: 13
},
divider: {
  width: '100%',
  borderBottom: '1px solid black',
  height: 0,
  opacity: 0.2,
  border: '1px solid #2C2738',
  '&:first-of-type': {
    display: 'none'
  },
  '&:first-child': {
    display: 'none'
  },
  '&.divider:first-of-type': {
    display: 'none'
  },
  '&.divider:first-child': {
    display: 'none'
  },
},
inputLight: {
    border: '1px solid #E6E6EB',
    boxSizing: 'border-box',
    borderRadius: 8,
    height: 40,
    //width: 400,
    marginBottom: 20,
    padding: '1em 3em'
  },
grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0 1em',
},
grid3: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '0 1em',
},
control: {
    height: 40,
    margin: '25px auto',
    display: 'grid',
    width: 350,
    gridTemplateColumns: '1fr 1fr',
    background: 'rgba(118, 118, 128, 0.12)',
    alignItems: 'center',
    borderRadius: 8.91,
    textAlign: 'center',
    alignContent: 'center',
},
activeControl: {
    //112',
    height: 'inherit',
    background: '#FFFFFF',
    border: '0.5px solid rgba(0, 0, 0, 0.04)',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: 6.93,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
  title: {
    margin: theme.spacing(2),
    color: theme.palette.openTitle,
    fontSize: '1.2em'
  },
  price: {
    color: theme.palette.text.secondary,
    display: 'inline'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 0,
    width: 50
  },
  productTitle: {
    fontSize: '1.15em',
    marginBottom: '5px'
  },
  subheading: {
    color: 'rgba(88, 114, 128, 0.67)',
    padding: '8px 10px 0',
    cursor: 'pointer',
    display: 'inline-block'
  },
  cart: {
    width: '100%',
    display: 'inline-flex',
    '&divider:first-of-type': {
      display: 'none'
    },
    '&divider:first-child': {
      display: 'none'
    },
  },
  details: {
    display: 'inline-block',
    width: "100%",
    padding: "4px"
  },
  content: {
    flex: '1 0 auto',
    padding: '16px 8px 0px'
  },
  cover: {
    width: 160,
    height: 125,
    margin: '8px'
  },
  itemTotal: {
    float: 'right',
    marginRight: '40px',
    fontSize: '1.5em',
    color: 'rgb(72, 175, 148)'
  },
  checkout: {
    padding: 24
  },
  total: {
    fontSize: '1.2em',
    color: 'rgb(53, 97, 85)',
    marginRight: '16px',
    fontWeight: '600',
    verticalAlign: 'bottom'
  },
  continueBtn: {
    marginLeft: '10px'
  },
  itemShop: {
    display: 'block',
    fontSize: '0.90em',
    color: '#78948f'
  },
  removeButton: {
    fontSize: '0.8em'
  },
  labeln: {
    textTransform: 'uppercase',
    fontSize: 22,
    color: theme.palette.primary.text,
    fontWeight: 700,
},fs22: {
  fontSize: 22
},
fs16: {
  fontSize: 16
},
fbetween: {
  display: 'flex',
  justifyContent: 'space-between'
}
}))

export default function CartItems (props) {
  const classes = useStyles()
  console.log('ci 1', cart.getCart())
  let cartArr = cart.getCart()
  let tryUseTutorial = {
    items: cartArr
  }
 /* let cartArrRes = tryUseTutorial.items.reduce(function(arr, item) {
    var found = false;
    console.log('arritem', arr, item)

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].product._id === item.product._id) {
            found = true;
            arr[i].count++;
        }
    }

    if (!found && !item.count || item.count && item.count <= 1
      || !found && item.count && item.count == 1) {
        item.count = 1;
        arr.push(item);
    }

    return arr;
}, [])*/
let cartArrRes = cartArr;
console.log('cartArrRes',cartArrRes)
//cart.updateAllCart(cartArrRes)
  const [cartItems, setCartItems] = useState(cartArrRes)

//console.log("ca", cartItems[0].product, cartItems[0], cartItems)
console.log('ci props', props)
console.log('ci 12', cart.getCart())


  const handleChange = (index, plus = 0) => event => {
    let updatedCartItems = cartItems
    console.log(updatedCartItems[index].count, updatedCartItems)
    if(updatedCartItems[index].count < 0 || updatedCartItems[index].count == NaN || !updatedCartItems[index].count){
      updatedCartItems[index].count = 1
    }else{
      updatedCartItems[index].count = (plus) ? updatedCartItems[index].count + 1 : updatedCartItems[index].count - 1
      if (updatedCartItems[index].count == 0) updatedCartItems[index].count = 1
    }
    setCartItems([...updatedCartItems])
    //cart.updateCart(index, event.target.value)
    console.log('upct to ls?', updatedCartItems)
    cart.updateAllCart(updatedCartItems)
  }

  const getTotal = () => {
    return cartItems.reduce((a, b) => {
        return a + (b.count*(b.product.price))
    }, 0)
  }

  const getTotalOfMagazines = () => {

    //let cartPri

    return cartItems.reduce((a, b) => {
        return a + (b.quantity*b.product.price)
    }, 0)
  }

  const removeItem = index => event =>{
    let updatedCartItems = cart.removeItem(index)
    if(updatedCartItems.length == 0){
      props.setCheckout(false)
    }
    setCartItems(updatedCartItems)
  }

  const openCheckout = () => {
    props.setCheckout(true)
  }

    return (

        <div className={classes.card}>
          <div style={{display: 'flex', height: 60, alignItems: 'center'}}>
                <h3 className={classes.label} style={{fontSize: 22}}>Ваш заказ</h3>
            </div>
      {cartItems.length > 0 ? (<span>

          {cartItems.map((item, i) => {  

            return <span key={i}>
              { i < 1 && item ?
              (<div><div className={classes.greenHat}>
                <div className={classes.greySquare}>
                    {cartItems.length}
                </div>
                <h2><span className={classes.bold}  style={{fontSize: 20}}>{item.shopId} | </span> 2 кг</h2>
                <div className={classes.greyRec}>
                    <span className={classes.bold}>{getTotal()} руб </span>
                </div>
            </div>
            </div>) : ''
            }
              <div className={classes.cart}>

              <div className={classes.item}>
                <div style={{backgroundImage: `url(/api/product/image/${item.product._id})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}></div>
                    <div>
                      <Link to={'/product/'+item.product._id}>
                        <h3 className={classes.labeln}  style={{fontSize: 18}}>{item.product.name}</h3>
                      </Link>
                        <div style={{maxWidth: 185, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22} onClick={handleChange(i)}>—</p>
                            <p className={classes.fs22}>{item.count > 0 ? item.count : item.count}</p>
                            <p className={classes.fs22} onClick={handleChange(i, 1)}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 147}}>
                      <CloseIcon onClick={removeItem(i)}/>
                        <div style={{}}>
                          <span>{item.product.price * item.count}</span> руб 
                        </div>
                    </div>
                </div>
            

            </div>
            
            <div className={classes.divider}/>

            {  
              i == cartItems.length - 1 ? 
              <div>
          <div className={classes.fbetween} style={{marginBottom: 14, marginTop: 30, paddingLeft: 24}}>
            <div className={classes.fs16} style={{color: '#797979'}}>Стоимость</div>
            <div className={classes.fs16} style={{color: '#797979'}}>1800 руб</div>
          </div>
          <div className={classes.fbetween} style={{marginBottom: 14, paddingLeft: 24}}>
            <div className={classes.fs16} style={{color: '#797979'}}>Доставка</div>
            <div className={classes.fs16} style={{color: '#797979'}}>бесплатная</div>
          </div>
          <div className={classes.fbetween} style={{marginBottom: 14, paddingLeft: 24}}>
            <div className={classes.fs16} style={{color: '#797979'}}>Акции</div>
            <div className={classes.fs16} style={{color: '#797979'}}>0</div>
          </div>
          <div className={classes.fbetween} style={{marginBottom: 14, paddingLeft: 24}}>
            <div className={classes.fs16} style={{color: '#797979'}}>Промокод</div>
            <div className={classes.fs16}>
              <input placeholder="Введите промокод" type="text"
                style={{
                  background: '#EDEDED',
                  boxShadow: 'inset 0px 2px 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: 4,
                  height: 40,
                  width: 165.5,
                  textAlignLast: 'center',
                  border: 'none'
                }}/>
              
            </div>
          </div>
          <div className={classes.fbetween} style={{marginBottom: 14, paddingLeft: 24}}>
            <div className={classes.fs16}>Итого</div>
            <div className={classes.fs16}>{getTotal()} руб</div>
          </div>
        </div> : ''
            }

          </span>})
        }


        <div className={classes.checkout}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span className={classes.label} style={{fontSize: 24}}>Итого:</span>
            <span className={classes.label} style={{fontSize: 24}}>${getTotal()}</span>
          </div>
          
          <Link to='/' className={classes.continueBtn}>
            <Button variant="contained" className={classes.buttonSlogan}>Продолжить заказывать</Button>
          </Link>
        </div>
      </span>) :
      <Typography variant="subtitle1" component="h3" color="primary">No items added to your cart.</Typography>
    }
    </div>

    
    )
}

CartItems.propTypes = {
  checkout: PropTypes.bool.isRequired,
  setCheckout: PropTypes.func.isRequired
}
import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import auth from './../auth/auth-helper'
import cart from './cart-helper.js'
import PlaceOrder from './PlaceOrder'
import {Elements} from 'react-stripe-elements'
import Button from '@material-ui/core/Button'

import PropTypes from 'prop-types'
import box from './../assets/images/icons/menu/box 1.png'
import dinner from './../assets/images/icons/menu/dinner 1.png'
import stuff from './../assets/images/icons/menu/staff 1.png'
import flower from './../assets/images/icons/menu/flower 1.png'
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link"
import pizza from './../assets/images/pizza.png'
import lock from './../assets/images/icons/Lock.png'


const useStyles = makeStyles(theme => ({
  card: {
    margin: '24px 0px',
    padding: '16px 40px 90px 40px',
    backgroundColor: '#80808017'
  },
  title: {
    margin: '24px 16px 8px 0px',
    color: theme.palette.openTitle
  },
  subheading: {
    color: 'rgba(88, 114, 128, 0.87)',
    marginTop: "20px",
  },
  addressField: {
    marginTop: "4px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "45%"
  },
  streetField: {
    marginTop: "4px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "93%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "90%"
  },
  section: {
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
label: {
    textTransform: 'uppercase',
    fontSize: 22,
    color: theme.palette.primary.text,
    fontWeight: 700,
    paddingLeft: 40
},
cross: {
    position: 'absolute',
    position: 'relative',
    top: -25,
    right: -500
},
greenHat: {
    height: 60,
    //width:  '100%',
    backgroundColor: theme.palette.primary.accent,
    padding: '10px 36px',
    display: 'grid',
    gridTemplateColumns: '40px 1fr 150px',
    gridGap: 16,
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
    gridTemplateColumns: '100px 310px 1fr',

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
}))

export default function Checkout (){
  const classes = useStyles()
  const user = auth.isAuthenticated().user
  const [values, setValues] = useState({
    checkoutDetails: {
      products: cart.getCart(),
      //customer_name: user.name || '',
      //customer_email:user.email || '',
      delivery_address: { street: '', city: '', state: '', zipcode: '', country:''}
    },
    error: ''
  })



  const handleAddressChange = name => event => {
    console.log('name', name);
    /*let checkoutDetails = values.checkoutDetails
    checkoutDetails.delivery_address[name] = event.target.value || undefined
    setValues({...values, checkoutDetails: checkoutDetails})*/
  }

    return (

      <div className={classes.container}>
            <div>
                <div style={{display: 'flex', height: 60}}>
                    <h3 className={classes.label}>Контакты</h3>
                </div>
                <div className={classes.grid2}>
                    <input className={classes.inputLight} id="name" label="Name"   placeholder="Имя"/>
                    <input className={classes.inputLight} id="email" type="email" label="Email"  value={values.checkoutDetails.customer_email} placeholder="Email"/>
                    <input className={classes.inputLight} id="count" label="count" placeholder="Количество персон"/>
                </div>
            </div>

            <div>
                <div style={{display: 'flex', height: 60}}>
                    <h3 className={classes.label}>Способ доставки</h3>
                </div>
                <div className={classes.control}>
                    <p>Самовывоз</p>
                    <p className={classes.activeControl}>Курьером</p>
                </div>
                <input className={classes.inputLight} style={{width: '100%'}}  id="name" label="Name"  placeholder="Адрес"/>
                <div className={classes.grid3}>
                  <input className={classes.inputLight} id="street" label="Street Address"  value={values.checkoutDetails.delivery_address.street}   placeholder="Дом"/>
                    <input className={classes.inputLight} id="state" label="State"  value={values.checkoutDetails.delivery_address.state} placeholder="Дом"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Корпус"/>
                    <input className={classes.inputLight} id="name" label="Name"  placeholder="Этаж"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Подъезд"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Код домофона"/>
                </div>
                <textarea className={classes.inputLight} style={{width: '100%'}} id="name" label="Name" placeholder="Комментарий по доставке"></textarea>
            </div>
            
            <div>
                <div style={{display: 'flex', height: 60}}>
                    <h3 className={classes.label}>Оплата</h3>
                </div>
                <div className={classes.control}>
                    <p>Картой онлайн</p>
                    <p className={classes.activeControl}>Картой курьеру</p>
                </div>
                <input className={classes.inputLight} style={{width: '100%'}}  id="name" label="Name"  placeholder="Номер карты"/>
                <div className={classes.grid3}>
                    <input className={classes.inputLight} id="name" label="Name"  placeholder="ММ"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="ГГ"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="CW"/>
                </div>
                <input className={classes.inputLight} style={{width: '100%'}}  id="name" label="Name"  placeholder="Имя латиницей"/>
            </div>

           <div>
           <div style={{display:'grid', gridTemplateColumns: '25px 1fr', gridGap: '2em', margin:'1em 0'}}>
                <div style={{backgroundImage: `url(${lock})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                <div>
                    <p style={{margin: 0}}>
                    <span className={classes.bold}>Безопасное соединение</span><br/>
                    Мы не храним и не обрабатываем данные банковских карт. Все операции проводятся в процессинговом цетре CloudPayments, сертифицированном по международному стандарту безопасности платежных карт PCI DSS. 
                    </p>
                </div>
                <div style={{height: 24, border: '2px solid lightgrey'}}></div>
                <p style={{margin: 0}} >
                    Необходимы закрывающие документы
                </p>
                {
            values.error && (<Typography component="p" color="error">
                <Icon color="error" className={classes.error}>error</Icon>
                {values.error}</Typography>)
          }
          <Link to="success" onClick={()=>{window.location.replace("http://marketplace.entrega.su/success");}}>
            <Button  variant="contained"  className={classes.submit}>Заказть</Button>
          </Link>
            </div>
           </div>
</div>
      )
}

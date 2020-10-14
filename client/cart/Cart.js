import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import CartItems from './CartItems'
import {StripeProvider} from 'react-stripe-elements'
import config from './../../config/config'
import Checkout from './Checkout'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  container: {
    width: 710,
   // height: '100vh',
    background: '#fff',
    marginTop: 56,//'86px 40px 0 20px',
    padding: '0 2em',
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

export default function Cart () {
  const classes = useStyles()
  const [checkout, setCheckout] = useState(false)

  const showCheckout = val => {
    setCheckout(val)
  }

    return (<div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={6} sm={6}>
          <CartItems checkout={checkout}
                     setCheckout={showCheckout}/>
        </Grid>
        {checkout &&
          <Grid item xs={6} sm={6}>
            <StripeProvider apiKey={config.stripe_test_api_key}>
              <Checkout/>
            </StripeProvider>
          </Grid>}
        </Grid>
      </div>)
}

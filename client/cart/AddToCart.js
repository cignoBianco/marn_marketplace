import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import AddCartIcon from '@material-ui/icons/AddShoppingCart'
import DisabledCartIcon from '@material-ui/icons/RemoveShoppingCart'
import cart from './cart-helper.js'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  iconButton: {
    width: '28px',
    height: '28px'
  },
  disabledIconButton: {
    color: '#7f7563',
    width: '28px',
    height: '28px'
  }
}))

export default function AddToCart(props) {
  const classes = useStyles()
  const [redirect, setRedirect] = useState(false)

  const addToCart = () => {
    cart.addItem(props.item, () => {
      setRedirect({redirect:true})
    })
  }
    if (redirect) {
      window.history.go(-1); return false;
      return (<Redirect to={'/cart'}/>)
    }
    return (<span>
      {props.item.quantity >= 0 ?
          <Button className={props.cartStyle}  onClick={addToCart}>Добавить в корзину</Button>
         :
        
          <DisabledCartIcon  onClick={addToCart} className={props.cartStyle || classes.disabledIconButton}/>
       >
        }
      </span>)
}

AddToCart.propTypes = {
  item: PropTypes.object.isRequired,
  cartStyle: PropTypes.string
}
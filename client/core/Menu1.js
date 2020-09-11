import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from './../cart/cart-helper'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: 'white'}
  else
    return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: 'white'}
  else
    return {color: '#ffffff'}
}
function sidebarToggle() {
  let sidebar = document.querySelector('.stores-list-cont');
  (sidebar.style.width == 0 || sidebar.style.width == "0px") ? sidebar.style.width = "max-content" : sidebar.style.width = 0;
}
const Menu = withRouter(({history}) => (
  <div></div>
))

export default Menu1

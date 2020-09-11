import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from '../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from '../cart/cart-helper'

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
  <AppBar position="fixed">
    <Toolbar>
      
      <header id="header"  className="header home">
          <div  className="header-bar">
            <div  className="header-content-left">
              <div  className="hidden-tablet ng-star-inserted">
                <div  className="header-menu-button">
                  <button  className="hamburger hamburger--elastic" type="button" onClick={sidebarToggle}>
                    <span  className="hamburger-box">
                      <span  className="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div  className="header-logo ">
              <Link to="/"><h6 className="logo-h6">
                DoDoma
              </h6></Link>
              </div>
              <div  className="back-header"></div>
              <div  className="header-menu-left ng-star-inserted">
                  <div>
                  <Link to="/shops/all">
                    <Button>All Shops</Button>
                  </Link>
                  <Link to="/auctions/all">
                    <Button>All Actions</Button>
                  </Link>
                    </div>
                    
                </div>
              </div>
              <div  className="header-content-center">
                <div  className="header-logo-mobile logo-whitout-home">
                  <a href="/"  className="ng-star-inserted">
                    <i  className="iconf-Logo-3x"></i></a>
                  </div>
                </div>
                <div  className="header-content-right not-logged">
                  <div  className="header-address-section">
                    <div  className="header-location-section">
                      <div  className="header-country hidden-mobile ng-star-inserted">
                        <app-country>
                          <div  className="cont-country hidden-mobile">
                            <div  className="active-country ng-star-inserted">
                              <img src="/images/ar-flag.png"/>
                              <p  className="f-caption-1 hidden-mobile">Санкт-Петербург</p>
                              <i  className="iconf-keyboard_arrow_down f-headline hidden-mobile"></i>
                            </div>
                            <div  className="location-select-cnt ng-star-inserted" style={{"height": "300px"}}>
                              <ul  className="country-select">
                                <li  className="ng-star-inserted">
                                  <a href="https://www.rappi.com.co">
                                    <img src="images/col-flag.png"/>
                                    <p  className="f-caption-1">Москва</p>
                                    <i  className="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                  </a>
                                </li>
                                <li  className="active ng-star-inserted">
                                  <a href="https://www.rappi.com.br">
                                    <img src="images/ar-flag.png" />
                                    <p  className="f-caption-1">Томск</p>
                                    <i  className="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                  </a>
                                </li>
                                <li  className="ng-star-inserted"><a href="https://www.rappi.com.ar">
                                  <img src="images/ar-flag.png" />
                                  <p  className="f-caption-1">Argentina</p>
                                  <i  className="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li  className="ng-star-inserted">
                                <a href="https://www.rappi.com.mx">
                                  <img src="images/mx-flag.png" /><p  className="f-caption-1">Новосибирск</p>
                                  <i  className="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li  className="ng-star-inserted">
                                <a href="https://www.rappi.cl">
                                  <img src="images/cl-flag.png" />
                                  <p  className="f-caption-1">Красноярск</p>
                                  <i  className="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li  className="ng-star-inserted">
                                <a href="https://www.rappi.com.uy">
                                  <img src="images/uy-flag.png" />
                                  <p  className="f-caption-1">Казань</p>
                                  <i  className="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                       </app-country>
                      </div>
                      <div  className="separator hidden-mobile"></div>
                      <div  className="header-address ng-star-inserted"><app-address-select>
                        <div  className="address-select">
                          <i  className="iconf-pointer hidden-tablet"></i>
                          <div  className="address-subtitle visible-tablet"></div>
                          <div  className="ng-star-inserted">
                            <div  className="address"><p>Адрес доставки</p>
                              <i  className="iconf-keyboard_arrow_down hidden-mobile"></i>
                            </div>
                          </div>
                        </div>
                      </app-address-select>
                    </div>
                  </div>
                </div>
                <div  className="basket-header ng-star-inserted">
                  <app-basket-side-bar _nghost-ng-web-c13>
                    <div  _ngcontent-ng-web-c13="true"  className="view-basket show-coupon">
                      <div  _ngcontent-ng-web-c13="true"  className="options-container">
                        <app-tooltip  _ngcontent-ng-web-c13="true"  className="hidden-mobile" tooltipdirection="bottom-left" _nghost-ng-web-c33>
                          <div  _ngcontent-ng-web-c33="true"  className="generic-tooltip ">
                            <div  _ngcontent-ng-web-c33="true"  className="input-content ng-star-inserted">
                              <button  _ngcontent-ng-web-c13="true"  className="coupon-icon">
                                <i  _ngcontent-ng-web-c13="true"  className="iconf-ico-cupon2"></i>
                              </button>
                            </div>
                            <div  _ngcontent-ng-web-c33="true"  className="tooltip-content tooltip-bottom-left ng-star-inserted">
                              <h4  _ngcontent-ng-web-c33="true"  className="title"></h4>
                              <p  _ngcontent-ng-web-c33="true"  className="content ng-star-inserted"> Colocar cupom </p>
                            </div>
                          </div>
                        </app-tooltip><app-basket-tooltip  _ngcontent-ng-web-c13="true"  className="hidden-mobile" _nghost-ng-web-c34><div  _ngcontent-ng-web-c34="true"  className="basket-tooltip-wrapper">
                          <app-tooltip  _ngcontent-ng-web-c34="true" tooltipdirection="bottom-left" _nghost-ng-web-c33><div  _ngcontent-ng-web-c33="true"  className="generic-tooltip ">
                            <div  _ngcontent-ng-web-c33="true"  className="input-content ng-star-inserted">
                            <Link to="/cart">
                            <button  _ngcontent-ng-web-c34="true"  className="basket-icon" style={isActive(history, "/cart")}>
                            <i  _ngcontent-ng-web-c34="true"  className="iconf-basket"></i>
                                <Badge invisible={false} color="secondary" badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
                                  <CartIcon />
                                </Badge>
                              </button>
                            </Link>  
                             
                            </div>
                          </div>
                        </app-tooltip>
                      </div>
                    </app-basket-tooltip>
                  </div>
                </div>
                <div  _ngcontent-ng-web-c13="true"  className="basket-container">
                  <div  _ngcontent-ng-web-c13="true"  className="global-overlay-popup"></div>
                  <div  _ngcontent-ng-web-c13="true"  className="basket-box">
                    <div  _ngcontent-ng-web-c13="true"  className="basket-head">
                      <div  _ngcontent-ng-web-c13="true"  className="basket-head-title">
                        <h5  _ngcontent-ng-web-c13="true">Entregar para:</h5>
                        <div  _ngcontent-ng-web-c13="true"  className="address-container">
                          <button  _ngcontent-ng-web-c13="true"  className="primary-button-transparent ng-star-inserted"> Digite o endereço </button>
                        </div>
                      </div>
                      <i  _ngcontent-ng-web-c13="true"  className="iconf-modal-close close-basket f-body"></i>
                    </div>
                  <div  _ngcontent-ng-web-c13="true"  className="basket-body">
                    <app-coupon-available-detail  _ngcontent-ng-web-c13="true" _nghost-ng-web-c37  className="ng-star-inserted"></app-coupon-available-detail>
                    <div  _ngcontent-ng-web-c13="true"  className="content-basket-empty f-title ng-star-inserted">
                      <div  _ngcontent-ng-web-c13="true">
                        <i  _ngcontent-ng-web-c13="true"  className="iconf-basket"></i>
                        <p  _ngcontent-ng-web-c13="true">
                          <strong  _ngcontent-ng-web-c13="true"  className="f-body">Sua cesta esta vazia</strong>
                        </p>
                        <p  _ngcontent-ng-web-c13="true"  className="f-caption-1">Retorne as nossas lojas e adicione produtos a sua cesta.</p>
                      </div>
                    </div>
                    <div  _ngcontent-ng-web-c13="true"  className="cont-products-basket">
                      <ul  _ngcontent-ng-web-c13="true"  className="order-by-store">
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </app-basket-side-bar>
          </div>
          <div  className="separator-mobile visible-mobile"></div>
          <div  className="header-user-dropdown ng-star-inserted">
            <app-user-drop-down _nghost-ng-web-c14>
              <div  _ngcontent-ng-web-c14="true"  className="dropdown-user">
                {
                  !auth.isAuthenticated() && (<span>
                    <Link to="/signup">
                    <button  _ngcontent-ng-web-c14="true"  className="dropdown-anonymous primary-button-filled ng-star-inserted" style={isActive(history, "/signup")}>Зарегистрироваться
                      </button>
                    </Link>
                    <Link to="/signin">
                    <button  _ngcontent-ng-web-c14="true"  className="dropdown-anonymous primary-button-filled ng-star-inserted ml30" style={isActive(history, "/signin")}>Войти
                      </button>
                    </Link>
                  </span>) 
                } 
                {
                  auth.isAuthenticated() && (<span>
                    {auth.isAuthenticated().user.seller && (<>
                      <Link to="/seller/shops">
                        <button style={isPartActive(history, "/seller/")} _ngcontent-ng-web-c14="true"  className="dropdown-anonymous primary-button-filled ng-star-inserted" style={isActive(history, "/signup")}>My shops
                      </button>
                      </Link>
                      <Link to="/myauctions">
                      <button style={isPartActive(history, "/myauctions")} style={isPartActive(history, "/seller/")} _ngcontent-ng-web-c14="true"  className="dropdown-anonymous primary-button-filled ng-star-inserted" >
                        My actions
                      </button></Link>
                      </>
                    )}
                    <Link to={"/user/" + auth.isAuthenticated().user._id}>
                      <button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)} _ngcontent-ng-web-c14="true"  className="dropdown-anonymous primary-button-filled ng-star-inserted" style={isActive(history, "/signup")}>My profile
                      </button>
                    </Link>
                    <Button color="inherit" onClick={() => {
                        auth.clearJWT(() => history.push('/'))
                      }}>Sign out</Button>
                  </span>)
                }
                <app-drop-down-list  _ngcontent-ng-web-c14="true"></app-drop-down-list>
              </div>
            </app-user-drop-down>
          </div>
        </div>
      </div>
    </header>
    
    </Toolbar>*/
    
  </AppBar>
  
))

export default Menu

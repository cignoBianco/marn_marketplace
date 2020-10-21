import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Signin2 from './auth/Signin2'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import ModalPhone from './core/ModalPhone'
import Footer from './core/Footer'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'
import Cart from './cart/Cart'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Order from './order/Order'
import MyAuctions from './auction/MyAuctions'
import OpenAuctions from './auction/OpenAuctions'
import NewAuction from './auction/NewAuction'
import EditAuction from './auction/EditAuction'
import Auction from './auction/Auction'
import SearchOrganization from './core/SearchOrganization'
import SearchOrganizationNone from './core/SearchOrganizationNone'
import CompanyMenu from './core/CompanyMenu'
import Checkout from './core/Checkout'
import Cb from './core/Cb'
import Success from './core/Success'
import e404 from './core/e404'


const MainRouter = () => {
  return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/modalphone" component={ModalPhone}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signin2" component={Signin2}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>

        <Route path="/cart" component={Cart}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="/shops/all" component={Shops}/>
        <Route path="/shops/:shopId" component={Shop}/>

        <Route path="/order/:orderId" component={Order}/>
        <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/>

        <PrivateRoute path="/seller/shops" component={MyShops}/>
        <PrivateRoute path="/seller/shop/new" component={NewShop}/>
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
        <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
        <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>

        <PrivateRoute path="/myauctions" component={MyAuctions}/>
        <PrivateRoute path="/auction/new" component={NewAuction}/>
        <PrivateRoute path="/auction/edit/:auctionId" component={EditAuction}/>
        <Route path="/auction/:auctionId" component={Auction}/>
        <Route path="/auctions/all" component={OpenAuctions}/>

        <Route path="/SearchOrganization" component={SearchOrganization} />
        <Route path="/SearchOrganizationFailed" component={SearchOrganizationNone} />
        <Route path="/CompanyMenu" component={CompanyMenu} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cb" component={Cb} />
        <Route path="/success" component={Success} />
        <Route path="/" component={e404} />
      </Switch>
      <Footer/>
    </div>)
}

export default MainRouter

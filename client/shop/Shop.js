import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import {read} from './api-shop.js'
import Products from './../product/Products'
import {listByShop} from './../product/api-product.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#f9f9f8'
  },
  card: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
    fontSize: '1.2em'
  },
  subheading: {
    marginTop: theme.spacing(1),
    color: theme.palette.openTitle
  },
  bigAvatar: {
    width: 100,
    height: 100,
    margin: 'auto'
  },
  productTitle: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    width: '100%',
    fontSize: '1.2em'
  }
}))

export default function Shop({match}) {
  const classes = useStyles()
  const [shop, setShop] = useState('')
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    listByShop({
      shopId: match.params.shopId
    }, signal).then((data)=>{
      if (data.error) {
        setError(data.error)
      } else {
        setProducts(data)
      }
    })
    read({
      shopId: match.params.shopId
    }, signal).then((data) => {
      if (data.error) {
        setError(data.error)
      } else {
        setShop(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.shopId])
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    listByShop({
      shopId: match.params.shopId
    }, signal).then((data)=>{
      if (data.error) {
        setError(data.error)
      } else {
        setProducts(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.shopId])

    const logoUrl = shop._id
          ? `/api/shops/logo/${shop._id}?${new Date().getTime()}`
          : '/api/shops/defaultphoto'
    return (<div className={classes.root}>

<span className="app-span-container ng-star-inserted">
   
   <app-specific-restaurant className="container ng-star-inserted" _nghost-ng-web-c53="">
    
      <app-breadcrumbs _ngcontent-ng-web-c53="" className="hidden-mobile ng-star-inserted" _nghost-ng-web-c54="">
         <div _ngcontent-ng-web-c54="" className="breadcrumbs">
            <ul _ngcontent-ng-web-c54="">
               
               <li _ngcontent-ng-web-c54="" className="ng-star-inserted"><span _ngcontent-ng-web-c54=""><a _ngcontent-ng-web-c54="" href="https://www.rappi.com.br/restaurantes">restaurantes</a><i _ngcontent-ng-web-c54="" className="iconf-right"></i></span></li>
            </ul>
         </div>
      </app-breadcrumbs>
      
      <div _ngcontent-ng-web-c53="" className="app-specific-restaurant ng-star-inserted">
         <app-restaurant-info _ngcontent-ng-web-c53="" className="wrapper" _nghost-ng-web-c55="">
            <div _ngcontent-ng-web-c55="" className="app-restaurant-info">
               <div _ngcontent-ng-web-c55="" className="restaurant-info-container">
                  <div _ngcontent-ng-web-c55="" className="store-background  ng-lazyloaded" style={{ backgroundImage: "url("+ '/api/shops/logo/'+shop._id+"?" + new Date().getTime() +")"}}></div>
                  <div _ngcontent-ng-web-c55="" className="content-container">
                     <h1 _ngcontent-ng-web-c55="" className="store-name" id="store-name" title="Pizza Y   "> {shop.name}   </h1>
                     
                     <ul _ngcontent-ng-web-c55="" className="meals-categories ng-star-inserted">
                        
                        <li _ngcontent-ng-web-c55="" className="f-caption-1 ng-star-inserted"> Pizza  <span _ngcontent-ng-web-c55=""></span></li>
                     </ul>
                     <div _ngcontent-ng-web-c55="" className="detail-container">
                        <div _ngcontent-ng-web-c55="" className="eta-container"><i _ngcontent-ng-web-c55="" className="iconf-clock-4"></i><span _ngcontent-ng-web-c55="" className="f-caption-1">30 min</span></div>
                        
                        <p _ngcontent-ng-web-c55="" className="delivery_price f-caption-1 ng-star-inserted"> R$&nbsp;10,50 </p>
                        
                        <div _ngcontent-ng-web-c55="" className="rating-container ng-star-inserted"><i _ngcontent-ng-web-c55="" className="iconf-start"></i><span _ngcontent-ng-web-c55="" className="f-caption-1">4.6</span></div>
                     </div>
                     
                     <app-global-offers _ngcontent-ng-web-c55="">
                        <div className="app-global-offers">
                           
                           <div className="global-offers has-one-offer ng-star-inserted" style={{backgroundImage: 'linear-gradient(to right, rgb(143, 58, 255), rgb(104, 22, 252))'}}>
                              
                              <p>ATÉ 50% OFF</p>
                              
                           </div>
                           <app-modal id="global-offers" className="ng-tns-c24-4">
                              
                           </app-modal>
                        </div>
                     </app-global-offers>
                     
                  </div>
               </div>
            </div>
            
         </app-restaurant-info>
         <div _ngcontent-ng-web-c53="" className="corridors-categories-container">
            <app-generic-categories _ngcontent-ng-web-c53="" className="sticky">
               <div className="categories">
                  <ul id="categories-sub-menu">
                     
                     <li routerlinkactive="active" className="ng-star-inserted">
                        <a>
                           <p>Rappi Promo - Pizza Grande</p>
                           
                        </a>
                        
                     </li>
                     <li routerlinkactive="active" className="ng-star-inserted">
                        <a>
                           <p>Pizzas Salgadas Individual</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" className="ng-star-inserted">
                        <a>
                           <p>Pizzas Doces</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" className="ng-star-inserted">
                        <a>
                           <p>Sobremesa</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" className="ng-star-inserted">
                        <a>
                           <p>Bebidas</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" className="ng-star-inserted">
                        <a>
                           <p>Ajuda de Casa</p>
                        </a>
                     </li>
                     
                  </ul>
               </div>
               
            </app-generic-categories>
            <app-corridors-restaurant _ngcontent-ng-web-c53="" className="wrapper">
               <div className="app-corridors-restaurant">
                  <h2 className="f-headline">Preços Cardapio Pizza Y   </h2>
                  <div className="ng-star-inserted"></div>
            <Products products={products} searched={false}/>
                  </div>
               <router-outlet></router-outlet>
            </app-corridors-restaurant>
         </div>
   
      </div>

  </app-specific-restaurant>
</span>

    </div>)
}

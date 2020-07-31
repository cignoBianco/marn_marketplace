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
    margin: 30,
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
    return (<div className={classes.root} class="pt-50">

<span class="app-span-container ng-star-inserted">
   
   <app-specific-restaurant class="container ng-star-inserted" _nghost-ng-web-c53="">
    
      <app-breadcrumbs _ngcontent-ng-web-c53="" class="hidden-mobile ng-star-inserted" _nghost-ng-web-c54="">
         <div _ngcontent-ng-web-c54="" class="breadcrumbs">
            <ul _ngcontent-ng-web-c54="">
               
               <li _ngcontent-ng-web-c54="" class="ng-star-inserted"><span _ngcontent-ng-web-c54=""><a _ngcontent-ng-web-c54="" href="https://www.rappi.com.br/restaurantes">restaurantes</a><i _ngcontent-ng-web-c54="" class="iconf-right"></i></span></li>
            </ul>
         </div>
      </app-breadcrumbs>
      
      <div _ngcontent-ng-web-c53="" class="app-specific-restaurant ng-star-inserted">
         <app-restaurant-info _ngcontent-ng-web-c53="" class="wrapper" _nghost-ng-web-c55="">
            <div _ngcontent-ng-web-c55="" class="app-restaurant-info">
               <div _ngcontent-ng-web-c55="" class="restaurant-info-container">
                  <div _ngcontent-ng-web-c55="" class="store-background  ng-lazyloaded" style={{backgroundImage: "url('https://images.rappi.com.br/restaurants_background/marguerita-1573169820958.png?d=168x300&amp;e=webp')"}}></div>
                  <div _ngcontent-ng-web-c55="" class="content-container">
                     <h1 _ngcontent-ng-web-c55="" class="store-name" id="store-name" title="Pizza Y   "> Pizza Y    </h1>
                     
                     <ul _ngcontent-ng-web-c55="" class="meals-categories ng-star-inserted">
                        
                        <li _ngcontent-ng-web-c55="" class="f-caption-1 ng-star-inserted"> Pizza  <span _ngcontent-ng-web-c55=""></span></li>
                     </ul>
                     <div _ngcontent-ng-web-c55="" class="detail-container">
                        <div _ngcontent-ng-web-c55="" class="eta-container"><i _ngcontent-ng-web-c55="" class="iconf-clock-4"></i><span _ngcontent-ng-web-c55="" class="f-caption-1">30 min</span></div>
                        
                        <p _ngcontent-ng-web-c55="" class="delivery_price f-caption-1 ng-star-inserted"> R$&nbsp;10,50 </p>
                        
                        <div _ngcontent-ng-web-c55="" class="rating-container ng-star-inserted"><i _ngcontent-ng-web-c55="" class="iconf-start"></i><span _ngcontent-ng-web-c55="" class="f-caption-1">4.6</span></div>
                     </div>
                     
                     <app-global-offers _ngcontent-ng-web-c55="">
                        <div class="app-global-offers">
                           
                           <div class="global-offers has-one-offer ng-star-inserted" style={{backgroundImage: 'linear-gradient(to right, rgb(143, 58, 255), rgb(104, 22, 252))'}}>
                              
                              <p>ATÉ 50% OFF</p>
                              
                           </div>
                           <app-modal id="global-offers" class="ng-tns-c24-4">
                              
                           </app-modal>
                        </div>
                     </app-global-offers>
                     
                  </div>
               </div>
            </div>
            
         </app-restaurant-info>
         <div _ngcontent-ng-web-c53="" class="corridors-categories-container">
            <app-generic-categories _ngcontent-ng-web-c53="" class="sticky">
               <div class="categories">
                  <ul id="categories-sub-menu">
                     
                     <li routerlinkactive="active" class="ng-star-inserted">
                        <a>
                           <p>Rappi Promo - Pizza Grande</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" class="ng-star-inserted">
                        <a>
                           <p>Pizzas Salgadas Individual</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" class="ng-star-inserted">
                        <a>
                           <p>Pizzas Doces</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" class="ng-star-inserted">
                        <a>
                           <p>Sobremesa</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" class="ng-star-inserted">
                        <a>
                           <p>Bebidas</p>
                        </a>
                     </li>
                     <li routerlinkactive="active" class="ng-star-inserted">
                        <a>
                           <p>Ajuda de Casa</p>
                        </a>
                     </li>
                     
                  </ul>
               </div>
               
            </app-generic-categories>
            <app-corridors-restaurant _ngcontent-ng-web-c53="" class="wrapper">
               <div class="app-corridors-restaurant">
                  <h2 class="f-headline">Preços Cardapio Pizza Y   </h2>
                  
                  <div class="ng-star-inserted">
                     <h3 class="f-medium-title">Rappi Promo - Pizza Grande</h3>
                     <div class="product-detail-container">
                        
                        <a id="category-products-591091" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097410993-1584026874602.png" alt="Pizza Grande de Mussarela" title="Pizza Grande de Mussarela"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Grande de Mussarela</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com tomates italianos e mussarela. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;58,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-591091" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097411003-1584027050891.png" alt="Pizza Grande de Portuguesa" title="Pizza Grande de Portuguesa"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Grande de Portuguesa</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com molho de tomates italianos, mussarela, ovos cozidos, presunto sadia e cebola picada. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;64,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-591091" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097411001-1584027010683.png" alt="Pizza Grande de Marguerita" title="Pizza Grande de Marguerita"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Grande de Marguerita</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com molho de tomates italianos, mussarela, tomate, parmesão e manjericão. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;60,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-591091" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097411006-1584027093626.png" alt="Pizza Grande de Frango com Catupiry" title="Pizza Grande de Frango com Catupiry"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Grande de Frango com Catupiry</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com molho de tomates italianos, frango desfiado e catupiry. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;64,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-591091" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/64ea9602-22ce-4251-a396-42f7b894f37c-1591715629879.png" alt="Pizza Grande Toscana" title="Pizza Grande Toscana"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Grande Toscana</h3>
                                    <p class="product-description f-caption-2"> Pizza com massa, molho de tomates italianos, calabresa moída e mussarela. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;60,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="ng-star-inserted">
                     <h3 class="f-medium-title">Pizzas Salgadas Individual</h3>
                     <div class="product-detail-container">
                        
                        <a id="category-products-433532" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/portuguesa-1573168956223.png" alt="Pizza Portuguesa" title="Pizza Portuguesa"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Portuguesa</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com molho de tomates italianos, mussarela, ovos cozidos, presunto sadia e cebola picada. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;14,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433532" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/mucarela-1573168807928.png" alt="Pizza de Mussarela" title="Pizza de Mussarela"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza de Mussarela</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com tomates italianos e mussarela. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;14,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433532" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/marguerita-1573169092626.png" alt="Pizza Marguerita" title="Pizza Marguerita"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Marguerita</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com molho de tomates italianos, mussarela, tomate, parmesão e manjericão. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;14,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433532" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097042208-1580846677232.png" alt="Pizza de Frango com Catupiry" title="Pizza de Frango com Catupiry"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza de Frango com Catupiry</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com molho de tomates italianos, frango desfiado e catupiry. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;14,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433532" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/6af9e803-b441-4a80-8fef-15189e90356e-1591715760135.png" alt="Pizza Toscana" title="Pizza Toscana"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza Toscana</h3>
                                    <p class="product-description f-caption-2"> Pizza coberta com molho de tomates italianos, calabresa moída e mussarela. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;14,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="ng-star-inserted">
                     <h3 class="f-medium-title">Pizzas Doces</h3>
                     <div class="product-detail-container">
                        
                        <a id="category-products-433531" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/nutella-1573169439551.png" alt="Pizza de Avelã" title="Pizza de Avelã"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Pizza de Avelã</h3>
                                    <p class="product-description f-caption-2"> Pizza de massa feita de farinha italiana, creme de avelã e morangos frescos (20cm). </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;14,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="ng-star-inserted">
                     <h3 class="f-medium-title">Sobremesa</h3>
                     <div class="product-detail-container">
                        
                        <a id="category-products-552871" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/product-1580740396410.png" alt="Mini Eskibom - 12 Unidades" title="Mini Eskibom - 12 Unidades"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Mini Eskibom - 12 Unidades</h3>
                                    <p class="product-description f-caption-2"> Mini eskibon caixa. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;11,70 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-552871" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/product-1580740450906.png" alt="Sorvete Ben &amp; Jerry's - 120ml" title="Sorvete Ben &amp; Jerry's - 120ml"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Sorvete Ben &amp; Jerry's - 120ml</h3>
                                    <p class="product-description f-caption-2"> Sorvete ben &amp; jerry's chocolate chip cookie. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;18,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-552871" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/product-1581628339110.jpg" alt="Picolé Chicabon - 60ml" title="Picolé Chicabon - 60ml"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Picolé Chicabon - 60ml</h3>
                                    <p class="product-description f-caption-2"> Picolé chicabon. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;4,20 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="ng-star-inserted">
                     <h3 class="f-medium-title">Bebidas</h3>
                     <div class="product-detail-container">
                        
                        <a id="category-products-433530" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/sprite-1572369234441.png" alt="Sprite Original 220ml" title="Sprite Original 220ml"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Sprite Original 220ml</h3>
                                    <p class="product-description f-caption-2"> Refrigerante. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;4,50 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433530" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097033894-1580839138246.png" alt="Fanta Laranja 220ml" title="Fanta Laranja 220ml"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Fanta Laranja 220ml</h3>
                                    <p class="product-description f-caption-2"> Refrigerante. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;4,50 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433530" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097032856-1581957394929.png" alt="Coca-Cola Original 220ml" title="Coca-Cola Original 220ml"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Coca-Cola Original 220ml</h3>
                                    <p class="product-description f-caption-2"> Refrigerante. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;4,50 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433530" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097032699-1580838063455.png" alt="Coca-Cola Zero Açúcar 220ml" title="Coca-Cola Zero Açúcar 220ml"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Coca-Cola Zero Açúcar 220ml</h3>
                                    <p class="product-description f-caption-2"> Refrigerante. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;4,50 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433530" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097032752-1580838282697.png" alt="Coca-Cola Zero Açúcar 1,5L" title="Coca-Cola Zero Açúcar 1,5L"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Coca-Cola Zero Açúcar 1,5L</h3>
                                    <p class="product-description f-caption-2"> Refrigerante. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;11,90 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433530" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/product-1588705679914.png" alt="Heineken 330ml" title="Heineken 330ml"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Heineken 330ml</h3>
                                    <p class="product-description f-caption-2"> Cerveja. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;7,90 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                        <a id="category-products-433530" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/2097032985-1581957397435.png" alt="Coca-Cola Original 1,5L" title="Coca-Cola Original 1,5L"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Coca-Cola Original 1,5L</h3>
                                    <p class="product-description f-caption-2"> Refrigerante. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;11,90 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="ng-star-inserted">
                     <h3 class="f-medium-title">Ajuda de Casa</h3>
                     <div class="product-detail-container">
                        
                        <a id="category-products-629875" class="ng-star-inserted">
                           <div class="product-detail">
                              <div class="product-detail-content">
                                 <div class="image-container">
                                    
                                    <app-img-ssr><img class="  ng-lazyloaded" src="./Delivery Pizza Y em Minutos _ Rappi_files/e5530ccb-7f0d-459c-befa-2be3337e7047-1593090408264.png" alt="Gorjeta para os Funcionários" title="Gorjeta para os Funcionários"/></app-img-ssr>
                                    
                                 </div>
                                 <div class="content-container">
                                    <h3 class="product-name">Gorjeta para os Funcionários</h3>
                                    <p class="product-description f-caption-2"> Caixinha para os funcionários. Com esta boa ação você ajuda os funcionários do restaurante. Juntos chegamos mais longe. </p>
                                    <div class="price-add-continer">
                                       <div class="prices-container">
                                          <span class="product-price f-caption-1"> R$&nbsp;5,00 </span>
                                       </div>
                                       <button class="primary-button-filled"> Adicionar </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
               <router-outlet></router-outlet>
            </app-corridors-restaurant>
         </div>
   
      </div>

  </app-specific-restaurant>
</span>

      <Grid container spacing={8}>
        <Grid item xs={4} sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2" className={classes.title}>
                {shop.name}
              </Typography>
              <br/>
              <Avatar src={logoUrl} className={classes.bigAvatar}/><br/>
                <Typography type="subheading" component="h2" className={classes.subheading}>
                  {shop.description}
                </Typography><br/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} sm={8}>
          <Card>
            <Typography type="title" component="h2" className={classes.productTitle}>Products</Typography>
            <Products products={products} searched={false}/>
          </Card>
        </Grid>
      </Grid>
    </div>)
}

import React, {useState, useEffect}  from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import {read, listRelated} from './api-product.js'
import {Link} from 'react-router-dom'
import Suggestions from './../product/Suggestions'
import AddToCart from './../cart/AddToCart'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  flex:{
    display:'flex'
  },
  card: {
    padding:'24px 40px 40px'
  },
  subheading: {
    margin: '24px',
    color: theme.palette.openTitle
  },
  price: {
    padding: '16px',
    margin: '16px 0px',
    display: 'flex',
    backgroundColor: '#93c5ae3d',
    fontSize: '1.3em',
    color: '#375a53',
  },
  media: {
    height: 200,
    display: 'inline-block',
    width: '50%',
    marginLeft: '24px'
  },
  icon: {
    verticalAlign: 'sub'
  },
  link:{
    color: '#3e4c54b3',
    fontSize: '0.9em'
  },
  addCart: {
    width: '35px',
    height: '35px',
    padding: '10px 12px',
    borderRadius: '0.25em',
    backgroundColor: '#5f7c8b'
  },
  action: {
    margin: '8px 24px',
    display: 'inline-block'
  }
}))

export default function Product ({match}) {
  const classes = useStyles()
  const [product, setProduct] = useState({shop:{}})
  const [suggestions, setSuggestions] = useState([])
  const [error, setError] = useState('')
    useEffect(() => {
      const abortController = new AbortController()
      const signal = abortController.signal
  
      read({productId: match.params.productId}, signal).then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setProduct(data)
        }
      })
    return function cleanup(){
      abortController.abort()
    }
  }, [match.params.productId])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

        listRelated({
          productId: match.params.productId}, signal).then((data) => {
          if (data.error) {
            setError(data.error)
          } else {
            setSuggestions(data)
          }
        })
  return function cleanup(){
    abortController.abort()
  }
}, [match.params.productId])

    const imageUrl = product._id
          ? `/api/product/image/${product._id}?${new Date().getTime()}`
          : '/api/product/defaultphoto'
    return (
        <div className={classes.root}>






          <Grid container spacing={10}>

          <div className="ng-tns-c24-3 body flex">
   
   <app-product-info body="" className="ng-star-inserted">
      <div className="cont-view-product">
         <div className="cont-img-product">
            <div className="content-img">
               <img src="https://images.rappi.com.br/products/2097411001-1584027010683.png?d=400x400&amp;e=webp" alt="Pizza Grande de Marguerita" className="ng-star-inserted"/>
            </div>
            <div className="scroll-image"></div>
         </div>
         <div className="cont-info-product">
            <div className="info-product-modal">
               <h2 id="product-view-name">Pizza Grande de Marguerita</h2>
            </div>
            <div className="product-toppings-content">
               <p id="product-view-description"> Pizza coberta com molho de tomates italianos, mussarela, tomate, parmesão e manjericão. </p>
               <hr className="divider-line"/>
               
               <div className="product-toppings-list-content ng-star-inserted">
                  <app-product-toppings toppings="">
                     
                     <div className="relative ng-star-inserted">
                        
                        <div className="shadow3 header-item item-header-category active-item-category ng-star-inserted" role="button">
                           <h3 className="topping-description" title="Deseja talher a parte?">Deseja talher a parte?</h3>
                           <div className="header-items-labels">
                              <app-topping-label>
                                 <div>
                                    <span className="required ng-star-inserted"> essa seleção é opcional</span>
                                 </div>
                              </app-topping-label>
                           </div>
                        </div>
                        <hr className="divider-line ng-star-inserted"/>
                        <div className="topping-content ng-star-inserted">
                           
                           <div className="input-radio ng-star-inserted">
                              
                              <app-product-topping-item className="ng-star-inserted">
                                 <div className="topping-restaurant rest-checkbox" id="topping-18874306">
                                    
                                    <label className="checkbox ng-star-inserted">
                                       
                                       <div className="content-input-container ng-star-inserted">
                                          <span className="not-price" id="checkbox-topping-name-18874306"> Sim </span>
                                       </div>
                                       
                                    </label>
                                    
                                 </div>
                              </app-product-topping-item>
                           </div>
                        </div>
                     </div>
                     <div className="relative ng-star-inserted">
                        
                        <div className="shadow3 header-item item-header-category active-item-category ng-star-inserted" role="button">
                           <h3 className="topping-description" title="Acompanhe seu pedido com:">Acompanhe seu pedido com:</h3>
                           <div className="header-items-labels">
                              <app-topping-label>
                                 <div>
                                    <span className="required ng-star-inserted"> essa seleção é opcional</span>
                                 </div>
                              </app-topping-label>
                           </div>
                        </div>
                        <hr className="divider-line ng-star-inserted"/>
                        <div className="topping-content ng-star-inserted">
                           
                           <div className="input-radio ng-star-inserted">
                              
                              <app-product-topping-item className="ng-star-inserted">
                                 <div className="topping-restaurant rest-checkbox" id="topping-17733007">
                                    
                                    <div className="topping-select-quantity ng-star-inserted">
                                       <div className="topping-info"><span> Coca-Cola Original 220ml </span><span className="price"> + R$&nbsp;4,50 </span></div>
                                       <div className="topping-quantity">
                                          
                                          <span className="select-quantity ng-star-inserted">
                                             <app-input-number _nghost-ng-web-c53="" className="init-input">
                                                <div _ngcontent-ng-web-c53="" className="input-number"><button _ngcontent-ng-web-c53="" className="subtract" disabled="">-</button><span _ngcontent-ng-web-c53="" className="value">0</span><button _ngcontent-ng-web-c53="" className="subtract">+</button></div>
                                             </app-input-number>
                                          </span>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </app-product-topping-item>
                           </div>
                           <div className="input-radio ng-star-inserted">
                              
                              <app-product-topping-item className="ng-star-inserted">
                                 <div className="topping-restaurant rest-checkbox" id="topping-17733008">
                                    
                                    <div className="topping-select-quantity ng-star-inserted">
                                       <div className="topping-info"><span> Coca-Cola zero Açúcar 220ml </span><span className="price"> + R$&nbsp;4,50 </span></div>
                                       <div className="topping-quantity">
                                          
                                          <span className="select-quantity ng-star-inserted">
                                             <app-input-number _nghost-ng-web-c53="" className="init-input">
                                                <div _ngcontent-ng-web-c53="" className="input-number"><button _ngcontent-ng-web-c53="" className="subtract" disabled="">-</button><span _ngcontent-ng-web-c53="" className="value">0</span><button _ngcontent-ng-web-c53="" className="subtract">+</button></div>
                                             </app-input-number>
                                          </span>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </app-product-topping-item>
                           </div>
                           <div className="input-radio ng-star-inserted">
                              
                              <app-product-topping-item className="ng-star-inserted">
                                 <div className="topping-restaurant rest-checkbox" id="topping-17733009">
                                    
                                    <div className="topping-select-quantity ng-star-inserted">
                                       <div className="topping-info"><span> Coca-Cola Original 1,5L </span><span className="price"> + R$&nbsp;15,00 </span></div>
                                       <div className="topping-quantity">
                                          
                                          <span className="select-quantity ng-star-inserted">
                                             <app-input-number _nghost-ng-web-c53="" className="init-input">
                                                <div _ngcontent-ng-web-c53="" className="input-number"><button _ngcontent-ng-web-c53="" className="subtract" disabled="">-</button><span _ngcontent-ng-web-c53="" className="value">0</span><button _ngcontent-ng-web-c53="" className="subtract">+</button></div>
                                             </app-input-number>
                                          </span>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </app-product-topping-item>
                           </div>
                           <div className="input-radio ng-star-inserted">
                              
                              <app-product-topping-item className="ng-star-inserted">
                                 <div className="topping-restaurant rest-checkbox" id="topping-17733010">
                                    
                                    <div className="topping-select-quantity ng-star-inserted">
                                       <div className="topping-info"><span> Coca-Cola zero Açúcar 1,5L </span><span className="price"> + R$&nbsp;15,00 </span></div>
                                       <div className="topping-quantity">
                                          
                                          <span className="select-quantity ng-star-inserted">
                                             <app-input-number _nghost-ng-web-c53="" className="init-input">
                                                <div _ngcontent-ng-web-c53="" className="input-number"><button _ngcontent-ng-web-c53="" className="subtract" disabled="">-</button><span _ngcontent-ng-web-c53="" className="value">0</span><button _ngcontent-ng-web-c53="" className="subtract">+</button></div>
                                             </app-input-number>
                                          </span>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </app-product-topping-item>
                           </div>
                           <div className="input-radio ng-star-inserted">
                              
                              <app-product-topping-item className="ng-star-inserted">
                                 <div className="topping-restaurant rest-checkbox" id="topping-17733011">
                                    
                                    <div className="topping-select-quantity ng-star-inserted">
                                       <div className="topping-info"><span> Fanta Laranja 220ml </span><span className="price"> + R$&nbsp;4,50 </span></div>
                                       <div className="topping-quantity">
                                          
                                          <span className="select-quantity ng-star-inserted">
                                             <app-input-number _nghost-ng-web-c53="" className="init-input">
                                                <div _ngcontent-ng-web-c53="" className="input-number"><button _ngcontent-ng-web-c53="" className="subtract" disabled="">-</button><span _ngcontent-ng-web-c53="" className="value">0</span><button _ngcontent-ng-web-c53="" className="subtract">+</button></div>
                                             </app-input-number>
                                          </span>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </app-product-topping-item>
                           </div>
                        </div>
                     </div>
                  </app-product-toppings>
               </div>
               <div className="product-up-selling-list-content ng-star-inserted">
                  
               </div>
               
               
            </div>
            
            <app-product-operator operator="" className="ng-star-inserted">
               <div className="product-operator-footer">
                  <app-counter-product-light>
                     <div className="counter-product-light">
                        <button className="subtract" disabled="">-</button>
                        <div> 1</div>
                        <button>+</button>
                     </div>
                  </app-counter-product-light>
                  <div className="button-add"><button className="btn primary-button-filled" id="button-product-add-by-store" type="button"> Adicionar <small>R$&nbsp;60,00</small></button></div>
               </div>
            </app-product-operator>
            
      </div>
   </div>
   </app-product-info>
</div>

            <Grid item xs={7} sm={7}>
              
              <Card className={classes.card}>
                <CardHeader
                  title={product.name}
                  subheader={product.quantity > 0? 'In Stock': 'Out of Stock'}
                  action={
                    <span className={classes.action}>
                      <AddToCart cartStyle={classes.addCart} item={product}/>
                    </span>
                  }
                />
                <div className={classes.flex}>
                  <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={product.name}
                  />
                  <Typography component="p" variant="subtitle1" className={classes.subheading}>
                    {product.description}<br/>
                    <span className={classes.price}>$ {product.price}</span>
                    <Link to={'/shops/'+product.shop._id} className={classes.link}>
                      <span>
                        <Icon className={classes.icon}>shopping_basket</Icon> {product.shop.name}
                      </span>
                    </Link>
                  </Typography>

                </div>
              </Card>
            </Grid>
            {suggestions.length > 0 &&
              (<Grid item xs={5} sm={5}>
                <Suggestions  products={suggestions} title='Related Products'/>
              </Grid>)}
          </Grid>
        </div>)
}

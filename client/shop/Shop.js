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

import Rating from 'material-ui-rating'
import Slider from '@material-ui/core/Slider'
import Pagination from '@material-ui/lab/Pagination';
import logo from './../assets/images/Company/company logo.png'
import bike from './../assets/images/Company/bike 1.png'
import box from './../assets/images/Company/box.png'
import price from './../assets/images/Company/price.png'
import pic from './../assets/images/Company/image 1.png'
import Search from './../assets/images/icons/Search.png'

import CardMedia from '@material-ui/core/CardMedia'
import { shadows } from '@material-ui/system'
import Button from "@material-ui/core/Button"
import basket from './../assets/images/basket.png'
import cardIcon from './../assets/images/icons/BuyCard.png'
import locationIcon from './../assets/images/icons/Location.png'
import timeCircleIcon from './../assets/images/icons/Time Circle.png'
import phonePic from './../assets/images/phone.png'
import google from './../assets/images/icons/google play.png'
import apple from './../assets/images/icons/apple.png'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import imageUrl from './../assets/images/pizzeria.png'

import Cb from './../core/Cb.js'


const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: theme.basic.outerMargins,
    marginRight: theme.basic.outerMargins,
}, 
bold: {
    fontWeight: 800,
},
h1: {
    marginTop: 20,
    marginBottom: 28,
    fontSize: 32,
    fontWeight: 800,
    paddingLeft: '3em'
},
category: {
    width: '100%',
    borderBottom: '1px solid rgba(121, 121, 121, 0.25)',
    height: 32,
    textalign: '-webkit-center'
},
categories: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 444,
    justifyContent: 'space-between',
    height: 24,
    paddingLeft: '6em'
},
cat: {
    fontSize: 24,
},
activeTab: {
    borderBottom: '6px solid #B0CB1F;',
},
parent: {
    display: 'grid',
    gridTemplateColumns: '2fr 4fr',
    marginTop: 50,
    marginBottom: 60,
},
filter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 380,
    height: 662,
},
card: {
    position: 'static',
   // width: 305,
    maxHeight: 814,
    minHeight: 321,
    left: 0,
    top: 0,
    flex: 'none',
    order: 0,
    alignSelf: 'center',
    flexGrow: 0,
    width: 345,
    //margin: '36px 0px',
   // border: '1px solid black',
    overflow: 'hidden',
    borderRadius: 20,
    boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
    '&:hover': {
        marginTop: 4,
        boxShadow: '0px 4px 8px rgba(51, 38, 49, 0.3)',
        transition: 'all 0.1s ease-out'
    }
},
grid: {
    display: 'grid',
    //gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '40px 36px',
   // border: '1px solid black',
    gridTemplateColumns: 'repeat( auto-fill, minmax(310px, 1fr) )',
    width: 'inherit',
    gridAutoFlow: 'row dense',
    height: 721,
    overflowY: 'hidden',
    paddingLeft: theme.basic.lightPadding,
    paddingRight: theme.basic.lightPadding,
},
cardStatusDiv: {
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.1)',
    height: 50,
    width: 92,
},
cardStatus: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 12,
    color: theme.palette.primary.text,
    paddingLeft: 22,
    paddingTop: 12,
},
suggestionsDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    minHeight: 225,
    //border: '1px solid black',
    margin: '50px 0'
},
greenBg: {
    backgroundColor: theme.palette.primary.accent,
},
noRepeatCenter: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
},
h4: {
    fontSize: 18,
    textShadow: '0 0 black',
    fontWeight: 300
},
description16: {
    fontSize: 16,
    color: '#797979'
},
aboutBlock: {
    maxWidth: 1440,
    maxHeight: 652,
    margin: '30px 1em',
},
Icon: {
    backgroundSize: '60%',
    height: 181,
    width: 175
},
bold: theme.bold,
radioGroup: {
    display: 'grid',
    borderBottom: '1px solid lightgrey',
    height: 52,
    width: '100%',
    alignContent: 'center',
    gridGap: 15
},
greenHat: {
    width: 380,
    height: 50,
    backgroundColor: theme.palette.primary.accent,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
radioLabel: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: 15,
    alignItems: 'center'
},
Button2: {
    height: 44,
    width: 250,
    padding: '7px 40px',
    borderColor: theme.palette.primary.accent,
    borderRadius: theme.basic.borderRadius,
    fontSize: 20,
    margin: '40px 0',
    alignSelf: 'center',
    /* text-align-last: center; */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //#B0CB1F
    "&:hover": {
        boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)'
      },
},
hat: {
    height: 255,
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    gridGap: 40,
    marginLeft: '6em',
    marginRight: '6em',
    alignItems: 'center'
},
searchbar: {
    height: 50,
    width: 380,
    backgroundColor: '#fbfbfb',
    boxShadow: 'inset 0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.basic.borderRadius,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',

},
  /*root: {
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
  }*/
}))

export default function Shop({match}) {
  const classes = useStyles()
  const [shop, setShop] = useState('')
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  const [value, setValue] = React.useState(30);

  const [thisCard, setThisCard] = useState(0);
  function showThisCard() {
      console.log('clicked');
      (thisCard) ? setThisCard(false) : setThisCard(true)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    return (
     
     <div>
            <div style={{height: 50, marginLeft: '6em'}}>
                <div style={{width: 223, height: 17, fontSize: 14, marginTop: 50}}>Главная / Реторан / <span className={classes.bold}>Пиццерия</span></div>
            </div>
            
            <div className={classes.hat}>
                <img src={logo} className={classes.picture} alt="Marketa" />
                <div>
                    <h2 style={{fontSize: 32}}>Pizza</h2>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', minHeight: 77, margin: '40px 0', marginRight: 60, gridGap: 70}}>
                        <div>
                            <div style={{backgroundImage: `url(${bike})`, width: 34, height: 43, backgroundRepeat: 'no-repeat'}}></div>
                            <p>
                            usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            </p>
                        </div>
                        <div>
                            <div style={{backgroundImage: `url(${box})`, width: 34, height: 43, backgroundRepeat: 'no-repeat'}}></div>
                            <p>
                            usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            </p>
                        </div>
                        <div>
                            <div style={{backgroundImage: `url(${bike})`, width: 34, height: 43, backgroundRepeat: 'no-repeat'}}></div>
                            <p>
                            usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            </p>
                        </div>
                        <div>
                            <div style={{backgroundImage: `url(${price})`, width: 34, height: 43, backgroundRepeat: 'no-repeat'}}></div>
                            <p>
                            usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${pic})`,
        width: '100%',
        height: 566, backgroundPosition: 'center',
        backgroundSize: 'initial',
        backgroundRepeat: 'no-repeat',
        marginBottom: 35
        }}></div>
            <div className={classes.category}>
                    <div className={classes.categories}>
                        <div className={classes.cat}>
                            Информация
                        </div>
                        <div className={classes.cat + ' ' + classes.activeTab}>
                            Меню
                        </div>
                        <div className={classes.cat}>
                            Акции
                        </div>
                        <div className={classes.cat}>
                            Бонусы
                        </div>
                    </div>
                </div>

            <div className={classes.container}>
                    <div className={classes.parent}>
                        <div className={classes.filter}>
                                
                             <div>
                        <div className={classes.searchbar}>
                            <img src={Search} alt="Search Icon" className={classes.mg12} />
                        </div>
                    </div>
                                <div className={classes.radioGroup}>
                                    <div style={{fontSize: 20, color: '#2C2738', fontWeight: 700}}>Меню 1</div>
                                </div>

                                <div className={classes.radioGroup}>
                                    <div style={{fontSize: 20, color: '#2C2738', fontWeight: 700}}>Меню 2</div>
                                </div>
                                <div className={classes.radioGroup}>
                                    <div style={{fontSize: 20, color: '#2C2738', fontWeight: 700}}>Меню 3</div>
                                </div>
                                <div className={classes.radioGroup}>
                                    <div style={{fontSize: 20, color: '#2C2738', fontWeight: 700}}>Меню 4</div>
                                </div>

                        </div>
                          <Products products={products} searched={false}/>
                        
                        <div></div>
                        <Pagination count={10} shape="rounded" style={{marginTop: 40, marginBottom: 40, justifySelf: 'center'}} />
                    </div>
                </div>
           
            {
            thisCard
                ? <Cb hide={ ()=>{setThisCard(false)} } /> 
                : <div>1</div>
            }
     


    </div>)
}

/*

      <Grid container spacing={8}>
        <Grid item xs={4} sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2" className={classes.title}>
                {shop.name}
              </Typography>
              {shop.category}
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
            <Products products={products} searched={false}/>
          </Card>
        </Grid>
      </Grid>
*/

/*
<div className={classes.card} onClick={() => {showThisCard()}}>
    <div style={{height: 212, backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', backgroundPosition: 'center', backgroundPositionY: '50%'}}>
        <div className={classes.cardStatusDiv}>
            <div className={classes.cardStatus}>открыто</div>
        </div>
    </div>
    <div style={{height: 100, paddingLeft: 20, paddingTop: 20, display: 'grid', alignItems: 'end'}}>
        <div style={{fontSize: 18, fontWeight: 400, textShadow: '0 0 black'}}>Pizza</div>
        <div style={{display: 'grid', gridTemplateColumns: '5fr 1fr', alignSelf: 'end'}}>
            <div style={{ fontWeight: 400, fontSize: 12, width: 135, color: '#797979'}}>
                бесплатная доставка от 
                <span style={{color: '#000'}}> 1000 руб</span>
            </div>
            <div style={{ width: 80, height: 50}} className={classes.greenBg}>
                <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                    height: 'inherit'}}> 2 по цене 1
                </p>
            </div>
        </div>
    </div>
</div>
*/
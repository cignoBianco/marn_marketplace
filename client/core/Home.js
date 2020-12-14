import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {listLatest, listCategories} from './../product/api-product.js'
import {list} from './../shop/api-shop.js'
import {Link} from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button"
import basket from './../assets/images/basket.png'
import cardIcon from './../assets/images/icons/BuyCard.png'
import locationIcon from './../assets/images/icons/Location.png'
import timeCircleIcon from './../assets/images/icons/Time Circle.png'
import phonePic from './../assets/images/phone.png'
import google from './../assets/images/icons/google play.png'
import apple from './../assets/images/icons/apple.png'

//import {getHostname} from './../user/api-user.js'

const useStyles = makeStyles(theme => ({  
  grid: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridGap: '40px 36px',
    gridTemplateColumns: 'repeat( auto-fill, minmax(310px, 1fr) )',
    width: 'inherit',
    gridAutoFlow: 'row dense',
    height: 721,
    overflowY: 'hidden',
    paddingLeft: theme.basic.lightPadding,
    paddingRight: theme.basic.lightPadding,
},
  container: {
    marginLeft: theme.basic.outerMargins,
    marginRight: theme.basic.outerMargins,
}, 
h3t: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '38px',
    letterSpacing: 0.15000000596046448,
    textAlign: 'left',
    color: '#2C2738',
    margin: '60px 0px 52px'
},
sloganContainer: {
    display: "grid",
    marginBottom: 165,
    gridAutoFlow: 'row dense',
    /* grid-auto-columns: 200px 1fr; */
    gridAutoRows: '1fr auto',
    gridTemplateColumns: 'repeat( auto-fit, minmax(400px, 1fr) )',
    gridGap: '40px 71px',
    justifyItems: 'center',
    alignItems: 'center'
},
sloganDiv: {
    width: 498,
    height: 231,
    //left: 224,
    marginTop: 80,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between"
},
card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    //boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)'
    
},
title: {
    padding: `${theme.spacing(3) }px ${theme.spacing(2.5) }px 
        ${theme.spacing(2) }px`,
    color: theme.palette.openTitle,
},
picture: {
    marginTop: 129,
    width: 458,
    height: 685
},
someText: {
    width: 498,
    height: 58,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 64,
    textAlign: 'center',
    color: theme.palette.primary.text,
    marginBottom: 25,
    fontFamily: 'Gilroy',
},
description: {
    width: 498,
    height: 48,
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    //fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    color: theme.palette.secondary.text,
    marginBottom: 40
},
buttonSlogan: {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'flex-start',
   padding: '17px 0px',
   width: 498,
   height: 58,
   backgroundColor: '#fbfbfb',
   boxShadow: '0 8px 16px 0 rgba(52, 60, 68, 0.1)',
   borderRadius: theme.basic.borderRadius,
   fontFamily: 'Gilroy',

   textTransform: 'none',
   fontSize: 20
},
divNearU: {
   // width: 1180,
   // border: '1px solid black',
},
nearULabel: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 32,
    margin: '11px 0'
},
textMore: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 20,
    alignSelf: 'center',
    color: theme.palette.secondary.text
},
gridNearU: {
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
   // width: 1179
},
nearUTitleDiv: {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    paddingLeft: '1em',
    paddingRight: '1em',
    marginBottom: 35
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
    overflow: 'hidden',
    borderRadius: 20,
    boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
    '&:hover': {
        marginTop: 4,
        boxShadow: '0px 4px 8px rgba(51, 38, 49, 0.3)',
        transition: 'all 0.1s ease-out'
    }
},
card1: {
    position: 'static',
    height: '100%',
    left: 0,
    top: 0,
    flex: 'none',
    order: 0,
    alignSelf: 'center',
    flexGrow: 0,
    overflow: 'hidden',
    borderRadius: 20,
    boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
},
cardStatusDiv: {
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.1)',
    height: 50,
    width: 92,
    backgroundColor: '#ffffff50'
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
    textShadow: '0 0 black'
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
}))


export default function Home() {
  const classes = useStyles()
  const [suggestionTitle, setSuggestionTitle] = useState("Latest Products")
  const [categories, setCategories] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const smth = false

const [shops, setShops] = useState([])
const [value, setValue] = React.useState(30);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

async () => {try {
    let response = await fetch('/api/auth/sms', {
      method: 'GET'
    })
    console.log(7, response.json())
  } catch(err) {
    console.log(err)
  }}
console.log('ghn' )

useEffect(() => {
  const abortController = new AbortController()
  const signal = abortController.signal
  list(signal).then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      setShops(data)
    }
  })
  return function cleanup(){
    abortController.abort()
  }

}, [])
  
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listLatest(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setSuggestions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listCategories(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCategories(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])


    return (
        <div>
            <div  className={classes.container} >  
                <div className={classes.sloganContainer}>
                    <img src={basket} className={classes.picture} alt="Marketa" />
                    <div className={classes.sloganDiv}>
                        <Typography className={classes.someText}>
                            Какая-то фраза
                        </Typography>
                        <Typography className={classes.description}>
                            Описание
                        </Typography>
                        <Button className={classes.buttonSlogan} >
                            Кнопка
                        </Button>
                    </div>
                </div>
                
                
                
                <div className={classes.divNearU}>
                    <div className={classes.nearUTitleDiv}>
                        <h3 className={classes.nearULabel}>
                            Рядом с вами
                        </h3>
                        <div className={classes.textMore}>
                            Просмотреть все
                        </div>
                    </div>
                    <div className={classes.grid}>
          {shops.map((shop, i) => {
            return <div className={classes.card} onClick={() => {showThisCard(); console.log('i')}}>
              <Link to={"/shops/"+shop._id} key={i}>
                <div style={{height: 212, backgroundImage: `url('/api/shops/logo/${shop._id}')`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain', backgroundPosition: 'center', backgroundPositionY: '50%'}}>
                    <div className={classes.cardStatusDiv}>
                        <div className={classes.cardStatus}>открыто</div>
                    </div>
                </div>
              </Link>
              <div style={{height: 100, alignContent: 'space-evenly', paddingLeft: 20, paddingTop: 20, display: 'grid', alignItems: 'end'}}>
                <Link to={"/shops/"+shop._id}>
                  <div style={{fontSize: 18, fontWeight: 400, textShadow: '0 0 black'}}>{shop.name}</div>
                </Link>
                  <div style={{display: 'grid', gridTemplateColumns: '5fr 1fr', alignSelf: 'end'}}>
                      <div style={{ fontWeight: 400, fontSize: 12, width: 135, color: '#797979'}}>
                          бесплатная доставка от 
                          <span style={{color: '#000'}}> 1000 руб</span>
                      </div> 
                      { smth ?
                      <div style={{ width: 80, height: 50}} className={classes.greenBg}>
                          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                              height: 'inherit'}}> 2 по цене 1
                          </p>
                      </div>
          : ''}
                  </div>
                </div>
            </div>

          })}
              </div>
                    <div className={classes.suggestionsDiv}>
                        <div style={{paddingLeft: '1em', paddingRight: '1em', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )', gridGap: 50, width: '100%', height: '100%'}}>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 30}}>
                                <div className={classes.card1 + ' ' + classes.noRepeatCenter + ' ' + classes.Icon} style={{backgroundImage: `url(${cardIcon})`}}></div>
                                <div>
                                    <div className={classes.h4} style={{margin: '27px auto 15px'}}>Огромный выбор</div>
                                    <div className={classes.description16}>100 ресторанов и магазинов в Томске с доставкой</div>
                                </div>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 30}}>
                                <div className={classes.card1 + ' ' + classes.noRepeatCenter + ' ' + classes.Icon}  style={{backgroundImage: `url(${locationIcon})`}}></div>
                                <div>
                                    <div className={classes.h4} style={{margin: '27px auto 15px'}}>Экономьте время</div>
                                    <div className={classes.description16}>Все ваши любимые товары на расстоянии вытянутой руки</div>
                                </div>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 30}}>
                                <div className={classes.card1 + ' ' + classes.noRepeatCenter + ' ' + classes.Icon}  style={{backgroundImage: `url(${timeCircleIcon})`}}></div>
                                <div>
                                <div className={classes.h4} style={{margin: '27px auto 15px'}}>60 минут</div>
                                    <div className={classes.description16}>Среднее время доставки</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{height: 495, marginBottom: 20, marginLeft:'1em', marginRight: '1em', display: 'grid', alignContent: 'center', padding: '0 4em', alignContent: 'start'}}
                        className={classes.card1}>
                        <div style={{display: 'grid', gridTemplateColumns: '2fr 2fr', marginTop: 101}}>
                            <div style={{display: 'grid'}}>
                                <div>
                                    <h2 style={{fontWeight: 'bold', fontSize: 48}}>
                                    Все магазины в одном приложении на вашем телефоне
                                    </h2>
                                </div>
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                                    <div  className={classes.noRepeatCenter} style={{backgroundImage: `url(${google})`, width: 187, height: 63}}></div>
                                    <div  className={classes.noRepeatCenter} style={{backgroundImage: `url(${apple})`, width: 187, height: 63}}></div>
                                </div>
                            </div>
                            <div className={classes.noRepeatCenter} style={{backgroundImage: `url(${phonePic})`, width: 478, height: 339, width: '100%', backgroundSize: 'contain'}}></div>
                        </div>
                    </div>
                    <div className={classes.aboutBlock}>
                        <h3 className={classes.h3t} style={{marginBottom:52}}>ЕДИНЫЙ СЕРВИС ЗАКАЗОВ И ДОСТАВКИ МАРКЕТА В ТОМСКЕ</h3>
                        <div style={{lineHeight: 2.5}}>Маркета существует, чтобы объединить в Томске предложения кафе и ресторанов, служб доставки еды, цветов, товаров и
                            услуг в одном месте. Для вас мы разработали удобный сервис, позволяющий выбрать понравившиеся блюда, товары и заказать для самовывоза, либо доставки их к себе домой или на работу. Некоторые партнеры осуществляют бесплатную доставку и работают по 24 часа в сутки, поэтому вам не придется задаваться вопросом: - <span className={classes.bold}>"Где можно заказать еду круглосуточно?"</span> Наш сервис уже позаботился об этом и собрал все лучшие и выгодные предложения в одном месте. Также наш сервис поможет забронировать столик в кафе и ресторане в Томске.
                        </div><br/><br/>
                        <div style={{lineHeight: 2.5}}>Несомненным плюсом работы единого сервиса по доставке еды, цветов и товаров является экономия времени – все заказы после оформления моментально передаются заведениям-партнерам, поэтому доставка осуществляется максимально быстро и с выгодой для вас, ведь через сервис еду, цветы и товары можно заказать дешевле, чем в самом заведении. Так при совершении заказов вы получаете <span className={classes.bold}>кэшбэк до 20%</span>, и в дальнейшем можете оплачивать ими покупки. Зарегистрируйся и получи <span className={classes.bold}>200 бонусных рублей в подарок на первый заказ</span>, которыми сразу можно <span className={classes.bold}>рассчитаться до 50% стоимости заказа!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*<Categories categories={categories}/>*/

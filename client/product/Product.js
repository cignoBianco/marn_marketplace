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

import Search from './../assets/images/icons/Search.png'
import Location from './../assets/images/icons/Location.png'
import CloseIcon from '@material-ui/icons/Close';
//import Link from "@material-ui/core/Link"
import Button from '@material-ui/core/Button'
import pepe from './../assets/images/pepe.png'
import Rating from 'material-ui-rating'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },    
  container: {
    width: 800,
    maxHeight: 959,
    height: '82%',
    background: '#fff',
    padding: '41px 34px',
    display: 'grid',
    position: 'fixed',
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3), 0px 8px 500em 500em rgba(52, 60, 68, 0.23)',
    borderRadius: 20,
    gridTemplateRows: 'min-content',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 0,
    bottom: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    zIndex: 100,
    textAlign: 'center',
    alignContent: 'start',
    overflowY: 'scroll',
    padding: '38px 30px 60px 40px',
    height: 'fit-content'
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
  },
  container: {
    width: 800,
    maxHeight: 959,
    height: '82%',
    background: '#fff',
    padding: '41px 34px',
    display: 'grid',
    gridGap: 30,
    position: 'fixed',
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3), 0px 8px 500em 500em rgba(52, 60, 68, 0.23)',
    borderRadius: 20,
    gridTemplateRows: 'min-content',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 0,
    bottom: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    zIndex: 100,
    textAlign: 'center',
    alignContent: 'start',
    overflowY: 'scroll',
    padding: '38px 30px 60px 40px'
},
icon: {
    width: 40,
    height: 40,
    backgroundRepeat: 'no-repeat',
},
label: {
    fontSize: 32,
    color: theme.palette.primary.text,
    fontWeight: 700,
},
section: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
},
cross: {
    display: 'grid',
    position: 'fixed',
    justifySelf: 'end',
    width: 'inherit',
    marginTop: '-1em',
    textAlign: '-webkit-right',
},
Button: {
    height: 44,
    width: '100%',
    padding: '7px 40px',
    backgroundColor: theme.palette.primary.accent,
    borderRadius: theme.basic.borderRadius,
    fontSize: 20,
    //#B0CB1F
    "&:hover": {
        backgroundColor: theme.palette.primary.accentHover
      },
},
cardMain: {
    width: 370,
    //height: 534,
},
Title: {
    width: 240,
    height: 63,
    textAlign: 'start',
},
h2: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 5,
    textAlign: 'start',
},
titleDescription: {
    fontSize: 15,
},
control: {
    margin: '25px 13.5px',
    background: 'rgba(118, 118, 128, 0.12)',
    borderRadius: 8.91,
    display: 'flex',
    justifyContent: 'space-around',
    height: 28,
    alignItems: 'center'
},
activeControl: {
    width: 112,
    height: '95%',
    background: '#FFFFFF',
    border: '0.5px solid rgba(0, 0, 0, 0.04)',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: 6.93,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
p: {
    fontSize: 13,
    textAlign: 'start'
},
additions: {
    margin: '25px 9px 25px 0'
},
gridAdds: {
    display: 'grid',
    gridGap: 24,
    gridTemplateColumns: '1fr 24px 24px 24px',
    gridTemplateColumns: '1fr 18px 18px 18px',
    margin: '25px 9px 25px 0',
    textAlign: 'initial'
},
bold: {
    fontWeight: 800
},
textCenter: {
    textAlign: 'center'
},
greenRec: {
    width: 18,
    height: 18,
    backgroundColor: theme.palette.primary.accent,
    color: '#fff',
    textAlign: 'center'
},
Actions: {
    width: 179,
   // maxHeight: 81,
    display: 'grid',
    textAlign: 'start',
    gridTemplateRows: 'min-content min-content min-content',
},
discount: {
    color: theme.palette.secondary.text,
    fontWeight: 300,
    marginLeft: 4,
    fontSize: 18,
    textDecoration: 'line-through'
},
lightBtn: {
    width: 284,
    height: 44,
    border: '1px solid #B0CB1F',
    boxSizing: 'border-box',
    boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.1)',
    borderRadius: 8,
    marginBottom: '2em',
    marginTop: '1em',
},
hideLink: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#B0CB1F',
    textAlign: 'center',
},
cardDetails: {
    height: 252,
    display: 'grid',
    padding: 0,
    textAlign: 'start',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'flex-start',
    paddingLeft: '1em'
},
cardDetailsCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    order: 0,
    alignSelf: 'flex-start',
    flexGrow: 0,
    margin: '42px 0px',
    width: 333,
    '& > div': {
        borderBottom: '1px solid #d3d3d378'
    }
},
divRow: {
    minHeight: 36,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignContent: 'space-around',
    width: '100%',
    '& p': {
        fontSize: 15
    }
},
lightH2: {
    fontSize: 20,
    fontWeight: 200,
    width: '100%',
    paddingBottom: '1em'
  },
}))

export default function Product ({match}) {
  const classes = useStyles()
  const [product, setProduct] = useState({shop:{}})
  const [suggestions, setSuggestions] = useState([])
  const [details, showDetails] = useState(true)
  function toggleDetails() {
    (details) ? showDetails(false) : showDetails(true)
  }
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

<div className={classes.container}>
            <div className={classes.cross}><CloseIcon  onClick={(e)=>{window.history.go(-1); return false;}} /*onClick={(e) => hide()}*/ />  </div>
            
            <div style={{display: 'grid', gridGap: 40, gridTemplateColumns: '295px 1fr'}}>
                <div style={{width: 292, backgroundImage: `url(${pepe})`, backgroundRepeat:'no-repeat'}}></div>
                <div className={classes.cardMain}>
                    <div className={classes.Title}>
                        <div className={classes.h2}>{product.name}</div>
                        <div className={classes.titleDescription}>
                          {product.description}
                        </div>
                    </div>
                    <div className={classes.control}>
                        <p>25 cм</p>
                        <p className={classes.activeControl}>30</p>
                        <p>35 cм</p>
                    </div>
                    <p className={classes.p}>
                        Колбаса пепперони, бекон, копчёное куриное филе, томаты, сыр, перец халапеньо, томатный соус (в составе соуса есть лук и чеснок). Посыпается укропом.
                    </p>
                    <div className={classes.additions}>
                        <div className={classes.h2}>Добавки</div>
                        <div className={classes.gridAdds}>
                            <div>
                                Томаты 50 гр — 
                                <span className={classes.bold}>49 руб</span>
                            </div>
                            <div className={classes.greenRec}>-</div>
                            <div className={classes.textCenter}>0</div>
                            <div className={classes.greenRec}>+</div>

                            <div>
                                Сыр 50 гр — 
                                <span className={classes.bold}>49 руб</span>
                            </div>
                            <div className={classes.greenRec}>-</div>
                            <div className={classes.textCenter}>0</div>
                            <div className={classes.greenRec}>+</div>

                            <div>
                                Перец 50 гр — 
                                <span className={classes.bold}>49 руб</span>
                            </div>
                            <div className={classes.greenRec}>-</div>
                            <div className={classes.textCenter}>0</div>
                            <div className={classes.greenRec}>+</div>
                        </div>
                    </div>
                    <div className={classes.Actions}>
                        <div className={classes.h2}>{product.price} руб <span className={classes.discount}>{product.price}0 руб</span></div>
                        <div className={classes.radioGroup}>
                            <Rating
                            value={3}
                            max={5}
                            onChange={(value) => console.log(`Rated with value ${value}`)}
                            />
                        <p style={{fontSize: 22}}>Акция</p>
                        </div>
                    </div>

                    
                    <span className={classes.action}>
                      <AddToCart cartStyle={classes.lightBtn} item={product}/>
                    </span>

    <p onClick={toggleDetails} className={classes.hideLink}>{details ? 'Скрыть подробную информацию' : 'Показать подробную информацию'}</p>
                    
                </div>
              
                
            </div>
            {details ? 
            <div className={classes.cardDetails}>
                <div className={classes.cardDetailsCol}>
                    <div>
                        <h2 className={classes.lightH2}>Общая информация</h2>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Бренд</p>
                        <p>Пицца</p>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Производитель</p>
                        <p>Морозко</p>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Страна</p>
                        <p>Россия</p>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Условия хранения</p>
                    <p>При температуре не выше - 18С</p>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Срок хранения</p>
                        <p>48 ч</p>
                    </div>
                </div>
                <div className={classes.cardDetailsCol}>
                    <div>
                        <h2 className={classes.lightH2}>Пищевая ценность на 100 гр</h2>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Белки</p>
                        <p>10,5 гр</p>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Жиры</p>
                        <p>12,9 гр</p>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Углеводы</p>
                        <p>26,2 гр</p>
                    </div>
                    <div className={classes.divRow}>
                        <p className={classes.bold}>Калорийность</p>
                        <p>263 ккал</p>
                    </div>
                </div>
            </div>
             : null}
  </div>

   )
}
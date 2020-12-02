import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import box from './../assets/images/icons/menu/box 1.png'
import dinner from './../assets/images/icons/menu/dinner 1.png'
import stuff from './../assets/images/icons/menu/staff 1.png'
import flower from './../assets/images/icons/menu/flower 1.png'
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link"
import pizza from './../assets/images/pizza.png'
import cart from './cart-helper.js'

const useStyles = makeStyles(theme => ({
    container: {
        width: 710,
        height: '100vh',
        background: '#fff',
        display: 'grid',
        //gridGap: 35,
        position: 'fixed',
        right: 0,
        overflowY: 'scroll',
        top: 0,
        gridAutoRows: 'min-content',
        zIndex: 100,
        boxShadow: '0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12), 140px 16px 140px 939px rgba(52, 60, 68, 0.2)',
        zIndex: 10,
        paddingBottom: 30
    },
    section: {
        width: 326,
        height: 80,
        display: 'grid',
        gridTemplateColumns: 'min-content 1fr',
        gridGap: 18,
        alignItems: 'center',
        '&:hover div:first-of-type': {
            fontSize: 40,
                marginTop: 2,
                boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)',
                borderRadius: 10,
        }
    },
    icon: {
        width: 80,
        height: 80,
        boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.2)',
        borderRadius: 10,
        display: 'grid'
    },
    label: {
        textTransform: 'uppercase',
        fontSize: 22,
        color: theme.palette.primary.text,
        fontWeight: 700,
        paddingLeft: 40
    },
    fs22: {
        fontSize: 22
    },
    greenHat: {
        height: 60,
        //width:  '100%',
        backgroundColor: theme.palette.primary.accent,
        padding: '10px 36px',
        display: 'grid',
        gridTemplateColumns: '40px 1fr 150px',
        gridGap: 16,
        alignContent: 'center',
    },
    greySquare: {
        background: '#EDEDED',
        boxShadow: 'inset 0px 2px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        verticalAlign: 'middle',
        height: 40,
        width: 40,
        alignItems: 'center'
    },
    greyRec: {
        background: '#EDEDED',
        padding: '3px 25px',
        boxShadow: 'inset 0px 2px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        verticalAlign: 'middle',
        height: 40,
        width: 110,
        alignItems: 'center'
    },
    bold: {
        fontWeight: 800
    },
    greyLine: {
        backgroundColor: '#E0E0E0',
        paddingLeft: 96,
        height: 30,
        display: 'flex',
        alignItems: 'center'
    },
    mainBlock: {
        padding: 15,
        display: 'grid',
    },
    item: {
        minHeight: 102,
        paddingBottom: 20,
        paddingTop: 20,
        borderBottom: '1px solid #EDEDED',
        display: 'grid',
        gridGap: 20,
        gridTemplateColumns: '150px 310px 1fr',

    },
    button: {
        width: 418,
        border: '1px solid #B0CB1F',
        filter: 'drop-shadow(0px 8px 16px rgba(52, 60, 68, 0.1))',
        height: 44,
        padding: '10px 48px 0px 48px',
        boxSizing: 'border-box',
        textAlign: 'center',
        borderRadius: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 125
    }
}))


export default function Cart2({hide}) {
    //const [sidebarVisible, setSidebarVisible] = useState(props.0);
    const classes = useStyles()

    const [currentCount, setCurrentCount] = useState(0);
    function changeCartCount () {
      let cartArr = cart.getCart()
      console.log('tcart', cartArr)
      let tryUseTutorial = {
        items: cartArr
      }
      let cartArrRes = tryUseTutorial.items.reduce(function(arr, item) {
        var found = false;
        console.log('arritem', arr, item)
    
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].product._id === item.product._id) {
                found = true;
                arr[i].count++;
            }
        }
        console.log(found, item.count)
        if (!found && !item.count || item.count && item.count <= 1
          || !found && item.count && item.count == 1) {
            item.count = 1;
            arr.push(item);
        }
        if (!found && item.count) {
            item.count = item.count
            arr.push(item)
        }
    
        return arr;
    }, [])
    let sum = 0;
    cartArrRes.forEach(element => {
        console.log('el', element.count, element)
        sum += element.count;
    });
     console.log('menuCart',cartArrRes, sum)
    }
    changeCartCount()

    return (
        <div className={classes.container}>
            <div style={{display: 'flex', justifyContent: 'space-between', height: 60, alignItems: 'center'}}>
              
                <h3 onClick={(e) => {window.location.href = '../cart';}} className={classes.label} >Ваша корзина</h3>
                
                <CloseIcon className={classes.cross} onClick={(e) => hide()}/>
            </div>
            <div className={classes.greenHat}>
                <div className={classes.greySquare}>
                    3
                </div>
                <h2><span className={classes.bold}>Pizza | </span> 2 кг</h2>
                <div className={classes.greyRec}>
                    1800 руб 
                </div>
            </div>
            <div className={classes.greyLine}>
                Ваш заказ доставят бесплатно
            </div>
            <div className={classes.mainBlock}>
                <div className={classes.item}>
                    <div style={{backgroundPositionX: 'right', backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div style={{backgroundPositionX: 'right', backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div style={{backgroundPositionX: 'right', backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.greenHat}>
                <div className={classes.greySquare}>
                    3
                </div>
                <h2><span className={classes.bold}>Pizza | </span> 2 кг</h2>
                <div className={classes.greyRec}>
                    1800 руб 
                </div>
            </div>
            <div className={classes.greyLine}>
                Ваш заказ доставят бесплатно
            </div>
            <div className={classes.mainBlock}>
                <div className={classes.item}>
                    <div style={{paddingLeft: 70, backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div style={{paddingLeft: 70, backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div style={{paddingLeft: 70, backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.greenHat}>
                <div className={classes.greySquare}>
                    2
                </div>
                <h2><span className={classes.bold}>Dodo | </span> 2 кг</h2>
                <div className={classes.greyRec}>
                    700 руб 
                </div>
            </div>
            <div className={classes.greyLine} style={{display: 'flex', justifyContent: 'space-around'}}>
                <div>До бесплатного заказа осталось</div>
                <div>300 руб</div>
            </div>
            <div className={classes.mainBlock}>
                <div className={classes.item}>
                    <div style={{backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <div style={{display: 'flex'}}> 
                            <h3 style={{paddingBottom: 30, paddingLeft: 0}} className={classes.label}>Пицца 4 сыра </h3>
                            <h6 style={{fontWeight: 200, alignSelf: 'center', paddingLeft: 10}}> 560г</h6>
                        </div>
                        <div>
                            <div>
                                <span className={classes.bold}>Добавки</span>
                            </div>
                            <ul>
                                <li>Салат</li>
                                <li>Медовая горчица</li>
                                <li>Перец</li>
                                <li>Сыр моцарелла 20 г</li>
                            </ul>
                        </div>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                        
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div style={{backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p className={classes.fs22}>—</p>
                            <p className={classes.fs22}>1</p>
                            <p className={classes.fs22}>+</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                        <CloseIcon/>
                        <div style={{}}>
                            600 руб 
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.button}  onClick={(e) => {window.location.href = '../cart';}} >
                Сделать заказ на сумму 2500 руб
            </div>

        </div>
    )
}
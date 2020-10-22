import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close';
import pizza from './../assets/images/pizza.png'

const useStyles = makeStyles(theme => ({
  container: {
    width: 710,
    height: '100vh',
    background: '#fff',
    display: 'grid',
    gridAutoRows: 'min-content',
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
p20: {
  fontSize: 20,
  color: "#797979",
  fontWeight: 300
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
    gridTemplateColumns: '1fr 50px',
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
},
bold20: {
  fontSize: 20,
  fontWeight: 700,
  marginBottom: '2em'
},
}))

export default function MyOrders(){
  const classes = useStyles()
 
  return (
    <div className={classes.container}>
        <div style={{display: 'flex', justifyContent: 'space-between', height: 60, alignItems: 'center'}}>
          
        <h2 className={classes.bold20}>Ваши последние заказы</h2>
            <CloseIcon className={classes.cross} onClick={(e) => hide()}/>
        </div>
        <div className={classes.greenHat}>
            <h2>Заказ от 12.06.2020</h2>
        </div>
        <div className={classes.mainBlock}>
            <div className={classes.item}>
                <div style={{ backgroundPositionX: 'right', backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                <div style={{paddingLeft: 20}}>
                    <h3 className={classes.p20}>Название продукта</h3>
                    <div style={{ width: 250, display: 'flex',  height: '100%', alignItems: 'center'}}>
                        <p className={classes.fs22}>1</p>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                    <div></div>
                    <div className={classes.p20}>
                        600 руб 
                    </div>
                </div>
            </div>
            <div className={classes.item}>
                <div style={{ backgroundPositionX: 'right', backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                <div style={{paddingLeft: 20}}>
                    <h3 className={classes.p20}>Название продукта</h3>
                    <div style={{ width: 250, display: 'flex',  height: '100%', alignItems: 'center'}}>
                        <p className={classes.fs22}>1</p>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 90, justifyContent: 'space-between', alignItems: 'flex-end', width: 147}}>
                    <div></div>
                    <div className={classes.p20}>
                        600 руб 
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.greenHat}>
            <h2>Заказ от 11.06.2020</h2>
        </div>
        <br/>
        <div className={classes.greenHat}>
            <h2>Заказ от 12.04.2020</h2>
        </div>

    </div>
)
}

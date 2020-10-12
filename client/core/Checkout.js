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
import lock from './../assets/images/icons/Lock.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: 710,
       // height: '100vh',
        background: '#fff',
        marginTop: 56,//'86px 40px 0 20px',
        padding: '0 2em',
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
    cross: {
        position: 'absolute',
        position: 'relative',
        top: -25,
        right: -500
    },
    greenHat: {
        height: 60,
        //width:  '100%',
        backgroundColor: theme.palette.primary.accent,
        padding: '10px 36px',
        display: 'grid',
        gridTemplateColumns: '40px 1fr 150px',
        gridGap: 16,
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
        gridGap: 40,
        gridTemplateColumns: '100px 310px 1fr',

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
        marginBottom: 45
    },
    table: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        margin: 15,
        fontSize: 22,
        color: '#797979',
        gridGap: 13
    },
    inputLight: {
        border: '1px solid #E6E6EB',
        boxSizing: 'border-box',
        borderRadius: 8,
        height: 40,
        //width: 400,
        marginBottom: 20,
        padding: '1em 3em'
      },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '0 1em',
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '0 1em',
    },
    control: {
        height: 40,
        margin: '25px auto',
        display: 'grid',
        width: 350,
        gridTemplateColumns: '1fr 1fr',
        background: 'rgba(118, 118, 128, 0.12)',
        alignItems: 'center',
        borderRadius: 8.91,
        textAlign: 'center',
        alignContent: 'center',
    },
    activeControl: {
        //112',
        height: 'inherit',
        background: '#FFFFFF',
        border: '0.5px solid rgba(0, 0, 0, 0.04)',
        boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.12)',
        borderRadius: 6.93,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}))


export default function Checkout() {
    //const [sidebarVisible, setSidebarVisible] = useState(props.0);
    const classes = useStyles()
    return (
      
        <div>
        <div style={{display: 'flex', justifyContent: 'space-around', padding:'0 2em 3em'}}>
            

        <div className={classes.container}>
            <div>
                <div style={{display: 'flex', height: 60}}>
                    <h3 className={classes.label}>Контакты</h3>
                </div>
                <div className={classes.grid2}>
                    <input className={classes.inputLight} id="name" label="Name"  placeholder="Имя"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Номер телефона"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Количество персон"/>
                </div>
            </div>

            <div>
                <div style={{display: 'flex', height: 60}}>
                    <h3 className={classes.label}>Способ доставки</h3>
                </div>
                <div className={classes.control}>
                    <p>Самовывоз</p>
                    <p className={classes.activeControl}>Курьером</p>
                </div>
                <input className={classes.inputLight} style={{width: '100%'}}  id="name" label="Name"  placeholder="Адрес"/>
                <div className={classes.grid3}>
                    <input className={classes.inputLight} id="name" label="Name"  placeholder="Дом"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Квартира"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Копрус"/>
                    <input className={classes.inputLight} id="name" label="Name"  placeholder="Этаж"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Подъезд"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="Код домофона"/>
                </div>
                <textarea className={classes.inputLight} style={{width: '100%'}} id="name" label="Name" placeholder="Комментарий по доставке"></textarea>
            </div>
            
            <div>
                <div style={{display: 'flex', height: 60}}>
                    <h3 className={classes.label}>Оплата</h3>
                </div>
                <div className={classes.control}>
                    <p>Картой онлайн</p>
                    <p className={classes.activeControl}>Картой курьеру</p>
                </div>
                <input className={classes.inputLight} style={{width: '100%'}}  id="name" label="Name"  placeholder="Номер карты"/>
                <div className={classes.grid3}>
                    <input className={classes.inputLight} id="name" label="Name"  placeholder="ММ"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="ГГ"/>
                    <input className={classes.inputLight} id="name" label="Name" placeholder="CW"/>
                </div>
                <input className={classes.inputLight} style={{width: '100%'}}  id="name" label="Name"  placeholder="Имя латиницей"/>
            </div>

           <div>
           <div style={{display:'grid', gridTemplateColumns: '25px 1fr', gridGap: '2em', margin:'1em 0'}}>
                <div style={{backgroundImage: `url(${lock})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                <div>
                    <p style={{margin: 0}}>
                    <span className={classes.bold}>Безопасное соединение</span><br/>
                    Мы не храним и не обрабатываем данные банковских карт. Все операции проводятся в процессинговом цетре CloudPayments, сертифицированном по международному стандарту безопасности платежных карт PCI DSS. 
                    </p>
                </div>
                <div style={{height: 24, border: '2px solid lightgrey'}}></div>
                <p style={{margin: 0}} >
                    Необходимы закрывающие документы
                </p>
            </div>
           </div>

            
     </div>


        <div className={classes.container} style={{boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)'}} >
            <div style={{display: 'flex', height: 60}}>
                <h3 className={classes.label}>Ваш заказ</h3>
            </div>
            <div className={classes.greenHat}>
                <div className={classes.greySquare}>
                    3
                </div>
                <h2><span className={classes.bold}>Pizza | </span> 2 кг</h2>
                <div className={classes.greyRec}>
                    <span className={classes.bold}>1800 руб </span>
                </div>
            </div>
            <div className={classes.greyLine}>
                Ваш заказ доставят бесплатно
            </div>
            <div className={classes.mainBlock}>
                <div className={classes.item}>
                    <div style={{backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <CloseIcon className={classes.cross}/>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p>—</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div style={{backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <CloseIcon className={classes.cross}/>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p>—</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div style={{backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <CloseIcon className={classes.cross}/>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p>—</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className={classes.table}>
                    <div className={classes.tableItem}>Стоимость</div>
                    <div className={classes.tableItem}>1800</div>
                    <div className={classes.tableItem}>Доставка</div>
                    <div className={classes.tableItem}>бесплатая</div>
                    <div className={classes.tableItem}>Акции</div>
                    <div className={classes.tableItem}>0</div>
                    <div className={classes.tableItem}><span className={classes.bold}>Итого</span></div>
                    <div className={classes.tableItem}><span className={classes.bold}>1800</span></div>
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
                        <h3 style={{paddingBottom: 30}} className={classes.label}>Пицца 4 сыра </h3>
                       
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
                            <p>—</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                
                <div className={classes.item}>
                    <div style={{backgroundImage: `url(${pizza})`, backgroundRepeat: 'no-repeat'}}></div>
                    <div>
                        <h3 className={classes.label}>Название продукта</h3>
                        <CloseIcon className={classes.cross}/>
                        <div style={{width: 250, display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center'}}>
                            <p>—</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className={classes.table}>
                    <div className={classes.tableItem}>Стоимость</div>
                    <div className={classes.tableItem}>1800</div>
                    <div className={classes.tableItem}>Доставка</div>
                    <div className={classes.tableItem}>бесплатая</div>
                    <div className={classes.tableItem}>Акции</div>
                    <div className={classes.tableItem}>0</div>
                    <div className={classes.tableItem}>Итого</div>
                    <div className={classes.tableItem}>1800</div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '2em 2em 0 0.5em', fontSize: 22}}>
                    <div className={classes.Sum}>ИТОГО</div> <div className={classes.Sum}><span className={classes.bold}>2800 руб</span></div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}
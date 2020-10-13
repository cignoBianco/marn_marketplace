import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from 'material-ui-rating'
import Slider from '@material-ui/core/Slider'
import Pagination from '@material-ui/lab/Pagination';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
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
        height: 112,
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
        border: '1px solid',
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
}));


export default function SearchOrganization() {
    const classes = useStyles()
    const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div>
            <div>
            <div style={{height: 50, marginLeft: '6em'}}>
                <div style={{width: 123, height: 17, fontSize: 14, marginTop: 50}}>Главная / <span className={classes.bold}>Поиск</span></div>
            </div>
            <h1 className={classes.h1}>Поиск по запросу "пицца"</h1>
                <div className={classes.category}>
                    <div className={classes.categories}>
                        {/*<div className={classes.cat + ' ' + classes.activeTab}>
                            Заведения (6)
                        </div>*/}
                        <div className={classes.cat + ' ' + classes.activeTab}>
                            Товары (100)
                        </div>
                        {/*<div className={classes.cat}>
                            Адреса
                        </div>*/}
                    </div>
                </div>
            <div className={classes.container}>
                    <div className={classes.parent}>
                        <div className={classes.filter}>
                            <div className={classes.greenHat}>
                                <h4 className={classes.h4}>Фильтр поиска</h4>
                             </div>
                             <div className={classes.radioGroup}>
                                <label className={classes.radioLabel}>
                                    <input type="radio" name="radioButtonName" value="radioButtonValue1"/>
                                    <div style={{fontSize: 20, color: '#797979'}}>Параметр 1</div>
                                </label>
                                <label className={classes.radioLabel}>
                                <input type="radio" name="radioButtonName" value="radioButtonValue1"/>
                                <div style={{fontSize: 20, color: '#797979'}}>Параметр 2</div>
                                </label>
                                </div>

                                <div className={classes.radioGroup}>
                                <label className={classes.radioLabel}>
                                    <input type="radio" name="radioButtonName" value="radioButtonValue1"/>
                                    <div style={{fontSize: 20, color: '#797979'}}>Фильтр 1</div>
                                </label>
                                <label className={classes.radioLabel}>
                                <input type="radio" name="radioButtonName" value="radioButtonValue1"/>
                                <div style={{fontSize: 20, color: '#797979'}}>Фильтр 2</div>
                                </label>
                                </div>

                                <div className={classes.radioGroup}>
                                    <div className={classes.cat}>Минимальная сумма заказа</div>
                                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                                </div>

                                <div className={classes.radioGroup}>
                                    <Rating
                                    value={3}
                                    max={5}
                                    onChange={(value) => console.log(`Rated with value ${value}`)}
                                    />
                                </div>
                                <div className={classes.Button2}>Применить</div>
                        </div>
                        <div className={classes.grid}>
                        <div className={classes.card}>
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
                                            height: 'inherit'}}> 40-60 мин
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
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
                                            height: 'inherit'}}> 40-60 мин
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
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
                                            height: 'inherit'}}> 40-60 мин
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
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
                                            height: 'inherit'}}> 40-60 мин
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div></div>
                        <Pagination count={10} shape="rounded" style={{marginTop: 40, marginBottom: 40, justifySelf: 'center'}} />
                    </div>
                </div>
            </div>
        </div>
    )
};


/*
function Breadcrumber(props) {
    const classes = useStyles()
    return (
        <div>
            <div style={{height: 50, width: '100%', paddingLeft: 130}}>
                <div style={{width: 123, height: 17, fontSize: 14}}>Главная / <span className={classes.bold}>Поиск</span></div>
            </div>
            <h1 className={classes.h1}>Поиск по запросу "пицца"</h1>
            <div className={classes.category}>
                <div className={classes.categories}>
                    <div className={classes.cat + ' ' + classes.activeTab}>
                        Заведения (6)
                    </div>
                    <div className={classes.cat}>
                        Товары (100)
                    </div>
                    <div className={classes.cat}>
                        Адреса
                    </div>
                </div>
            </div>
            <div className={classes.container}>

            </div>
        </div>
    )

}*/
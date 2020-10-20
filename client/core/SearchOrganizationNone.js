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
    Icon: {
        backgroundSize: '60%',
        height: 181,
        width: 175
    },
    bold: theme.bold,
    greenHat: {
        width: 380,
        height: 50,
        backgroundColor: theme.palette.primary.accent,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
                        <div className={classes.cat + ' ' + classes.activeTab}>
                            Заведения (0)
                        </div>
                        <div className={classes.cat + ' ' + classes.activeTab}>
                            Товары (0)
                        </div>
                        <div className={classes.cat}>
                            Адреса
                        </div>
                    </div>
                </div>
            <div className={classes.container}>
                    <div className={classes.parent}>

                    <div style={{fontSize: 15, marginTop: 50}}>Нет результатов</div> 
                    
                     </div>
                </div>
            </div>
        </div>
    )
};

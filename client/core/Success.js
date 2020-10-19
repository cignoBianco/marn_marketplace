import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { shadows } from '@material-ui/system'
import Button from "@material-ui/core/Button"
import Group from './../assets/images/feedback.png'
import cardIcon from './../assets/images/icons/BuyCard.png'
import locationIcon from './../assets/images/icons/Location.png'
import timeCircleIcon from './../assets/images/icons/Time Circle.png'
import phonePic from './../assets/images/phone.png'
import google from './../assets/images/icons/google play.png'
import apple from './../assets/images/icons/apple.png'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import imageUrl from './../assets/images/org/cards/Block.png'
//import { Group } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
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

export default function Main() {
    const classes = useStyles()
    return (
        <div> 
            <div  className={classes.container} >  
                <div className={classes.sloganContainer}>
                    <img src={Group} className={classes.picture} alt="Marketa" />
                    <div className={classes.sloganDiv}>
                        <Typography variant="body1" className={classes.someText}>
                            Заказ оформлен. Спасибо
                        </Typography>
                        <Typography variant="body2" className={classes.description}>
                        Ваш заказ №1 от 09.09.2020 15:50 успешно создан. На ваш номер телефона придет уведомление по каждому изменению статуса Вашего заказа.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}
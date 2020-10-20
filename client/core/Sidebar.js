import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import box from './../assets/images/icons/menu/box 1.png'
import dinner from './../assets/images/icons/menu/dinner 1.png'
import stuff from './../assets/images/icons/menu/staff 1.png'
import flower from './../assets/images/icons/menu/flower 1.png'
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link"
import {Link as LinkRouter, withRouter} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    sideBarContainer: {
        width: 376,
        height: '100vh',
        background: '#fff',
        padding: '86px 40px 0 20px',
        display: 'grid',
        gridGap: 35,
        position: 'fixed',
        left: 0,
        top: 0,
        gridAutoRows: 'min-content',
        boxShadow: '0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12), 140px 16px 140px 939px rgba(52, 60, 68, 0.2)',
        zIndex: 10
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
        fontWeight: 700
    },
    cross: {
        position: 'absolute',
        left: 20, 
        top: 20
    }
}))


export default function Sidebar({hide}) {
    //const [sidebarVisible, setSidebarVisible] = useState(props.0);
    
    const classes = useStyles()
    return (
        <div className={classes.sideBarContainer}>
            <CloseIcon className={classes.cross} onClick={(e) => hide()}/>
            <section className={classes.section}>
                <div className={classes.icon}>
                    <div style={{backgroundImage: `url(${dinner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
                <LinkRouter to="/shops/all" className={classes.label}>Еда из ресторанов</LinkRouter> 
            </section>
            <section className={classes.section}>
                <div className={classes.icon}>
                    <div style={{backgroundImage: `url(${flower})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
                <LinkRouter to="/shops/all" className={classes.label}>Цветы</LinkRouter> 
            </section>
            <section className={classes.section}>
                <div className={classes.icon}>
                    <div style={{backgroundImage: `url(${box})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
                <LinkRouter to="/shops/all" className={classes.label}>Товары/продукты</LinkRouter> 
            </section>
            <section className={classes.section}>
                <div className={classes.icon}>
                    <div style={{backgroundImage: `url(${stuff})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
                <LinkRouter to="/shops/all" className={classes.label}>Услуги</LinkRouter> 
            </section>
        </div>
    )
}
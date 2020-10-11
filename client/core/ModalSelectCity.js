import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Search from './../assets/images/icons/Search.png'
import Location from './../assets/images/icons/Location.png'
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link"


const useStyles = makeStyles(theme => ({
    container: {
        width: 800,
        height: 528,
        background: '#fff',
        padding: '41px 34px',
        display: 'grid',
        gridGap: 30,
        position: 'fixed',
        boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)',
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
        zIndex: 100
    },
    icon: {
        width: 40,
        height: 40,
        backgroundRepeat: 'no-repeat',
    },
    label: {
        fontSize: 22,
        color: theme.palette.primary.text,
        fontWeight: 400
    },
    a: {
        color: theme.palette.secondary.text,
        fontWeight: 'normal',
        fontSize: 15
    },
    section: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
    },
    input: {
        width: 732,
        height: 50,
        boxShadow: 'inset 0px 2px 10px rgba(0, 0, 0, 0.1)',
        background: '#FBFBFB',
        borderRadius: 8,
        display: 'grid',
        gridTemplateColumns: '50px 1fr'
    }
}))

const cities = `Москва,Санкт-Петербург,Новосибирск,Екатеринбург,Казань,Нижний Новгород,Челябинск,Самара,Омск,Ростов-на-Дону,Уфа,Красноярск,Воронеж`;

function Citiesel() {
    const classes = useStyles()
    return (cities.split(",").map((city) =>
                <li>
                    <Link to={city} className={classes.label}>{city}</Link> 
                </li>
            )
    )
}

export default function ModalSelectCity({hide}) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            
            <div style={{
                    justifyItems: 'self-end',
                    display: 'grid',
                    gridTemplateColumns: '0.25fr 200px 5fr',
                    height: 43, alignItems: 'center',}}>
                
                    <div className={classes.icon} style={{backgroundImage: `url(${Location})`, backgroundSize: 'contain'}}></div>
                    <h3 className={classes.label}>Выберите город</h3>
                <CloseIcon className={classes.cross} onClick={(e) => hide()}/>
            </div>
            <div className={classes.input}>
            <div className={classes.icon} style={{backgroundImage: `url(${Search})`, width: '100%', height: '100%', backgroundPosition: 'center'}}></div>
                <input type="text" style={{
                        background: 'none',
                        border: 'none'
                }} placeholder="Поиск..." />
            </div>
            <section className={classes.section}>
                <Citiesel/>
                <Citiesel/>
                <Citiesel/>
            </section>
        </div>
    )
            }
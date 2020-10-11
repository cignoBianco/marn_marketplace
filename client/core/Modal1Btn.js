import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Search from './../assets/images/icons/Search.png'
import Location from './../assets/images/icons/Location.png'
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link"
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    container: {
        width: 600,
        maxHeight: 600,
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
        zIndex: 100,
        textAlign: 'center',
        alignContent: 'space-evenly'
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
        position: 'absolute',
        right: 30,
        top: 30
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
}))

export default function Modal1Btn({hide}) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
        <CloseIcon className={classes.cross} onClick={(e) => hide()}/>      
        <h3 className={classes.label}>Длинный заголовок</h3>
               
            <div style={{fontSize: 22, lineHeight: '1.7em'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. vDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>    
            <Button className={classes.Button} style={{padding:'7px 40px'}} >Кнопка</Button>
        </div>
    )
}
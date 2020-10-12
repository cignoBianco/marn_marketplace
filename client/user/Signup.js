import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-user.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'
import basket from './../assets/images/basket.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  },
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
h3: {
  fontSize: 32,
},
p22: {
  fontSize: 22,
  fontWeight: 200
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
    maxWidth: 400,
    height: 300,
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
   width: '100%',
   height: 58,
   backgroundColor: '#fbfbfb',
   boxShadow: '0 8px 16px 0 rgba(52, 60, 68, 0.1)',
   borderRadius: theme.basic.borderRadius,
   fontFamily: 'Gilroy',

   textTransform: 'none',
   fontSize: 20
},
flexAround : {
  display: 'flex',
  justifyContent: 'space-evenly'
},
activeLinkBorderBottom: {
  borderBottom: '5px solid ' + theme.palette.primary.accent,
},
greyBottom: {
  borderBottom: '1px solid rgba(121, 121, 121, 0.25)',
  marginBottom: 20,
},
inputLight: {
  border: '1px solid #E6E6EB',
  boxSizing: 'border-box',
  borderRadius: 8,
  height: 40,
  width: 400,
  marginBottom: 20,
  padding: '1em 3em'
},
p22: {
  alignSelf: 'center',
  fontSize: 24
}
}))

export default function Signup() {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
      }
    })
  }   


    return (<div>

  <div  className={classes.container} >  
    <div className={classes.sloganContainer}>
        <img src={basket} className={classes.picture} alt="Marketa" />
        <div className={classes.sloganDiv}>
          <div className={classes.flexAround + ' ' + classes.greyBottom}>
            <h3 className={classes.h3 + ' ' + classes.activeLinkBorderBottom}>Регистрация</h3>
            <Link to="/signin"><p className={classes.p22}>Вход</p></Link>
          </div>
          <div>
            <input className={classes.inputLight} id="name" label="Name" onChange={handleChange('name')} value={values.name} placeholder="Имя"/>
            <input className={classes.inputLight}  id="email" type="email" label="Email" value={values.email} onChange={handleChange('email')} placeholder="Электронная почта"/>
            <input className={classes.inputLight}  id="password" type="password" label="Password" value={values.password} onChange={handleChange('password')} placeholder="Пароль"/>
            {
              values.error && (<Typography component="p" color="error">
                <Icon color="error" className={classes.error}>error</Icon>
                {values.error}</Typography>)
            }
            <Button className={classes.buttonSlogan}  onClick={clickSubmit} >
                Зарегистрироваться
            </Button>
            <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Аккаунт успешн создан.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin">
            <Button autoFocus="autoFocus">
              Войти
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
          </div>
        </div>
    </div>
  </div>

    </div>
  )
}
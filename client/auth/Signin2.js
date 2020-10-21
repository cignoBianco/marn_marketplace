import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import auth from './../auth/auth-helper'
import {Redirect} from 'react-router-dom'
import {signin} from './api-auth.js'
import basket from './../assets/images/basket.png'
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format';

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
},
sendCodeBtn: {
  width: 138,
  height: 28,   
  background: '#B0CB1F',
  boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
  borderRadius: 8,
  position: 'absolute',
  right: 0,
  margin: 6,
  border: 'none'
}
}))


export default function Signin(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false,
    formattedPhone: '',
    validated: false,
    birthday: '',
    open: false,
    error: '',
    codeSent: false
  })

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, error: '',redirectToReferrer: true})
        })
      }
    })
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleChangePhone = (name, value) => {
    values.phone = value
  }

  const showPhone = () => {
    if (values.phone.length >= 10) {
      setValues({ ...values, ['validated']: true })
      values.validated = true
    }
  }

  const sendCode = () => {
    if (values.phone.length >= 10) {
      setValues({ ...values, ['validated']: true })
      values.validated = true 
      setValues({ ...values, ['codeSent']: true })
      values.codeSent = true
    } else {
      values.codeSent = false
    }
  }

  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  }
  const {redirectToReferrer} = values
  if (redirectToReferrer) {
      return (<Redirect to={from}/>)
  }

  return (

<div>

<div  className={classes.container} >  
    <div className={classes.sloganContainer}>
        <img src={basket} className={classes.picture} alt="Marketa" />
        <div className={classes.sloganDiv}>
          <div className={classes.flexAround + ' ' + classes.greyBottom}>
            <Link to="/signup"><p className={classes.p22}>Регистрация</p></Link>
            <h3 className={classes.h3 + ' ' + classes.activeLinkBorderBottom}>Вход</h3>
          </div>
          <div>
            <div style={{display: 'flex', height: 40, position: 'relative', paddingBottom: 20 }}>
              <NumberFormat format="+7 (###) ###-####" mask="_" className={classes.inputLight} placeholder="Номер телефона" id="phone" 
                value={values.formattedPhone} label="phone" onChange={handleChange('formattedPhone')}
                onValueChange={(values) => {
                  const {formattedValue, value} = values;
                  // formattedValue = $2,223
                  // value ie, 2223
                  
                  console.log(value)
                  handleChangePhone('phone', value)
                }} />
              <button className={classes.sendCodeBtn} onClick={() => {sendCode()}}>Получить код</button>
            </div>
            {
               values.validated && !values.error?
              <input className={classes.inputLight} id="sms" type="text" label="sms" value={values.sms} onChange={handleChange('sms')} placeholder="SMS - код"/>
              : ''
            }
            
            {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </Typography>)
            }
            <Button className={classes.buttonSlogan}  onClick={clickSubmit} >
                Войти
            </Button>
            
          </div>
        </div>
    </div>
  </div>


</div>

     
    )
}



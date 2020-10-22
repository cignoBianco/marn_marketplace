import React, {useState, useEffect} from 'react'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import auth from './../auth/auth-helper'
import Calendar from './../assets/images/icons/Calendar.jpg'
import {read, update} from './api-user.js'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  bold20: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: '2em'
  },
  Button2: {
    height: 44,
    width: 250,
    padding: '7px 40px',
    borderWidth: 1,
    borderColor: theme.palette.primary.accent,
    borderRadius: theme.basic.borderRadius,
    borderStyle: 'solid',
    fontSize: 20,
    margin: '40px 0',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "&:hover": {
        boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)'
      },
  },
  inputLight: {
    border: '1px solid #E6E6EB',
    boxSizing: 'border-box',
    borderRadius: 8,
    height: 40,
    marginBottom: 20,
    padding: '1em 3em'
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0 1em',
    marginTop: 25,
  },
  date: {
    '&::-webkit-calendar-picker-indicator': {
      background: `url(${Calendar})`,
      width: 24,
      height: 24,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      paddingLeft: 0,
    }
  },
  radioLabel: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: 5,
    alignItems: 'center'
  },
  radioGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: 40
  },
  p15: {
    fontSize: 15,
    color: "#797979",
    fontWeight: 300
  },
}))

export default function EditProfile({ match }) {
  console.log(match)
  const classes = useStyles()
  const [values, setValues] = useState({
      name: '',
      fname: '',
      email: '',
      password: '',
      seller: false,
      redirectToProfile: false,
      error: '',
  })
 
  const jwt = auth.isAuthenticated()
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, name: data.name, email: data.email, seller: data.seller})
      }
    })
    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.userId])
  
  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
      seller: values.seller || undefined
    }
    update({
      userId: match.params.userId
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        auth.updateUser(data, ()=>{
          setValues({...values, userId: data._id, redirectToProfile: true})
        })
      }
    })
  }
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }
  const handleCheck = (event, checked) => {
    setValues({...values, 'seller': checked})
  }

  if (values.redirectToProfile) {
    return (<Redirect to={'/user/' + values.userId}/>)
  }
    return (
      <div>
        <div>
          <h2 className={classes.bold20}>
            Информация о вашей учетной записи
          </h2>
          
          <div className={classes.grid2}>
            <input className={classes.inputLight} value={values.name} onChange={handleChange('name')}  id="name" label="Name"   placeholder="Имя"/>
            <input className={classes.inputLight} value={values.fname} onChange={handleChange('fname')} id="fname" label="FName" placeholder="Фамилия"/>
            <input className={classes.inputLight} value={values.email} onChange={handleChange('email')} id="email" type="email" label="Email"  placeholder="Email"/>
            <input className={classes.inputLight} value={values.password} onChange={handleChange('password')}  id="password" type="password" label="Password" placeholder="Пароль"/>
            <input className={classes.inputLight + ' ' + classes.date} type="date" id="birthday" label="birthday" placeholder="Дата рождения персон"/>
            <div>
              <div className={classes.radioGroup}>
                <label className={classes.radioLabel}>
                  <input type="radio" name="radioButtonName" value="radioButtonValue1"/>
                  <div className={classes.p15}>Фильтр 1</div>
                </label>
                <label className={classes.radioLabel}>
                  <input type="radio" name="radioButtonName" value="radioButtonValue1"/>
                  <div className={classes.p15}>Фильтр 2</div>
                </label>
              </div>
            </div>
          </div>

          {
            values.error && (<p>
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </p>)
          }
        </div>
        <div>
          <div onClick={clickSubmit} className={classes.Button2}>Применить</div>
        </div>
      </div>
    )
}
/*
<Typography variant="subtitle1" className={classes.subheading}>
  Seller Account
</Typography>
<FormControlLabel
  control={
    <Switch classes={{
                      checked: classes.checked,
                      bar: classes.bar,
                    }}
            checked={values.seller}
            onChange={handleCheck}
    />}
  label={values.seller? 'Active' : 'Inactive'}
/>
<br/>
*/
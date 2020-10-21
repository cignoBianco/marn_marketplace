import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Search from './../assets/images/icons/Search.png'
import Location from './../assets/images/icons/Location.png'
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link"
import Button from '@material-ui/core/Button'
import NumberFormat from 'react-number-format';

const useStyles = makeStyles(theme => ({
    container: {
        width: 350,
        maxHeight: 600,
        background: '#fff',
        padding: '41px 34px',
        /*display: 'grid',
        gridGap: 30,*/
        position: 'fixed',
        boxShadow: '0px 8px 16px rgba(52, 60, 68, 0.3)',
        borderRadius: 20,
        /*gridTemplateRows: 'min-content',*/
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        top: 0,
        bottom: 0,
        marginTop: 'auto',
        marginBottom: 'auto',
        zIndex: 100,
        /*textAlign: 'center',*/
        alignContent: 'center',
        height: 'min-content'
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
        marginBottom: 35,
        textAlign: 'center'
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
      },
      inputLight: {
        border: '1px solid #E6E6EB',
        boxSizing: 'border-box',
        borderRadius: 8,
        height: 40,
        width: '100%',
        marginBottom: 20,
        padding: '1em 3em'
      },
      p22: {
        alignSelf: 'center',
        fontSize: 24
      },
}))

export default function Modal1Btn({hide}) {
    const classes = useStyles()

    const [values, setValues] = useState({
      error: '',
      redirectToReferrer: false,
      formattedPhone: '',
      validated: false,
      error: '',
      codeSent: false
    })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    
      const handleChangePhone = (name, value) => {
        values.phone = value
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

    return (
        <div className={classes.container}>
        <CloseIcon className={classes.cross} onClick={(e) => hide()}/>      
        <h3 className={classes.label}>Подтвердите номер телефона</h3>
               
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
            <Button className={classes.Button} style={{padding:'7px 40px', fontSize: 14}} >Подтвердить номер телефона</Button>
        </div>
    )
}
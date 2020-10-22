import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from './../assets/images/icons/Avatar.png'
import auth from './../auth/auth-helper'
import {read} from './api-user.js'
import {Redirect, Link} from 'react-router-dom'
import MyOrders from './../order/MyOrders'
import {listByBidder} from './../auction/api-auction.js'
import EditProfile from './EditProfile'

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 60,
    height: 60,
    backgroundImage: `url(${Avatar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '50%',
  },
  container: {
    marginLeft: '6em',
    marginRight: '6em',
    marginTop: 20,
    marginBottom: '4em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  profileCard: {
    width: 300,
    height: 225,
    boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
    borderRadius: 20
  },
  profileCardHeader: {
    height: 80,
    display: 'grid',
    padding: 20,
    paddingBottom: 0,
    gridTemplateColumns: '60px 1fr',
    gridGap: 10
  },
  bold15: {
    fontSize: 15,
    fontWeight: 700
  },
  p15: {
    fontSize: 15,
    color: "#797979",
    fontWeight: 300
  },
  profileCardMenu: {
    width: 300,
    borderTop: '1px solid rgb(44 39 56 / 0.2)',
    borderBottom: '1px solid rgb(44 39 56 / 0.2)',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    '& div': {
      padding: '17px 20px',
    }
  },
  flexAroung: {
    height: 52,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 5
  },
  mainBloack: {
    maxWidth: 840,
    minWidth: 600,
    background: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1)',
    borderRadius: 20,
    padding: '20px 40px'
  }
}))

export default function Profile({ match }) {
  const classes = useStyles()
  const [user, setUser] = useState({})
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const jwt = auth.isAuthenticated()

  const tabItems = [
    {
      id: 1,
      content: 
        <EditProfile match={ {
          params: {
            userId: user._id
          }
          }
        } />,
    },
    {
      id: 2,
      content: <MyOrders/>,
    },
    {
      id: 3,
      content: 
        <p>
          {"Joined: " + (
            new Date(user.created)).toDateString()
          }
        </p>
    }
  ];

  const [tabActive, setTabActive] = useState(1)

  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listByBidder({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data.error) {
        setRedirectToSignin(true)
      } else {
        setAuctions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  const removeAuction = (auction) => {
    const updatedAuctions = [...auctions]
    const index = updatedAuctions.indexOf(auction)
    updatedAuctions.splice(index, 1)
    setAuctions(updatedAuctions)
  }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true)
      } else {
        setUser(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.userId])

  if (redirectToSignin) {
    return <Redirect to='/signin'/>
  }
  return (
      <div>
        <div style={{height: 50, marginLeft: '6em'}}>
          <div style={{width: 123, height: 17, fontSize: 14, marginTop: 50}}>Главная / <span className={classes.bold}>Поиск</span></div>
        </div>
        <div className={classes.container}>
          <div className={classes.profileCard}>
            <div className={classes.profileCardHeader}>
              <div className={classes.avatar}></div>
              <div className={classes.flexAroung}>
                <h2 className={classes.bold15}>{user.name} </h2>
                <h4 className={classes.p15}>{user.email}</h4>
              </div>
            </div>
            <div className={classes.profileCardMenu}>
              <div onClick={() => setTabActive(1)} className={classes.bold15} style={{borderBottom: '1px solid rgb(44 39 56 / 0.2)'}}>
                Настройка учетной записи
              </div>
              <div onClick={() => setTabActive(2)} className={classes.p15}>
                Последние заказы
              </div>
            </div>
          </div>
          <div className={classes.mainBloack}>
            {
              auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
              (<>
                {tabItems.map(({ id, content }) => {
                  return tabActive === id ? content : ''
                })}
              </>)
              }
          </div>
          
        </div>
        
      </div>
    )
}
/*<DeleteUser userId={user._id}/>*/
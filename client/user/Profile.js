import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from './../assets/images/icons/Avatar.png'
import auth from './../auth/auth-helper'
import {read} from './api-user.js'
import {Redirect, Link} from 'react-router-dom'
import MyOrders from './../order/MyOrders'
//import {listByBidder} from './../auction/api-auction.js'

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 60,
    height: 60,
    backgroundImage: `url(${Avatar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '50%',
  }
}))

export default function Profile({ match }) {
  const classes = useStyles()
  const [user, setUser] = useState({})
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const jwt = auth.isAuthenticated()

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
        <h6>
          Profile
        </h6>
        <div>
          <div>
            <div className={classes.avatar}>
              
            </div>

            <h2>{user.name} </h2>
            <h4>{user.email}</h4>
            {
             auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
             (<div>
               <Link to={"/user/edit/" + user._id}>
                 <div>
                   Редактировать
                 </div>
               </Link>
               
             </div>)
            }
          </div>
          <br/>
          <div>
            <p>
            {"Joined: " + (
              new Date(user.created)).toDateString()
              }
              </p>
          </div>
        </div>
        <MyOrders/>
      </div>
    )
}
/*<DeleteUser userId={user._id}/>*/
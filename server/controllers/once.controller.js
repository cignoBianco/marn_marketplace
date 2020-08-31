import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import request from 'request'
import config from './../../config/config'
import stripe from 'stripe'
import auth from './../helpers/onceConfig'

const axios = require('axios')

const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const initialize = (req, res) => {
    //try {


        const URL = 'http://1cdev.my70.ru/dostavka_uni_final/hs/sitebackend_v2/getsession';
        return URL;
        /*axios.post(
            'http://1cdev.my70.ru/dostavka_uni_final/hs/sitebackend_v2/getsession', 
            {
                headers: {
                    "Authorization": auth.auth
                },
                body: {
                    body: "regkje"
                }
            },
            {
                headers: {
                    "Authorization": auth.auth
                },
            }
        )
        .then(response => response.data)
        .catch(error => alert(error));
*/
/*
axios.post(URL, {
    headers: {
        "Authorization": {
            "username": "web",
            "password": "web"
        },
        'content-type': 'application/json',
    },
    body: {
        "hellow": "orld"
    },
});*/
/*
        axios(URL, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              "Authorization": auth.auth
            },
            params: {
             code: 'your_string'
            },
          })*/
   // } 
   /*catch (err) {
        return res.status(400).json({
            error: err
        })
    }*/
}

export default {
    initialize,
    create,
    read,
    list
}

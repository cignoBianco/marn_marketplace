import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import request from 'request'
import config from './../../config/config'
import stripe from 'stripe'
import auth from './../helpers/onceConfig'



const initialize = async (req, res, next) => {
    //try {
const axios = require('axios')

    const URL = 'http://1cdev.my70.ru/dostavka_uni_final/hs/sitebackend_v2/getsession';
    async (req, res) => {
        let users = await axios.post(URL, '', {
            auth: {
                username: "web",
                password: "web"
            }
        })
        .then(function(response) {
            console.log(response.data);
            res.json(response.data)
            res.status(200).send({ 'data': response.data })
        }).catch((err) => { return err });

    }
}

const getit = async (req, res, next) => {
    res.json(req.data);
    console.log(req.data);
}

export default {
    initialize,
    getit
}

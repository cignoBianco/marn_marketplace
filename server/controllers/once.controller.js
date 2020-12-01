import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import request from 'request'
import config from './../../config/config'
import stripe from 'stripe'
import auth from './../helpers/onceConfig'
import productCtrl from '../controllers/product.controller'
import categoriesCtrl from '../controllers/categories.controller'
import shopCtrl from '../controllers/shop.controller'
import cityController from './city.controller'
import cityCtrl from '../controllers/city.controller'

const axios = require('axios')

const initialize = async (req, res, next) => {
    //try {
        console.log("hey");
        //return res.status(200).json({"data": "he"});
    
    const URL = 'http://1cdev.my70.ru/dostavka_uni_final/hs/sitebackend_v2/getsession';
    const getSession = async (request, result) => {
        let users = await axios.post(URL, '', {
            auth: {
                username: "web",
                password: "web"
            }
        })
        .then(function(response) {
            let responseData = response.data;
            console.log(responseData);
            //res.json(response.data)
            return res.status(200).json({ "data": responseData })
        }).catch((err) => { return err });
    }

    await getSession();
}

const getit = async (req, res, next) => {
    // res.json(req.data);
    let reqBody = req.body;
     console.log(reqBody);

     let date = new Date();

    const fs = require('fs');

    fs.writeFile("server/files/addresses", JSON.stringify(reqBody) + "\n", (err) => {
        if (err) {
            console.log(err)
            return res.json({"status": "success"})
        }
        console.log("Addresses was saved!")
        return res.json({"status": "success"})
    })

}

const getCities = async (req, res, next) => {
    // res.json(req.data);
    let reqBody = req.body;
     console.log(reqBody);

     let date = new Date();

    const fs = require('fs');

    await fs.writeFile("server/files/cities",  JSON.stringify(reqBody) + "\n", (err) => {
        if (err) {
            console.log(err)
            return res.json({"status": "success"})
        }
        console.log("Cities was saved!")
        return res.json({"status": "success"})
    })

    cityController.create()

}

const getAddresses = async ( req, res, next) => {
    let reqBody = req.body;
     console.log(reqBody);

    let date = new Date();

    const fs = require('fs');

    fs.writeFile("server/files/addresses", JSON.stringify(reqBody) + "\n", (err) => {
        if (err) {
            console.log(err)
            return res.json({"status": "success"})
        }
        console.log("The file was saved!")
        return res.json({"status": "success"})
    })

    cityController.createAddress()
}

const addresses = async (req, res, next) => {
    //
}

const getMenu = async ( req, res, next) => {
    let reqBody = req.body;
     console.log(reqBody);

    let date = new Date();

    const fs = require('fs');

    fs.appendFile("server/files/menues", JSON.stringify(reqBody) + "\n", (err) => {
        if (err) {
            console.log(err)
            return res.json({"status": "success"})
        }
        console.log("The menu was saved!")
        return res.json({"status": "success"})
    })
}

const getCategories = async ( req, res, next) => {
    let reqBody = req.body;
     console.log(reqBody);

    let date = new Date();

    const fs = require('fs');

    fs.writeFile("server/files/categories", JSON.stringify(reqBody) + "\n", (err) => {
        if (err) {
            console.log(err)
            return res.json({"status": "success"})
        }
        console.log("Categories was saved!")
        return res.json({"status": "success"})
    })

    categoriesCtrl.createCategories()
}

const getOrganizations = async (req, res, nexxt) => {
    let reqBody = req.body;
     console.log(reqBody);

    let date = new Date();

    const fs = require('fs');

    fs.writeFile("server/files/organizations", JSON.stringify(reqBody) + "\n", (err) => {
        if (err) {
            console.log(err)
            return res.json({"status": "success"})
        }
        console.log("Organizations was saved!")
        return res.json({"status": "success"})
    })

    shopCtrl.create1c()
}

export default {
    initialize,
    getit,
    getAddresses,
    getMenu,
    getCategories,
    getCities,
    getOrganizations
}

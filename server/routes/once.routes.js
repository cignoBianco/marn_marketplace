import express from 'express'
import onceCtrl from '../controllers/once.controller'
import cityCtrl from '../controllers/city.controller'
/*import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'*/

const router = express.Router()
const axios = require('axios')
const URL = 'http://1cdev.my70.ru/dostavka_uni_final/hs/sitebackend_v2/getsession';

router.route('/api/getSession')
  .get(onceCtrl.initialize)
  .post(onceCtrl.getit);

router.route('/api/ingredients')
    .post(onceCtrl.getit)

router.route('/api/cities')
    .post(onceCtrl.getCities)

router.route('/api/organisations')
    .post(onceCtrl.getOrganizations)
    
router.route('/api/addresses')
    .post(onceCtrl.getAddresses)

/*router.route('/addresses')
  .get(onceCtrl.addresses)*/

router.route('/api/send/addresses')
  .get(cityCtrl.createAddress)

router.route('/api/addresses')
  .get(cityCtrl.listAddresses)

router.route('/api/cities')
  .get(cityCtrl.create)

router.route('/api/show/cities')
  .get(cityCtrl.list)

router.route('/api/cities/by/:cityName')
  .get(cityCtrl.cityByName)
  .post(cityCtrl.cityByName)
//.post(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.isSeller, shopCtrl.create)

router.param('cityName', cityCtrl.cityByName)

router.route('/api/products')
    .post(onceCtrl.getMenu)

router.route('/api/categories')
    .post(onceCtrl.getCategories)

/*router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
router.route('/api/stripe_auth/:userId')
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.stripe_auth, userCtrl.update)

router.param('userId', userCtrl.userByID)*/

export default router

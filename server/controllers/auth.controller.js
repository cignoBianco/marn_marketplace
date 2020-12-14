import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'

const signin = async (req, res) => {
  try {
    let user = await User.findOne({
        "email": req.body.email
      })

      if (!user)
        return res.status('401').json({
          error: "User not found"
        })

      if (!user.authenticate(req.body.password)) {
        return res.status('401').send({
          error: "Email and password don't match."
        })
      }

      const token = jwt.sign({
        _id: user._id
      }, config.jwtSecret)

      res.cookie("t", token, {
        expire: new Date() + 9999
      })

      return res.json({
        token,
        user: {_id: user._id, name: user.name, email: user.email, seller: user.seller}
      })
  } catch (err) {
    return res.status('401').json({
      error: "Could not sign in"
    })
  }
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

const smsGateway = (req, res, next) => {
  let baseURL = 'http://gps.entrega.su/smsproxy/sendsms.php';
  //  let sender_pool=array('79234321100','79234320535')
}

function file_get_contents(filename) {
  fetch(filename).then((resp) => resp.text()).then(function(data) {
      return data;
  });
}

const sendSms = (req, res, next) => {
  const baseURL = 'http://gps.entrega.su/smsproxy/sendsms.php'
  const sender_pool = ['79234321100','79234320535']
  
  let ip = require('ip');
  let ipAddress = ip.address() // my ip address
  /**
   * ckf
   * 
   * 
   */
  const axios = require('axios')

  const allow = ['79234212101','79528089476']
  console.log(req)
  const tempPhone = '9528089476'

  const phone = ''+'7'+tempPhone//req.body.phone
  
  let retry = 1
  let codeNumber = Math.floor(1000 + Math.random() * 9000)
  /**send to database пе ершы укщка
   * лпл dmdm fut djjd 
  */

  let resultFinish = (data, err) => {
    console.log(data)
    let result = axios
  }

  const sms_gateway = 'http://smsgw.my70.ru/sendsms.php';
  let text = "Ваш код подтверждения: " + codeNumber + ".";
  //text = encodeURIComponent(text)

  let sms_url = sms_gateway + '?from=tele2&number=' + phone + '&text=' + text
    + '&retry=' + retry + '&detected_ip_from=' + ipAddress +
    '&sitename=' + encodeURI("http://marketplace.entrega.su/")
  sms_url = encodeURI(sms_url)

  const fs = require('fs');
  //let response = fs.readFileSync(new URL(sms_url))//.toString();
  // cd jjcj ecjej ekdek cjejfn ejedj edjnden

  let response = axios({
    url: sms_url,
    method: 'get',
    data: {
      foo: 'bar'
    }
  })
  console.log("resssp", response)
  let smsId = {}
  smsId['url'] = sms_url;
  smsId['response'] = response;
  let r = res.status('200').json({
    message: "signed out"
  })
  console.log('rr', r)
  return r
 // return response()->json($smsId, Response::HTTP_OK);
/**
 * Rnfn jsjjl
 */
}

const checkSms = (req, res, next) => {
 let userCode = req.params.user
}

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
  smsGateway,
  sendSms,
  checkSms
}

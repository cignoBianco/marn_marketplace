
const create = async (user) => {
  try {
      let response = await fetch('/api/users/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const list = async (signal) => {
  try {
    let response = await fetch('/api/users/', {
      method: 'GET',
      signal: signal,
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

//http://1cdev.my70.ru/dostavka_uni_final/hs/sitebackend_v2/
// !!! authData
const readFromServer = async (params, authData, signal) => {
  try {
    let response = await fetch('http://1cdev.my70.ru/dostavka_uni_final/hs/sitebackend_v2/' + params.functionName, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authData.t // t ???
      }
    });
    return await response.json();
  } catch (err) {
    console.log(arr);
  }
}

const read = async (params, credentials, signal) => {
  try {
    let response = await fetch('/api/users/' + params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const update = async (params, credentials, user) => {
  try {
    let response = await fetch('/api/users/' + params.userId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const remove = async (params, credentials) => {
  try {
    let response = await fetch('/api/users/' + params.userId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const stripeUpdate = async (params, credentials, auth_code, signal) => {
  try {
    let response = await fetch ('/api/stripe_auth/'+params.userId, {
      method: 'PUT',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify({stripe: auth_code})
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export {
  create,
  list,
  read,
  update,
  remove,
  stripeUpdate
}

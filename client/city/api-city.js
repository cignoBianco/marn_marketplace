const list = async (signal) => {
  try {
    let response = await fetch('/api/show/cities', {
      method: 'GET',
      signal: signal
    })
    return response.json()
  }catch(err) {
    console.log(err)
  }
}

const city = async (signal, cityName) => {
  try {
    let response = await fetch(`/api/cities/by/{$cityName}`, {
      method: 'GET',
      signal: signal,
      cityName: cityName
    })
    return response.json()
  }catch(err) {
    console.log(err)
  }
}

export {
  list, city
}

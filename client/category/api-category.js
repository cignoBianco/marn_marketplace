const listCategories = async (signal, categoryById) => {
  try {
    let response = await fetch(`/api/categories/${categoryById}`, {
      method: 'POST',
      signal: signal,
      id: categoryById
    })
    return response.json()
  }catch(err) {
    console.log(err)
  }
}
//createCategories,
//categoryById,
//listCategories
const city = async (signal, cityName) => {
  try {
    let response = await fetch(`/api/cities/by/${cityName}`, {
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
  listCategories, city
}

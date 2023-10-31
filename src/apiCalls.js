const handleError = (response) => {
  if(!response.ok) {
    throw new Error(`Error: ${response.status} -- Please refresh the page or go back home.`)
  }
  return response.json()
};

const getArticles = async(url) => {
  let response = await fetch(url, {
    method: 'GET'
  })
  let data = await handleError(response)
  console.log('sucessful response: ', data.articles)
  return data
};

export default getArticles;
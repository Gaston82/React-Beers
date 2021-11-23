export async function fetchBeers(){
  let url = `https://api.punkapi.com/v2/beers`
  const response= await fetch(url);
  const data = await response.json()
  console.log(data)
  return data;  
}
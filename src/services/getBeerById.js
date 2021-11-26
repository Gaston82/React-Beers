export async function getBeerById(id) {
  console.log(id);
  let url = `https://api.punkapi.com/v2/beers/${id}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data[0];
}

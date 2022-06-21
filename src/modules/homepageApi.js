export async function getHomepageData() {
  const requestURL = 'https://api.opendota.com/api/proPlayers'
  const response = await fetch(requestURL, {
    method: 'GET',
  });
  const data = await response.json();
  // console.log(data);

  return data;
}

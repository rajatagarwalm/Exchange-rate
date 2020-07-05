export function FetchProfile() {
  let apiUrl = "https://api.exchangeratesapi.io/latest?base=GBP";
  // return promise
  return fetch(apiUrl).then(res => res.json());
}

//API Info

// Append to end of apiURL to limit returns - '& symbols=GBP, USD, CAD, JPY'

// http://data.fixer.io/api/latest?access_key=ff94c304d79ade79928ce736041bfd70

// Alternative - 'https://api.exchangeratesapi.io/latest?base=GBP' - rates are from European cantral bank
// website - https://exchangeratesapi.io/

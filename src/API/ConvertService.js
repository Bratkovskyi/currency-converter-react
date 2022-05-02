const API_KEY = "Dw1nzGut3bFtndAHOUklwW1vRQ8bnsFy";
export const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest";
export const myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

export const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};


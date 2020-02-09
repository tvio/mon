import axios from "axios";
import fs from "fs";
import https from "https";
import path from "path";
// import stringify from "json-stringify-safe";
// import uuidv4 from "uuid";

const instance = axios.create({
  baseURL: "URLHOPL_T",
  httpsAgent: new https.Agent({
    ca: fs.readFileSync(path.join(__dirname,'./utils/clientLEKTEST.cer')),
    cert: fs.readFileSync(path.join(__dirname,'./utils/clientLEKTEST.cer')),
    key: fs.readFileSync(path.join(__dirname,'./utils/privateLEKTEST.key')),
     // auth: 'user:password',
    rejectUnauthorized: false
  })
});
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
const json = { "bloody":"boody"};
// const json = stringify(hoplBody);

instance
  .post("/status", json, config)
  .then(function consolelog(res) {
    console.log("http code " + res.status);
    console.log(res.data);
    //console.log(res.config);
    //console.log (res.headers)
  })

  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //console.log(error.request);
      console.log(error.response.data);
      console.log("http status " + error.response.status);
      //  console.log(error.request);                 //console.log(error.response.headers);
      //console.log('detail',stringify(error.response.data));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      //console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      //console.log('Error', error.message);
    }

    //console.log(error.config);
  });


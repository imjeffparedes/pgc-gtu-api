"use strict";

const GTU = require("../lib");

var client = new GTU({
    publicKey: process.env.publicKey 
  , privateKey: process.env.privateKey
  , dealerCode: process.env.dealerCode
    // This is optional
  , host: process.env.HOST 
  , timeout: process.env.TIMEOUT
});

var requestId = parseInt(Math.random() * (1000000 - 1000) + 1000);

client.balanceInquiry(requestId, (err, data) => {
    console.log(err || data);
    // =>
    // {
    //     "status": "COMPLETE",
    //     "message": "SUCCESS",
    //     "balance": 0,
    // }
});

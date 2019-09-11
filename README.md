<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# pgc-gtu-api

 [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/imjeffparedes/ama) [![Version](https://img.shields.io/npm/v/pgc-gtu-api.svg)](https://www.npmjs.com/package/pgc-gtu-api) [![Downloads](https://img.shields.io/npm/dt/pgc-gtu-api.svg)](https://www.npmjs.com/package/pgc-gtu-api) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/jeffparedes?utm_source=github&utm_medium=button&utm_term=imjeffparedes&utm_campaign=github)


> PLDT Global Top Up API wrapper for Node.js



## :cloud: Installation

```sh
# Using npm
npm install --save pgc-gtu-api
```


## :clipboard: Example



```js
"use strict";

const GTU = require("../lib");

var client = new GTU({
    publicKey: process.env.publicKey
  , privateKey: process.env.privateKey
  , dealerCode: process.env.dealerCode
    // This is optional
  , host: process.env.HOST || "https://gtu.pldtglobal.com"
  , timeout: 60*1000
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

```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/jeffparedes). :rocket:


## :memo: Documentation

You can see below the API reference of this module.

### `GTU(options)`
Creates the instance of the `GTU` class.

#### Params
 - **String** `publicKey`: GTU API wallet public key credentials (mandatory).
 - **String** `privateKey` : GTU API wallet private key credentials (mandatory).
 - **String** `dealerCode` : GTU API wallet dealerCode credentials (mandatory).
 - **String** `host` : GTU api host (Optional default: `https://gtu.pldtglobal.com/`).
 - **Integer** `timeout` : integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.  (Optional default: 60000).


### `topup(requestId, productCode, targetNumber, cb)`
Send topup request to api

#### Params

 - **String** `requestId` : Unique alphanumeric id per request. To be generated by the client. (mandatory)
 - **String**  `productCode` Unique code per product that you may transact with. (mandatory)
 - **String**  `targetNumber` Target MSISDN, landline, or account number depending on product code. (mandatory)
 - **Function**  `cb` The callback function.
    

### `balanceInquiry(requestId, cb)`
Get wallet or account balance

#### Params

 - **String** `requestId` : Unique alphanumeric id per request. To be generated by the client. (mandatory)
 - **Function**  `cb` The callback function.


### `getTopUp(requestId, cb)`
Get topup status

#### Params

 - **String** `requestId` : Unique alphanumeric id of request. Generated by the client during topup request. (mandatory)
 - **Function**  `cb` The callback function.


### `getProducts(requestId, cb)`
Get wallet or account balance

#### Params

 - **String** `requestId` : Unique alphanumeric id per request. To be generated by the client. (mandatory)
 - **Function**  `cb` The callback function.


### `messageCode(message)`
Get detailed description of message code.

#### Params

 - **String** `message` : Message code from reply of request (mandatory)


### `statusCode(status)`
Get detailed description of status code.

#### Params

 - **String** `status` : Status code from reply of request (mandatory)
    


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I do web services and open-source my used projects as much as I can. I will try to reply to everyone needing help using these projects. It consumes a lot of time and hardwork. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `344FWmvxDt6FFFoYoFjftiT3gGus68AqNw`

    ![](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=344FWmvxDt6FFFoYoFjftiT3gGus68AqNw)


Thank you! :heart:



## :scroll: License

[MIT][license]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/jeffparedes
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VZZNWZM394KBC

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
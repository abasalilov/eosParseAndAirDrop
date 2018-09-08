Eos = require("eosjs");

// Default configuration
const config = {
  chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
  httpEndpoint: "https://eos.greymass.com:443",
  keyProvider: [
    "5JGnbyEF95mjMYC91qHtMQxCnqeagG8u4uWetQEQzcRiFSu7mV3",
    "5JCgJF7kd5Lj18hoRBMqJKXEAFUyKjANajbkfzksqgXK1szJ91S"
  ],
  expireInSeconds: 60,
  broadcast: true,
  verbose: true, // API activity
  sign: true
};

module.exports = Eos(config);

const eos = require("./configReady");
const SnapshotTools = require("./services/SnapshotTools");
const snapshot = SnapshotTools.getCSV("snapshot.csv");

const tokenDetails = (fromName, to, quantity, memo) => {
  const auth = { authorization: [`${fromName}@active`] };

  return {
    account_name: fromName,
    account_name: to,
    asset: { quantity: quantity, name: "SHAPE" },
    memo,
    auth
  };
};

const two = eos.transfer(
  tokenDetails("gmaslaunches", "abasalilov22", "10.000", "transfer2")
);
console.log("tokenDetails", tokenDetails);
const dropTokens = async (accountBalances, config) => {
  const contract = eos.contract("gmaslaunches");
  const auth = { authorization: [`${config.issuer}@active`] };
  // issue last
  //   const one = await contract
  //     .transfer(
  //       accountBalances[0].account,
  //       accountBalances[0].amount,
  //       symbol,
  //       memo
  //     )
  //     .then(er => console.log("er", er))
  //     .catch(err => console.log("err", err));
};

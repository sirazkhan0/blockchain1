const helloworld = artifacts.require("helloworld");

module.exports = function (deployer) {
  deployer.deploy(helloworld);
};

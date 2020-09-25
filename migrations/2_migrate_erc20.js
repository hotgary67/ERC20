const ERC20 = artifacts.require("ERC20");

const _name = "ErEr";
const _symbol = "ER";

const _amount = "100"

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ERC20, _name, _symbol).then(function(instance) {
    instance.mint(accounts[0], _amount)

   });

};

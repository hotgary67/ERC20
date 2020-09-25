const ERC20 = artifacts.require("ERC20");

const _name = "ErEr";
const _symbol = "ER";
//const _address = "0x80F53D4fCc0E722CBCFd9c6E465661Da73f7fFC3";

const _amount = "100"

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ERC20, _name, _symbol).then(function(instance) {
    instance.mint(accounts[0], _amount)

   });

   //}).catch(function(err){
    //  console.log("error:" +err);

//module.exports = function(deployer, network, accounts) {
  //deployer.deploy(ERC20, _total_supply, accounts[0]);
  //  deployer.deploy(ERC20, _name, _symbol);
 // }); 


};

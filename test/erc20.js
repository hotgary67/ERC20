const ERC20 = artifacts.require('ERC20');



contract('ERC20', function(accounts) {
  it("Should check if token balance is 100 and assert True if correct ", function() {
    var token;
    return ERC20.deployed().then(function(instance){
    token = instance;
    return token.totalSupply.call();
    }).then(function(result){
     assert.equal(result.toNumber(), 100, 'total supply is not 100');
    })
  });
});

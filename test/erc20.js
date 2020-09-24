const ERC20 = artifacts.require('ERC20');

contract ('ERC20', () => {
    it('Should check if balance is 100 or not', async () => {
        const erc20 = await ERC20.deployed();
        await erc20.balanceOf(accounts[0]);

        const balance = web3.eth.getBalance(accounts[0]) 
         
        console.log(balance)
      
      //  const result = await 

       // const balance = web3.eth.getBalance(accounts[0]) 
       // const balanceHunderd = await erc20.balanceOf(balance)   

       // console.log(balanceHunderd );
     //   assert(balanceHunderd  == '100');
    });

});



const Token = artifacts.require("Token");
const Parent = artifacts.require("Parent");
  
contract("Parent", function(accounts) {
  beforeEach(async function () {
      this.token = await Token.new({from: accounts[0]});

      const address = this.token.address;

      console.log("Token contract address ", address);

      this.parent = await Parent.new(address, {from: accounts[0]});
  });

  it("should transfer from child contract", async function () {
    const actual = await this.parent.transferERC20(accounts[1], 1);
  });
});
const { wait } = require("@testing-library/user-event/dist/utils")
const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
let dappazon
let deployer , buyer


beforeEach(async ()=>{ 
// setup accounts

[deployer , buyer] = await ethers.getSigners()



  // Deploy contract

  const Dappazon = await ethers.getContractFactory("Dappazon")
dappazon = await Dappazon.deploy()



})

describe("Deployment",()=>{

  it('sets the owner', async () => {
  
    expect(await dappazon.owner()).to.equal(deployer.address)
  })
})
  describe("Listing", () => {


      beforeEach(async () => {

      transaction=  await dappazon.connect(deployer).list(
1,
"Shoes",
"Clothing",
"Image",
1,
4,
5
  )
await transaction.wait()
      })
        
        it('Returns item attribute', async () => {

const item = await dappazon.items(1)

expect(item.id).to.equal(1)





    })






  })


})

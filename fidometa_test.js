const { ethers, waffle } = require("hardhat");

let owner, account1, account2, account3, account4, account5, account6, account7, account8;
let Token, token, totalSupply;

describe("Fidometa Test", function() {
    it("Set accounts", async function () {
        [owner, account1, account2, account3, account4, account5, account6, account7, account8] = await ethers.getSigners();
    })

    it("Deploy Token", async function () {
        Token = await ethers.getContractFactory("Fidometa");
        token = await Token.deploy();
        token.deployed();
        console.log("Fidometa deployed to:", token.address);
    })

    it("Total Supply", async function () {
        totalSupply = await token.totalSupply();
        console.log("Total Supply:", totalSupply);
    })

    it("Set charges", async function () {
        await token.setCharges(10, 10, 10, 10, 10);
    })

    it("Set Service Wallet", async function () {
        await token.setServiceWallet(account5.address, account6.address, account7.address, account8.address);
        console.log("Ecosys Wallet:", account5.address);
        console.log("Surcharge Wallet1:", account6.address);
        console.log("Surcharge Wallet2:", account7.address);
        console.log("Surcharge Wallet3:", account8.address);
    })

    it("Exclude from charges", async function () {
        await token.excludeFromCharges(account7.address, false, false, false, false, false);
        console.log("Account 7 excluded from charge.")
    })

    it("Exclude from reward", async function () {
        await token.excludeFromReward(account1.address);
        console.log("Account1 excluded from reward.");
    })

    it("Token Transfer (from owner)", async function () {
        await token.transfer(account1.address, ethers.utils.parseUnits("10000000", 9));
        await token.transfer(account2.address, ethers.utils.parseUnits("10000000", 9));
        await token.transfer(account3.address, ethers.utils.parseUnits("10000000", 9));
        await token.transfer(account4.address, ethers.utils.parseUnits("10000000", 9));

        console.log("Token transfered 10000000 per account from account1 to account4");
    })

    it("Token Balance (after transfer from owner)", async function () {
        const account1Balance = await token.balanceOf(account1.address);
        const account2Balance = await token.balanceOf(account2.address);
        const account3Balance = await token.balanceOf(account3.address);
        const account4Balance = await token.balanceOf(account4.address);

        console.log("Account1 Balance:", account1Balance);
        console.log("Account2 Balance:", account2Balance);
        console.log("Account3 Balance:", account3Balance);
        console.log("Account4 Balance:", account4Balance);
    })

    it("Token Transfer (from normal account)", async function () {
        await token.connect(account1).transfer(account2.address, ethers.utils.parseUnits("5000000", 9));
        await token.connect(account2).transfer(account3.address, ethers.utils.parseUnits("5000000", 9));
        await token.connect(account3).transfer(account4.address, ethers.utils.parseUnits("5000000", 9));
        await token.connect(account4).transfer(account1.address, ethers.utils.parseUnits("5000000", 9));

        console.log("Token transfered 5000000 between each account from account1 to account4");
    })

    it("approve() for _TransferFrom()_", async function() {
        await token.connect(account1).approve(account2.address, ethers.utils.parseUnits("1000000", 9));
        await token.connect(account2).approve(account3.address, ethers.utils.parseUnits("1000000", 9));
        await token.connect(account3).approve(account4.address, ethers.utils.parseUnits("1000000", 9));
        await token.connect(account4).approve(account1.address, ethers.utils.parseUnits("1000000", 9));
    })

    it("increase allowance", async function () {
        await token.connect(account1).increaseAllowance(account2.address, ethers.utils.parseUnits("1000000", 9));
        await token.connect(account2).increaseAllowance(account3.address, ethers.utils.parseUnits("1000000", 9));
    })

    it("decrease allowance", async function () {
        await token.connect(account3).increaseAllowance(account4.address, ethers.utils.parseUnits("500000", 9));
        await token.connect(account4).increaseAllowance(account1.address, ethers.utils.parseUnits("500000", 9));
    })

    it("_transferFrom_", async function () {
        await token.connect(account1).transferFrom(account4.address, account1.address, ethers.utils.parseUnits("500000", 9));
        await token.connect(account2).transferFrom(account1.address, account2.address, ethers.utils.parseUnits("2000000", 9));
        await token.connect(account3).transferFrom(account2.address, account3.address, ethers.utils.parseUnits("2000000", 9));
        await token.connect(account4).transferFrom(account3.address, account4.address, ethers.utils.parseUnits("500000", 9));
    })

    it("Token Balance (after transfer from normal account)", async function () {
        const account1Balance = await token.balanceOf(account1.address);
        const account2Balance = await token.balanceOf(account2.address);
        const account3Balance = await token.balanceOf(account3.address);
        const account4Balance = await token.balanceOf(account4.address);

        console.log("Account1 Balance:", account1Balance);
        console.log("Account2 Balance:", account2Balance);
        console.log("Account3 Balance:", account3Balance);
        console.log("Account4 Balance:", account4Balance);
    })

    it("Check Service Wallet Balance", async function () {
        const ecosysBalance = await token.balanceOf(account5.address);
        const surchargBalance1 = await token.balanceOf(account6.address);
        const surchargBalance2 = await token.balanceOf(account7.address);
        const surchargBalance3 = await token.balanceOf(account8.address);
        console.log("Ecosys Wallet Balance:", ecosysBalance);
        console.log("Surcharge Wallet1 Balance", surchargBalance1);
        console.log("Surcharge Wallet2 Balance", surchargBalance2);
        console.log("Surcharge Wallet3 Balance", surchargBalance3);
    })

    it("Transfer with lock", async function () {
        await token.transferWithLock(account7.address, ethers.utils.parseUnits("1000000", 9), ethers.utils.parseUnits("500000", 9));
        const lockTransferAmount = await token.balanceOf(account7.address);
        console.log("Locked transfer amount:", lockTransferAmount);
    })

    it("Unlock", async function () {
        try {
            await token.connect(account7).unlock(account7.address);
        } catch (e) {
            console.log("Unlock period is not opened.");
        }
        const lockTransferAmount = await token.balanceOf(account7.address);
        console.log("Unlocked amount:", lockTransferAmount);
    })

    it("Set max tx amount", async function () {
        const beforeSet = await token._maxTxAmount();
        console.log("Max tx amount before set:", beforeSet);
        await token.setMaxTxPercent(ethers.utils.parseUnits("10000000", 9));
        const afterSet = await token._maxTxAmount();
        console.log("Max tx amount before set:", afterSet)
    })
})

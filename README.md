# Smart_Contract
FIDOMETA (FMC) - Virtual Financial Platform on Metaverse

Special Terms:
1. community_charge - This is the percentage to be deducted from each transaction and reflected to all holders. deafult is 3%.
2. ecoSysFee  - Percentage to be deducted from each transaction. deafult is 1,5%
3. ecoSysWallet - A special wallet where some percentage (ecoSysFee) from each transaction is deposited.These tokens will be later shared in charity.
4. surcharge1 - it is set to 0.5% to be send to burn wallet after each transaction
5. surcharge2,surcharge3 - there are two addtional surcharge for later purpose. Initially is 0%.
6. surcharge_1_Wallet - this wallet is set for burn address
7. surcharge_2_Wallet,surcharge_3_Wallet - Three corresponding wallet for surcharge2 and surcharge3.
8. max_transaction_amount - This is the maximum amount of token transaction that a user can send.
9. setMaxTxPercent - Percentage of total supply a user allowed to send at once.

**Features:**

1. 5% total charge including communitycharge,ecosystemcharge,surcharge1 shall be deducted if sender is not excluded from the corresponding fees.
2. 3% community fee is deducted from each transacion and reflected to all holders for passive income.
3. 1.5% is deducted from each transaction is deposited to ecosystem wallet.
4. 0.5% is duducted and send to burn address
5. community_charge, ecoSysFee,ecoSysWallet,surcharge1,surcharge2,surcharge3,surcharge_1_Wallet,surcharge_2_Wallet,surcharge_3_Wallet can be set only by admin.
7. An address can be excluded from getting reflection/community distribution/reward by admin but can not be included back once excluded.
8. An address can be include/removed from communityCharge,ecoSysFee,surcharge1,surcharge2,surcharge3 deduction by admin.
9. Some amount of token can be transfer with lock by admin in any address for a given days. Locking/vesting works as below
10. Locked token will be locked for some initial period say 3 Months, After completion of initial period a user can unlock their token 20% each month.
11. All tokens along with locked and unlocked will can be shown in user wallet but only unlocked token will be able to withdraw.
12. A user can check how much amount is locked via bscscan explored web3
13. Token can be burn/mint by admin only but can not exceed the initial total supply.
14. MaxTxPercent can be set by admin, it will set max_transaction_amount of token a user can send at once. 


**Setup**
After deployment
1. Exclude owner wallet from Reward
2. 0x000000000000000000000000000000000000dead set as surcharge-1 wallet
3. set ecosystem wallet

# Unit Test Environment
HARDHAT


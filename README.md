# Smart_Contract
FIDOMETA (FMC) - Virtual Financial Platform on Metaverse

Special Terms:
1. community_charge - This is the percentage to be deducted from each transaction and reflected to all holders. deafult is 5%.
2. ecoSysFee  - Percentage to be deducted from each transaction. deafult is 1%
3. ecoSysWallet - A special wallet where some percentage (ecoSysFee) from each transaction is deposited.These tokens will be later shared in charity.
4. surcharge1,surcharge2,surcharge3 - there are three different surcharge for later purpose. Initially is 0%.
5. surcharge_1_Wallet,surcharge_2_Wallet,surcharge_3_Wallet - Three wallet to take surcharge.
6. max_transaction_amount - This is the maximum amount of token transaction that a user can send.
7. setMaxTxPercent - Percentage of total supply a user allowed to send at once.

Features:

1. 5% community fee is deducted from each transacion and reflected to all holders for passive income.
2. 1% is deducted from each transaction is deposited to ecosystem wallet.
3. community_charge, ecoSysFee,ecoSysWallet,surcharge1,surcharge2,surcharge3,surcharge_1_Wallet,surcharge_2_Wallet,surcharge_3_Wallet and bank wallet can be set by admin.
4. An Address can be freezed to send/receive token by admin.
5. An address can be include/removed from getting reflection/community distribution by admin.
6. An address can be include/removed from communityCharge,ecoSysFee,4. surcharge1,surcharge2,surcharge3 deduction by admin.
7. Some amount of token can be locked in any address for a given days. All tokens along with locked and unlocked will can be shown in user wallet but only unlocked token will be able to withdraw. This can be done by admin only.
8. Tokens in wallet can be locked and unlocked many times as per requirement by admin.
9. Locking time can be reduced or extend anytime by admin only.
10. Using 'release_lock' all locked token can be released by admin.
11. Using 'unlockToken' some amount of token can be unlocked by admin only.
12. A user can check how much amount is locked in their wallet and for how much time.
13. Token can be burn/mint by admin only.
14. MaxTxPercent can be set by admin, it will set max_transaction_amount of token a user can send at once. 

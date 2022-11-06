
Our vision is to unlock the power of APIs for DAOs.
Imagine if DAO proposal executions could be any arbitrary off-chain action, like shipping products from Amazon or changing a website’s front end. 
We focused on implementing Discord management for DAOs, particularly banning and kicking users for DAOs directly through proposal votes.
DAOs are limited to on-chain executions and trusting foundation and DAO managers to implement proposed changes.
We unlock the power of APIs to DAOs - allowing for trustless execution of any arbitrary off chain action.

Midpoint allows on chain votes to directly result in off-chain actions - allowing for trustless proposal execution.

When a proposal is passed, instead of trusting DAO managers to implement the proposed change, the change will be implemented by a smart contract call to an API.

In our precious 36 hours, we focused on 1 implementation: allowing DAOs to manage their Discord directly through DAO voting.

We based our governance contracts off of OpenZeppelin’s governance contracts and added calls to a smart contract (called DAOPoint) that allows for Github token authorized API calls. Specifically, in execute function, we added a call to the banUser function in DAOPoint that will ban a user when a vote is passed. We created an account on Midpoint and wrote a smart contract (DAOPoint) that allows for API calls from the smart contract itself.


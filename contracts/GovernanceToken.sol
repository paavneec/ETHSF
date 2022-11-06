// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20Votes {
  uint256 public s_maxSupply = 100;

  constructor() ERC20("GovernanceToken", "GT") ERC20Permit("GovernanceToken") {
    // Deployer address / Jon
    _mint(msg.sender, 97);
    // // Spencer
    // _mint(0x0231C4ea808409667BB5a5b3a283118181F7AA2A, s_maxSupply/5);
    // // River
    // _mint(0xefb8a94Eea87801de02ae41e0c943C3fEADAec42, s_maxSupply/5);
    // // Paav
    // _mint(0x564097Eb6daA523A8e7FaAA4831eB53C755bD8F5, s_maxSupply/5);
    // // Caleb
    // _mint(0x613a224fc63abeb1716f2bb5ffda05f20e2916e8, s_maxSupply/5);
  }

  // The functions below are overrides required by Solidity.

  function _afterTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override(ERC20Votes) {
    super._afterTokenTransfer(from, to, amount);
  }

  function _mint(address to, uint256 amount) internal override(ERC20Votes) {
    super._mint(to, amount);
  }

  function _burn(address account, uint256 amount) internal override(ERC20Votes) {
    super._burn(account, amount);
  }
}

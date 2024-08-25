/*
 * @Author: diana
 * @Date: 2023-05-23 16:50:41
 * @LastEditTime: 2023-06-05 12:52:45
 */
import React from 'react';
import {ethers}  from 'ethers';

import AMM from '../artifacts/contracts/transcation/CTAMM.sol/AMM.json'
// import Market from '../market.sol/Market.json';
import CTToken from '../artifacts/contracts/carbonToken.sol/CTToken.json';
import PUser from '../artifacts/contracts/dao/pUser.sol/PUserDao.json'
import Company from '../artifacts/contracts/dao/enterprise.sol/Enterprise.json';
import CarbonRecord from '../artifacts/contracts/carbonRecord.sol/carbonRecord.json';
import Market from '../artifacts/contracts/transcation/market.sol/Market.json';
import Weth from '../artifacts/contracts/weth.sol/WETH.json';
import Info from '../artifacts/contracts/info.sol/Info.json';
import IntenddantDao from '../artifacts/contracts/dao/intenddantDao.sol/IntendantDao.json';
import Or from '../artifacts/contracts/oracle.sol/oracle.json';

export const MyContext = React.createContext();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const address = window.ethereum.address;
const signer = provider.getSigner();

const contracts = [];

// 合约地址配置
const addresses = [
  // amm 0
  "0xc24733d943366E9F2a493d77897D1F317b6ee019",
  // ct 1
  "0x13AD97d297B4daB2656e0B1Ebb67C76a23397572",
  // puser 2
  "0x09909965787F039E5dff002FDA82E177e62a50C0",
  // company 3
  "0xdECe95de46522e20452BA7582f241ed0d276f578",
  // record 4
  "0x7a23B252050996484bE78Ad443f80E937904d806",
  // market 5
  "0x39Fc5A3f67fcF7e240d91e4BB4f0e7139fc1e4D1",
  // weth 6
  "0x27F234A78c8A10fF599dc9cB8c28C485Be45F662",
  // Info 7
  "0xDAaa843fd548b5002893f9FB1Ad2842F2B23d4C6",
  // IntenddantDao 8
  "0x602FD9a92f0E45418021144e32B2b34eAAF3DcD6",
  // oracle 9
  "0x51Fb3b1EC78Aa9BFC015FfAd139a7D633425274F",
]

// 0 
const amm = {
  address:addresses[0],
  abi:AMM.abi
}
const contractAMM = new ethers.Contract(amm.address, amm.abi, signer);
contracts.push(contractAMM)

// 1 
const ctToken = {
  address:addresses[1],
  abi:CTToken.abi
}
const contractCTToken = new ethers.Contract(ctToken.address, ctToken.abi, signer);
contracts.push(contractCTToken);

// 2
const pUser = {
  address:addresses[2],
  abi:PUser.abi,
}
const contractPUser = new ethers.Contract(pUser.address, pUser.abi, signer);
contracts.push(contractPUser);

// 3
const company = {
  address:addresses[3],
  abi:Company.abi
}
const contractCompany = new ethers.Contract(company.address, company.abi, signer);
contracts.push(contractCompany);

// 4
const carbonRecord = {
  address:addresses[4],
  abi:CarbonRecord.abi
}
const contractCarbonRecord = new ethers.Contract(carbonRecord.address, carbonRecord.abi,signer);
contracts.push(contractCarbonRecord);

// 5 market
const market = {
  address:addresses[5],
  abi:Market.abi
}
const contractMarket = new ethers.Contract(market.address, market.abi,signer);
contracts.push(contractMarket);

// 6
const weth = {
  address:addresses[6],
  abi:Weth.abi
}
const contractWeth = new ethers.Contract(weth.address, weth.abi,signer);
contracts.push(contractWeth);

// 7
const info = {
  address:addresses[7],
  abi:Info.abi
}
const contractInfo = new ethers.Contract(info.address, info.abi,signer);
contracts.push(contractInfo);

// 8
const intendant = {
  address:addresses[8],
  abi:IntenddantDao.abi
}
const contractIntendant = new ethers.Contract(intendant.address, intendant.abi,signer);
contracts.push(contractIntendant);
 
// 9
const or = {
  address:addresses[8],
  abi:Or.abi
}
const contractOr = new ethers.Contract(or.address, or.abi,signer);
contracts.push(contractOr);

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ provider, signer, contracts,address }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
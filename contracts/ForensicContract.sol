//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForensicContract {
struct CrimeDetails {
uint256 crime_id;
string exhibit_name;
string desc;
string timestamp;
string ipfsHash;
}
    
    CrimeDetails[] public crime;    


function addReport(uint256 _crime_id, string memory _exhibit_name, string memory _desc, string memory _timestamp, string memory _ipfsHash) public returns(uint256) {
    crime.push(CrimeDetails(_crime_id, _exhibit_name, _desc, _timestamp, _ipfsHash));
    return crime.length;        
}

function getPatCount() public view returns(uint256) {
    return crime.length;
}

function getPat(uint256 index) public view returns (uint256, string memory, string memory,string memory, string memory)
{
    return (crime[index].crime_id, crime[index].exhibit_name, crime[index].desc, crime[index].timestamp, crime[index].ipfsHash);
}

    
    // function getPat2(uint index) public view returns(string memory, uint, string memory, string memory)
    // {
    //     return (crime[index].par_rem, crime[index].fee, crime[index].message, crime[index].ipfsHash);
    // }
}

const contractAddress ="0xF1A57c8D64edBb8D7233E88Db3981f45374F29c4";
const contractAbi = [
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balances",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

getContractBalance = async() => {

        const readContract = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        await provider.send("eth_requestAccounts", []);
        
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const _contractBalance = await contract.getBalance();
        const contractBalance = await ethers.utils.formatUnits(_contractBalance,0);
        document.getElementById("balance").innerHTML = contractBalance;

        };
    readContract();
}

getContractBalance(); 

deposit = async() =>{

        const writeContract = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        await provider.send("eth_requestAccounts", []);
        
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const sendEthAmount = await document.getElementById("depositAmount").value;
        await contract.deposit({value: ethers.utils.formatUnits(sendEthAmount,0)});
        };

    writeContract();
}

withdraw = async() =>{

    const writeContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    await provider.send("eth_requestAccounts", []);
    
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    const withdrawEthAmount = await document.getElementById("withdrawAmount").value;
    await contract.withdraw(withdrawEthAmount);
    };

writeContract();
}
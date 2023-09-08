const contractAddress ="";
const contractAbi = 

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
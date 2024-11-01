import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import './RequestAirdrop.css';

export function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function handleClick() {
        const publicKey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
        alert("Success");
    }

    return (
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <h1>Request Airdrop</h1>
                <p>Enter the amount of SOL you wish to request:</p>
                <input 
                    id="amount" 
                    type="text" 
                    placeholder="Enter amount" 
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} 
                />
                <button onClick={handleClick}>Request Airdrop</button>
            </div>
        </div>
    );
}

export default RequestAirdrop;

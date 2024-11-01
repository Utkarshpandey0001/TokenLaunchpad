import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import './SendToken.css'; // Ensure to import your CSS file for styling

export function Sendtoken() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function send() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;

        if (!wallet.publicKey) {
            alert("Please connect your wallet.");
            return;
        }

        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        try {
            await wallet.sendTransaction(transaction, connection);
            alert(`Sent ${amount} SOL to ${to}`);
        } catch (error) {
            alert(`Transaction failed: ${error.message}`);
        }
    }

    return (
        <div className="gpt3__whatgpt">
            <h1 className="gpt3__possibility-heading">Send Tokens</h1>
            <div className="gpt3__possibility" style={{ textAlign: 'center' }}>
                <input id="to" type='text' placeholder='To' className="competitor__tile" />
                <input id="amount" type='text' placeholder='Amount' className="competitor__tile" />
                
            </div>
            <button onClick={send} className="competitor__tile-button">Send</button>
        </div>
    );
}

export default Sendtoken;

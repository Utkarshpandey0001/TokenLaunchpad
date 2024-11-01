import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import './ShowBalance.css'; 

export function ShowBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = (balance / LAMPORTS_PER_SOL).toFixed(2); // Show two decimal places
        } else {
            alert("Please connect your wallet.");
        }
    }

    return (
        <div className="tgpt3">
            <div className="gpt3__whatgpt3-heading">
                <h1>Show Balance</h1>
                <p onClick={getBalance} style={{ cursor: 'pointer' }}>Check your balance now!</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <div className="gpt3__whatgpt3-feature">
                    <div className="gpt3__features-container__feature">
                        <div className="gpt3__features-container__feature-title">
                            <h1>Current Balance</h1>
                            <div></div> {/* This is the gradient bar */}
                        </div>
                        <div className="gpt3__features-container_feature-text">
                            <div className="balance-box">
                                <span id="balance">0.00</span> SOL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowBalance;


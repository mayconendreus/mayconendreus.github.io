// static/script.js

function connectToPhantomWallet() {
    if (window.solana) {
        const solana = window.solana;
        solana.connect().then(() => {
            console.log('Phantom Wallet connected');
            // You can proceed with transactions or other actions here
        }).catch((error) => {
            console.error('Error connecting to Phantom Wallet:', error);
        });
    } else {
        alert('Phantom Wallet is not installed. Please install it to use this feature.');
    }
}

// Add a click event listener to the connect button
const connectButton = document.getElementById('connect-button');
connectButton.addEventListener('click', connectToPhantomWallet);

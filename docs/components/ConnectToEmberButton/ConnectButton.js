import {useState, useEffect} from "react";
import styles from "./styles.module.css";

export default function ConnectButton() {
  const [networkStatus, setNetworkStatus] = useState("disconnected"); // "disconnected" | "wrong_network" | "connected"
  const CHAIN_ID_DECIMAL = 1264453517;
  const CHAIN_ID_HEX = `0x${CHAIN_ID_DECIMAL.toString(16)}`;

  const EMBER_TESTNET = {
    chainId: CHAIN_ID_HEX,
    chainName: "Flash Testnet",
    nativeCurrency: {
      name: "FUSE",
      symbol: "FUSE",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.flash.fuse.io"],
    blockExplorerUrls: ["https://explorer.flash.fuse.io"],
  };

  const checkNetwork = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const currentChainId = await window.ethereum.request({
          method: "eth_chainId",
        });

        if (currentChainId === EMBER_TESTNET.chainId) {
          setNetworkStatus("connected");
        } else {
          setNetworkStatus("wrong_network");
        }

        return currentChainId === EMBER_TESTNET.chainId;
      } catch (error) {
        console.error("Failed to check network:", error);
        setNetworkStatus("disconnected");
        return false;
      }
    }
    return false;
  };

  const switchNetwork = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("Please install MetaMask to use this feature");
      return;
    }

    try {
      // Try to switch first
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{chainId: EMBER_TESTNET.chainId}],
      });
    } catch (switchError) {
      // If network doesn't exist, add it
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [EMBER_TESTNET],
          });
        } catch (addError) {
          console.error("Failed to add network:", addError);
        }
      } else {
        console.error("Failed to switch network:", switchError);
      }
    }
    await checkNetwork();
  };

  useEffect(() => {
    checkNetwork();
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.on("chainChanged", checkNetwork);
      return () => {
        window.ethereum.removeListener("chainChanged", checkNetwork);
      };
    }
  }, []);

  const getButtonText = () => {
    switch (networkStatus) {
      case "wrong_network":
        return "Switch to Flash Testnet";
      case "connected":
        return "Connected to Flash Testnet";
      case "disconnected":
        return "Add Flash Testnet";
      default:
        return "Add Flash Testnet";
    }
  };
  const getButtonClass = () => {
    const baseClass = `${styles["connect-button"]} `;
    switch (networkStatus) {
      case "wrong_network":
        return baseClass + styles["connect-button-wrong-network"];
      case "connected":
        return baseClass + styles["connect-button-connected"];
      case "disconnected":
      default:
        return baseClass + styles["connect-button-disconnected"];
    }
  };

  return (
    <div className={styles["connect-button-wrapper"]}>
      <div className={styles["connect-description"]}>
        <svg
          className={styles["lightbulb-icon"]}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 10.6569 6.63214 12.1569 7.65864 13.2929C8.57758 14.2929 9.29289 15.5 9.29289 17H14.7071C14.7071 15.5 15.4224 14.2929 16.3414 13.2929C17.3679 12.1569 18 10.6569 18 9C18 5.68629 15.3137 3 12 3Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>
          Click the button below to connect your wallet to the Flash Testnet.
        </span>
      </div>
      <div className={styles["connect-button-container"]}>
        {networkStatus !== "connected" ? (
          <button onClick={switchNetwork} className={getButtonClass()}>
            {getButtonText()}
          </button>
        ) : (
          <div className={styles["connected-status"]}>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Connected to Flash Testnet
          </div>
        )}
      </div>
    </div>
  );
}

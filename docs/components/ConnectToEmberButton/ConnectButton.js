import {useState, useEffect} from "react";
import styles from "./styles.module.css";

export default function ConnectButton() {
  const [networkStatus, setNetworkStatus] = useState("disconnected"); // "disconnected" | "wrong_network" | "connected"

  const EMBER_TESTNET = {
    chainId: `0x${(1264453517).toString(16)}`,
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

        // Also check if network exists in user's wallet
        const networks = await window.ethereum.request({
          method: "wallet_getPermissions",
        });

        const hasNetwork = networks.some(
          (permission) =>
            permission.parentCapability === "eth_accounts" &&
            networks.some((n) => n.chainId === EMBER_TESTNET.chainId)
        );

        if (currentChainId === EMBER_TESTNET.chainId) {
          setNetworkStatus("connected");
        } else if (hasNetwork) {
          setNetworkStatus("wrong_network");
        } else {
          setNetworkStatus("disconnected");
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
  );
}

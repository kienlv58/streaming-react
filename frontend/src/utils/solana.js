import { Connection } from "@solana/web3.js";
import { SolanaApiUrl, SolanaCluster } from "../constants/solana";

const solanaConnection = new Connection(
  "https://withered-falling-mountain.solana-mainnet.quiknode.pro/653dd9e05c615080b39df87aae06f45f1f46c1ec"
);

export const getClusterDetail = () => {
  console.log(process.env);
  const cluster = process.env.REACT_APP_SOLANA_CLUSTER || SolanaCluster.MAINNET;
  let clusterApiUrl = SolanaApiUrl.MAINNET;
  if (cluster === SolanaCluster.LOCALNET) {
    clusterApiUrl = SolanaApiUrl.LOCALNET;
  }
  if (cluster === SolanaCluster.DEVNET) {
    clusterApiUrl = SolanaApiUrl.DEVNET;
  }
  if (cluster === SolanaCluster.TESTNET) {
    clusterApiUrl = SolanaApiUrl.TESTNET;
  }
  if (cluster === SolanaCluster.MAINNET) {
    clusterApiUrl = SolanaApiUrl.MAINNET;
  }

  let connection = new Connection(clusterApiUrl, "processed");
  return {
    cluster,
    clusterApiUrl,
    connection,
  };
};

// export const getNFTs = async (wallet_address) => {
//   try {
//     const publicAddress = await resolveToWalletAddress({
//       text: wallet_address,
//     });

//     const nftArray = await getParsedNftAccountsByOwner({
//       publicAddress,
//       connection: solanaConnection,
//     });

//     const listRequest = nftArray.map(async (e) => {
//       if (e.data.uri) {
//         const nftData = await axios.get(e.data.uri);
//         return { ...nftData.data, ...e };
//       }
//     });
//     const result = await Promise.all(listRequest).then((data) => {
//       return data;
//     });
//     return result;
//   } catch (error) {
//     return [];
//   }
// };

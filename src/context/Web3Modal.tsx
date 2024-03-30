import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig, configureChains } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { cronosTestnet } from 'viem/chains';

// 1. Get projectId
const projectId = '5c40311b85c05682e2f9c7de11adfd22';

const metadata = {
  name: 'Crowboys DEX',
  description: 'The Official Crowboys DEX!',
  url: 'https://crowboys-finance.vercel.app',
  icons: ['https://crowboys-finance.vercel.app/images/logo/preloader.png'],
};

const { chains } = configureChains(
  [cronosTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: 'https://evm-t3.cronos.org',
      }),
    }),
  ],
);

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    '--w3m-color-mix': '#fff',
    '--w3m-accent': '#006400',
  },
});

interface ModalProps {
  children: React.ReactNode;
}

export function Web3Modal({ children }: ModalProps) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}

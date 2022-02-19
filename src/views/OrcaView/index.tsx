import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";

export const OrcaView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className="container">
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl">🦦</span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
          <div className="text-sm breadcrumbs">
              <ul className="text-xl">
                <li>
                  <Link href="/">
                    <a>Solearn</a>
                  </Link>
                </li>
                <li>
                  <span className="opacity-40">Orca Track</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>

        <div className="text-center pt-2">
        Orca is a Decentralised Exchange (DEX) on Solana.   It allows you to exchange your coins and tokens as well as provide liquidity for exchanges.

Question 1
Go to https://www.orca.so/ and select “Exchange” from the menu.  Next, connect your wallet to Orca.  Then select from the drop down lists the different tokens.  

Which of the following is a list of suitable assets to swap on Orca? (Available in Drop downs)
SOL for USDC 
SOL for SEGWIT BTC
SOL, FORD F150, 747

Question 2
The service of providing swaps has many components that will affect the final amount you receive of a desired coin or token.  

What are some of the factors that affect the final outcome you receive? 
Internet charges
Liquidity provider fees, Transaction fees & Slippage
Transaction fees & GAS  

Question 3
Orca allows you to participate in earning a portion of the Liquidity provider fees.  To participate you will need to supply a trading pair for a return of  % of the fees.

Which of the follow is an example of a trading pair on Orca
SOL / SOL
SOL / USDC
CELO/ADA

Question 4
Trading pairs display certain percentage of return in APR.  Click on the APR ? extended information to understand how the APR is calculated

Which of the following represent an APR calculation
Minimum APR returned 
Estimated APR return from your deposited assets (Based on Last 7 days) 
100% APR x 1000% APR

Question 5
Once you provide assets to a Trading Pair, they will no longer appear in your wallet.  Instead you will receive a LP Token that represents your deposited tokens.

Which of the follow is an easy way to find your assets
Call your Mum
Select “Pools” and then “Your Liquidity”
All of the above

        </div>
      </div>
    </div>
  );
};

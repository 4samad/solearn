import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";

export const SolendView: FC = ({}) => {
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
                  <span className="opacity-40">Solend.fi Track</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>

        <div className="text-center pt-2">
        Solend is a Lending and borrowing platform on Solana.  It allows you to supply cryptocurrencies as collateral for loans.  

Question 1
Go to https://solend.fi/ and select “Dashboard” from the menu
Which of the following is a list of suitable assets to supply to Solend as collateral?

Solana, Toyota Camry, 747
SOL, USDC, USDT
SOL, ADA, XXX

Question 2
Solend pays you to deposit assets on it’s protocol.  You are paid at rates of Annual Percentage Yield (APY).  These rates change depending on market conditions

What is the current APY on Solana that Solend is offering
SOL is paid at the current Bank Rate
SOL has a fixed APY of 5%
SOL pays a rate that changes based on market conditions.  

Question 3
Loan-To-Value (LTV) is the ratio of the amount you can borrow against your collateral.  So a LTV of 75% would allow you to borrow $75 on an asset that has a current value of $100

Which of the follow is the current LTV for SOL
SOL 25% LTV
SOL 30% LTV
SOL 75% LTV

Question 4
Solend allows you to borrow against the assets you deposited on it’s protocol.  It will allow you to borrow up to the LTV ratio.  

Which of the following situations are not possible
Deposit 10 SOL and borrow 1 SOL
Deposit 10 SOL and borrow 1 USDC
Deposit 10 SOL and borrow 100% against it

Question 5
Solend provides rewards for using it’s protocol.  The rewards are provided for supplying & lending.  The rewards accumulate over time and can be claimed by clicking the CLAIM button.  

Which of the follow is correct
I can CLAIM my rewards and supply to Solend for further rewards
I can CLAIM my rewards and swap or sell them for another token or coin
All of the above

        </div>
      </div>
    </div>
  );
};

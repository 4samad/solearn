import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";

export const TulipView: FC = ({ }) => {
  const { publicKey } = useWallet();

  const onClick = () => { };

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
                  <span className="opacity-40">Tulip Track</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>

        <div className="text-center pt-2">
          TULIP is a Yeild farming aggregator that automates and compounds your earnings.  It is perfectly suited to a fast and low cost blockchain like Solana.

          Question 1
          Go to https://tulip.garden/ and connect your wallet.  Launch the app.  Have a look at the menu’s options such and the APY’s being offered

          Which of the following best describes some of the options and strategies on TULIP?
          WAGMI
          TULIP offers options such as Lending, Auto Vaults and Leveraged Farming
          My mum loves Tulip Gardens

          Question 2
          There are always risks in any protocol, TULIP offers at least 3 different options with different risks vs rewards strategies

          Which of the following best describes the risks on TULIP
          It{'’'}s on Solana so the risks are low
          TULIP is a money printing machine with low risks
          TULIP offers lending with lower risk, Auto Vaults with medium risks and Leveraged Farming with high risks

          Question 3
          Have a look at the Lending, Auto Vaults and Leveraged Farming options and the different APY they are offering

          Which of the follow best describes TULIP’s strategies
          It waters the TULIPS regularly to ensure great growth
          Lending has High APY and Leverage Farming is low risk
          The higher the APY the higher the risks involved.

          Question 4
          Which of the following are possible outcomes on TULIP?
          High risks offer great APY but can result in liquidation
          High APY = Lambo (Lamborghini money on way)
          APY &gt; 100% is safe as a bank

          Question 5
          What is a good idea when investing in any protocol?
          Work hard as that always makes the most money
          Be smart and invest wisely, don{'’'}t risk anything you can{'’'}t afford to loose
          TULIP is a great DAPP, i am going all in

        </div>
      </div>
    </div>
  );
};

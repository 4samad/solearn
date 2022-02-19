import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";

export const AllBridgeView: FC = ({ }) => {
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
                  <span className="opacity-40">AllBridge Track</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>

        <div className="text-center pt-2">
          Bridging is required when you need to move assets from one blockchain to another.  This is required due to different blockchains using different standards and technology.  An example is that native ETH is not compatible with Solana by default.  But can be Bridged.

          Question 1
          Go to https://allbridge.io/ and click on the bridging section.  Watch the video to get an idea of how the system works.  Alternatively run the video from here https://www.youtube.com/watch?v=UX3y83h_yYM

          In the video you will see that 2 wallets are used, one for the supply blockchain and another for the receiving blockchain.  Which statement is correct?
          You can just use the Phantom wallet because it is awesome
          You need a wallet for each blockchain because they use different standards and tech
          I didn’t watch the video, so this is not the correct answer!

          Question 2
          BRIDGING needs to service both Blockchains in a mutually beneficial way, So Bridging is by-directional.

          Which of the following is more correct
          Once i Bridge my assets to another Blockchain i can Bridge them back any time
          Phantom wallet only process transactions off Solana
          Bridging is by-directional so i can drive my car forward and back while bridging

          Question 3
          Further to Bridging being mutually beneficial, we need to process blockchain transactions in both wallets for the Bridging process to complete

          Which is more correct
          I am only using Phantom to pay for all the transactions
          I don’t have another wallet so not doing it
          Your Phantom wallet and the wallet of the destination blockchain will need their native coin to pay for transaction fees

          Question 4
          You start the Bridging process, you want to transfer USDC and realise that ALLBRIDGE only offers abUSDC for transfer to your desired network.  What do you do?
          Bridge something else
          Use a DEX to swap your USDC to abUSDC such as Jupiter https://jup.ag/
          Give up

          Question 5
          BRIDGING is a complex process with several transactions and fees.  Allbridge offers the user the option of reduced fees and incentives.

          What incentives do Allbridge kindly offer?
          Allbridge pay users SOL to Bridge Assets
          My Dad tells me Allbridge give $$$ Cash to random users
          Allbridge has a token ABR which can be purchased, staked and is provided as rewards for use of the Bridge.

        </div>
      </div>
    </div>
  );
};

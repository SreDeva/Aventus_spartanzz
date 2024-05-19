import "./styles/Home.css";
import { useAddress } from "@thirdweb-dev/react";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";

import React, { useEffect } from 'react';

export default function Home() {

  const address=useAddress();
  return (
    <main className="main">
      <div className="container">
        <ConnectWallet/>
        <Web3Button contractAddress='0x7291497a76db9AaBaFD5B0a0dFC7373A4189028c'
          action={ (contra)=>{
              const data=contra.call("getCampaigns");
              console.log(data);
            }         
        }
        >hi
        </Web3Button>
      </div>
    </main>
  );
}

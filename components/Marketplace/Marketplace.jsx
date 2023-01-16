import React, { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import { Modal } from "antd";
import Image from "next/image";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Marketplace = () => {
  const { isModalOpen, showModal, handleOk, handleCancel } =
    useContext(ModalContext);

  return (
    <div id="marketplace">
      <Banner headingType="marketPlace" />
      <section className="marketplace">
        <div className="left">
          <Card showModal={showModal} />
        </div>
        <div className="right">
          <div className="right_top">
            <p>December 14, 2022</p>
            <h3>
              THE FEW MOST
              <br />
              POPULAR NFT CARDS
            </h3>
            <p>Owned By OXOJ</p>
            <p>
              A NEW WAVE OF COLLECTIBLES IS ABOUT TO HIT THE ETHEREUM
              BLOCKCHAIN. A SET OF 3.333 UNIQUE COLLECTABLES, THE ADDITION TO
              YOUR NFT COLLECTION YOU’VE BEEN WAITING FOR.
            </p>
          </div>
          <div className="right_bottom">
            <Image src="/nft.png" alt="NFT" width={600} height={200} />
          </div>
        </div>
        <Modal
          title="Buy NFT"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelButtonProps={{
            htmlType: "button",
          }}
          okButtonProps={{ htmlType: "button" }}
        >
          <form action="">
            <label htmlFor="Wallet Number">Wallet Number:</label>
            <input
              type="number"
              min={0}
              placeholder="Ex: 4654789466"
              required
            />
            <label htmlFor="Bid">Bid in ETH:</label>
            <input type="number" min={0} placeholder="ETH" required />
          </form>
        </Modal>
      </section>
    </div>
  );
};

export default Marketplace;

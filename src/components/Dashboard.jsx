import React, { useRef } from "react";
import "./Dashboard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import avatar from "./avatar.png";
import {
  useContract,
  useContractWrite,
  useContractRead,
  useAddress,
} from "@thirdweb-dev/react";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
let a = null;
function MyVerticallyCenteredModal(props) {
  const val = useRef(null);
  let contractAddress = "0xB7765fca8D09aF940f7D98f6bE92c9206531FF11";
  const { contract } = useContract(contractAddress);
  const { data, isloading } = useContractRead(contract, "users", [
    useAddress(),
  ]);
  if (data) {
    console.log(data);
    const decimalValues = data.map((item) => {
      // Convert hexadecimal to decimal
      const decimalValue = BigInt(item._hex).toString();
      a = decimalValue;
      return decimalValue;
    });

    console.log("decimal value" + decimalValues);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Pay EMI</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter the amount</h4>
        <input type="text" style={{ width: "100%" }} ref={val} />
      </Modal.Body>
      <Modal.Footer>
        <Web3Button
          contractAddress="0xf3f04834128fA806AF03b19458A35fEf4Cfb580C"
          action={(contra) => {
            contra.call("payEMI", [val.current.value]);
          }}
        >
          PayEMI
        </Web3Button>
      </Modal.Footer>
    </Modal>
  );
}

function Dashboard() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="dashmain">
      <div className="dashcircle">
        <div className="img">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="dcard pcard">
        <p style={{ fontSize: "11px" }}>{useAddress()}</p>
        <h5>ADDRESS</h5>
      </div>

      <div className="dcards">
        <div className="dcard">
          <div className="one">
            <h5>Portfolio Overview</h5>
          </div>
          <div className="two">
            <p>
              Monitor your cryptocurrency portfolio's value and asset allocation
              with ease using our intuitive Portfolio Overview feature
            </p>
          </div>
        </div>
        <div className="dcard">
          <div className="one">
            <h5>Balence</h5>
          </div>
          <div className="two">
            <p>
              Effortlessly See details of data that your wallet contains:
              <br />
              USD :4.225
              <br />
              MORTGAGED ETH:0.5
              <br />
            </p>
          </div>
        </div>
        <div className="dcard">
          <div className="one">
            <h5>PAYEMI</h5>
          </div>
          <div className="two">
            <p>Make your EMI payments for your borrowed assets</p>
          </div>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            PAYEMI
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="dcard">
          <div className="one">
            <h5>Crypto Yield Analysis</h5>
          </div>
          <div className="two">
            <p>
              Explore crypto yield performance with our analysis feature,
              covering investment returns, staking rewards, and
              liquidity pool yields
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

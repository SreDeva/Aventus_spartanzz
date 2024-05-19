import React from "react";
import img from "./brandlogo.jpg";
import user from "./userlogo.jpg";

const ChatMessage = (props) => {
  return (
    <div className={`d-flex justify-content-start`} style={{ paddingLeft: 20 }}>
      {props.user ? (
        <React.Fragment>
          <div className="message-right">
            <div className="user-info">
              <img src={user} height={"10px"} width={"10px"} className="icon" />
              <h4 className="user-label">You</h4>
            </div>
            <p className="message-text">{props.message}</p>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="message-left">
            <div className="user-info">
              <img src={img} height={"10px"} width={"10px"} className="icon" />
              <h4 className="user-label">InvestIQ</h4>
            </div>
            <p className="message-text">{props.message}</p>
            {/* Render data2 here */}
            {/* <div className='newlinks'>
                                {props.data}
                            </div> */}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ChatMessage;

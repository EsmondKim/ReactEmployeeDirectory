// import React from "react";

// function Card(props) {
//   return (
//     <div className="card text-center">
//       <div className="card-header">
//         <h2>{props.heading}</h2>
//       </div>
//       <div className="card-body">{props.children}</div>
//     </div>
//   );
// }

// export default Card;

import React from "react";
import CardBtn from "../CardBtn/CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Card;

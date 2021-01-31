import React from "react";
import { connect } from "react-redux";
import './css/index.css';

const LuckyDoor = ({ lucky }) => {
  return (
    <section className="message">
    <div class="card">
        <div class="container">
        <h2>Sua sorte do dia é:</h2>
          <p><b>{lucky.message}</b></p>
          <p>{lucky.numbers} </p>
          <p>{lucky.color} </p>
          </div>
    </div>
    </section>
  );
};

export default connect((state) => ({
        lucky: state.luckydoor.lucky
}))(LuckyDoor);

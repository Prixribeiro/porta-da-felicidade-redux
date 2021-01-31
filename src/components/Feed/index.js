import React from "react";
import { connect } from "react-redux";
import Logo from '../LuckyDoor/imagem/porta.png';
import './css/index.css';

import { bindActionCreators } from "redux";
// nossas actions
import * as LuckyDoorActions from "../../store/actions/actions";

const Feed = ({ luckydoor, addLuckyDoor }) => {
  return (
    <section>
        <h1>Escolha sua Porta da Felicidade:</h1>
        <div className="biscoitinho">
        {luckydoor.map((item) => (
          <img src={Logo} alt="Porta da sorte" onClick={() => addLuckyDoor
          (item)} />
        ))}
        </div>
        
    </section>
  );
};

const mapStateToProps = (state) => ({
  luckydoor: state.luckydoor.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(LuckyDoorActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);


// <p key={item.id}> {item.cor} | {item.tamanho} | {item.preco} </p>
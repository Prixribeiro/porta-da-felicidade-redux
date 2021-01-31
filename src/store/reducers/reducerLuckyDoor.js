const INITIAL_STATE = {
  lucky: [{}],
  feed: [
    {
      id: 1,
      message: 'A sorte é uma porta giratória, você só precisa saber quando é sua hora de atravessar.',
      numbers: 'Números da Sorte: 03 13 21 29 34 56',
      color: "Cor do dia: Azul",
    },
    {
      id: 2,
      message: 'Perdeu o sono? Não se preocupe, amanhã ele estará te esperando na porta do trabalho.',
      numbers: "Números da Sorte: 12 27 36 48 55 57",
      color: "Cor do dia: Roxo",
    },
    {
      id: 3,
      message: 'A verdade é que quando a vida fecha uma porta, provavelmente seu dedo estará lá.',
      numbers: "Números da Sorte: 05 10 34 50 57 59",
      color: "Cor do dia: Laranja",
    },
  ],
};

export default function luckydoor(state = INITIAL_STATE, action) {
  if (action.type === "ADD_COOKIE") {
    return {
      ...state,
      lucky: action.luckydoor,
    };
  }
  return state;
}

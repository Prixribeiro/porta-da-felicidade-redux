const INITIAL_STATE = {
  fortune: [{}],
  feed: [
    {
      id: 1,
      message: 'A sorte é uma porta giratória, você só precisa saber quando é sua hora de atravessar.',
      numbers: 'Números da Sorte: 03 13 21 29 34 56',
      animal: "Animal da sorte: Zebra",
    },
    {
      id: 2,
      message: 'Perdeu o sono? Não se preocupe, amanhã ele estará te esperando na porta do trabalho.',
      numbers: "Números da Sorte: 12 27 36 48 55 57",
      animal: "Animal da sorte: Preguiça",
    },
    {
      id: 3,
      message: 'A verdade é que quando a vida fecha uma porta, provavelmente seu dedo estará lá.',
      numbers: "Números da Sorte: 05 10 34 50 57 59",
      animal: "Animal da sorte: Leopardo",
    },
  ],
};

export default function fortuneCookie(state = INITIAL_STATE, action) {
  if (action.type === "ADD_COOKIE") {
    return {
      ...state,
      fortune: action.fortuneCookie,
    };
  }
  return state;
}

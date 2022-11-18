import photo21 from '../images/21.png';
import photo22 from '../images/22.png';
import photo23 from '../images/23.png';
import photo24 from '../images/24.png';
import photo25 from '../images/25.png';
import photo26 from '../images/26.png';
import photo27 from '../images/27.png';
import photo28 from '../images/28.png';
import photo29 from '../images/29.png';
import photo30 from '../images/30.png';
import photo31 from '../images/31.png';
import photo32 from '../images/32.png';
import photo33 from '../images/33.png';
import photo34 from '../images/34.png';
import photo35 from '../images/35.png';
import photo36 from '../images/36.png';
import photo37 from '../images/37.png';
import photo38 from '../images/38.png';
import photo39 from '../images/39.png';
import photo40 from '../images/40.png';

const normal = 'normal';
const rare = 'raro';
const veryRare = 'muito raro';
const water = 'Pokemon de Água';

const cards2 = [
  {
    cardName: 'Meowth',
    cardDescription: 'Pokemon Normal.',
    cardImage: photo21,
    cardAttr1: 50,
    cardAttr2: 8,
    cardAttr3: 6,
    cardAttr4: 10,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Persian',
    cardDescription: 'Evolução do Meowth.',
    cardImage: photo22,
    cardAttr1: 20,
    cardAttr2: 9,
    cardAttr3: 6,
    cardAttr4: 40,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Psyduck',
    cardDescription: water,
    cardImage: photo23,
    cardAttr1: 30,
    cardAttr2: 1,
    cardAttr3: 5,
    cardAttr4: 30,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Golduck',
    cardDescription: 'Evolução do Psyduck.',
    cardImage: photo24,
    cardAttr1: 35,
    cardAttr2: 9,
    cardAttr3: 4,
    cardAttr4: 25,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Poliwag',
    cardDescription: water,
    cardImage: photo25,
    cardAttr1: 40,
    cardAttr2: 1,
    cardAttr3: 7,
    cardAttr4: 20,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Poliwhirl',
    cardDescription: 'Evolução do Poliwag.',
    cardImage: photo26,
    cardAttr1: 45,
    cardAttr2: 8,
    cardAttr3: 6,
    cardAttr4: 15,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Poliwrath',
    cardDescription: 'Evolução do Poliwhirl.',
    cardImage: photo27,
    cardAttr1: 25,
    cardAttr2: 5,
    cardAttr3: 9,
    cardAttr4: 35,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Abra',
    cardDescription: 'Pokemon Psíquico.',
    cardImage: photo28,
    cardAttr1: 10,
    cardAttr2: 4,
    cardAttr3: 4,
    cardAttr4: 50,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Kadabra',
    cardDescription: 'Evolução do Abra.',
    cardImage: photo29,
    cardAttr1: 15,
    cardAttr2: 10,
    cardAttr3: 6,
    cardAttr4: 45,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Alakazam',
    cardDescription: 'Evolução do Kadabra.',
    cardImage: photo30,
    cardAttr1: 20,
    cardAttr2: 8,
    cardAttr3: 8,
    cardAttr4: 40,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Geodude',
    cardDescription: 'Pokemon de Pedra.',
    cardImage: photo31,
    cardAttr1: 25,
    cardAttr2: 5,
    cardAttr3: 10,
    cardAttr4: 35,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Graveler',
    cardDescription: 'Evolução do Geodude.',
    cardImage: photo32,
    cardAttr1: 30,
    cardAttr2: 4,
    cardAttr3: 7,
    cardAttr4: 30,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Golem',
    cardDescription: 'Evolução do Graveler.',
    cardImage: photo33,
    cardAttr1: 45,
    cardAttr2: 7,
    cardAttr3: 6,
    cardAttr4: 15,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Ponyta',
    cardDescription: 'Pokemon de Fogo.',
    cardImage: photo34,
    cardAttr1: 40,
    cardAttr2: 4,
    cardAttr3: 9,
    cardAttr4: 20,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Rapidash',
    cardDescription: 'Evolução da Ponyta.',
    cardImage: photo35,
    cardAttr1: 45,
    cardAttr2: 6,
    cardAttr3: 5,
    cardAttr4: 15,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Gastly',
    cardDescription: 'Pokemon Fantasma.',
    cardImage: photo36,
    cardAttr1: 40,
    cardAttr2: 6,
    cardAttr3: 2,
    cardAttr4: 20,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Haunter',
    cardDescription: 'Evolução do Gastly.',
    cardImage: photo37,
    cardAttr1: 45,
    cardAttr2: 10,
    cardAttr3: 4,
    cardAttr4: 15,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Gengar',
    cardDescription: 'Evolução do Haunter.',
    cardImage: photo38,
    cardAttr1: 50,
    cardAttr2: 2,
    cardAttr3: 1,
    cardAttr4: 10,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Horsea',
    cardDescription: water,
    cardImage: photo39,
    cardAttr1: 15,
    cardAttr2: 4,
    cardAttr3: 7,
    cardAttr4: 45,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Seadra',
    cardDescription: 'Evolução do Horsea.',
    cardImage: photo40,
    cardAttr1: 20,
    cardAttr2: 10,
    cardAttr3: 10,
    cardAttr4: 40,
    cardRare: rare,
    cardTrunfo: false,
  },
];

export default cards2;

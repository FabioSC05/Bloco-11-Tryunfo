import photo01 from '../images/01.png';
import photo02 from '../images/02.png';
import photo03 from '../images/03.png';
import photo04 from '../images/04.png';
import photo05 from '../images/05.png';
import photo06 from '../images/06.png';
import photo07 from '../images/07.png';
import photo08 from '../images/08.png';
import photo09 from '../images/09.png';
import photo10 from '../images/10.png';
import photo11 from '../images/11.png';
import photo12 from '../images/12.png';
import photo13 from '../images/13.png';
import photo14 from '../images/14.png';
import photo15 from '../images/15.png';
import photo16 from '../images/16.png';
import photo17 from '../images/17.png';
import photo18 from '../images/18.png';
import photo19 from '../images/19.png';
import photo20 from '../images/20.png';

const normal = 'normal';
const rare = 'raro';
const veryRare = 'muito raro';

const cards = [
  {
    cardName: 'Bulbasaur',
    cardDescription: 'Pokemon inicial de Grama.',
    cardImage: photo01,
    cardAttr1: 10,
    cardAttr2: 7,
    cardAttr3: 2,
    cardAttr4: 50,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Ivysaur',
    cardDescription: 'Evolução do Bulbasaur.',
    cardImage: photo02,
    cardAttr1: 15,
    cardAttr2: 3,
    cardAttr3: 3,
    cardAttr4: 45,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Venusaur',
    cardDescription: 'Evolução do Ivysaur.',
    cardImage: photo03,
    cardAttr1: 30,
    cardAttr2: 2,
    cardAttr3: 1,
    cardAttr4: 30,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Charmander',
    cardDescription: 'Pokemon inicial de Fogo.',
    cardImage: photo04,
    cardAttr1: 25,
    cardAttr2: 5,
    cardAttr3: 7,
    cardAttr4: 35,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Charmeleon',
    cardDescription: 'Evolução do Charmander.',
    cardImage: photo05,
    cardAttr1: 30,
    cardAttr2: 1,
    cardAttr3: 9,
    cardAttr4: 30,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Charizard',
    cardDescription: 'Evolução do Charmeleon.',
    cardImage: photo06,
    cardAttr1: 35,
    cardAttr2: 9,
    cardAttr3: 8,
    cardAttr4: 25,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Squirtle',
    cardDescription: 'Pokemon inicial de Água.',
    cardImage: photo07,
    cardAttr1: 20,
    cardAttr2: 8,
    cardAttr3: 10,
    cardAttr4: 40,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Wartortle',
    cardDescription: 'Evolução do Squirtle.',
    cardImage: photo08,
    cardAttr1: 45,
    cardAttr2: 7,
    cardAttr3: 10,
    cardAttr4: 15,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Blastoise',
    cardDescription: 'Evolução do Wartortle.',
    cardImage: photo09,
    cardAttr1: 50,
    cardAttr2: 3,
    cardAttr3: 3,
    cardAttr4: 10,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Caterpie',
    cardDescription: 'Pokemon Inseto.',
    cardImage: photo10,
    cardAttr1: 10,
    cardAttr2: 3,
    cardAttr3: 2,
    cardAttr4: 50,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Metapod',
    cardDescription: 'Evolução do Caterpie.',
    cardImage: photo11,
    cardAttr1: 15,
    cardAttr2: 9,
    cardAttr3: 4,
    cardAttr4: 45,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Butterfree',
    cardDescription: 'Evolução do Metapod.',
    cardImage: photo12,
    cardAttr1: 20,
    cardAttr2: 7,
    cardAttr3: 5,
    cardAttr4: 40,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Weedle',
    cardDescription: 'Pokemon Inseto Venenoso.',
    cardImage: photo13,
    cardAttr1: 25,
    cardAttr2: 5,
    cardAttr3: 7,
    cardAttr4: 35,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Kakuna',
    cardDescription: 'Evolução do Weedle.',
    cardImage: photo14,
    cardAttr1: 30,
    cardAttr2: 3,
    cardAttr3: 9,
    cardAttr4: 30,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Beedrill',
    cardDescription: 'Evolução do Kakuna.',
    cardImage: photo15,
    cardAttr1: 35,
    cardAttr2: 1,
    cardAttr3: 5,
    cardAttr4: 25,
    cardRare: veryRare,
    cardTrunfo: false,
  },
  {
    cardName: 'Ekans',
    cardDescription: 'Pokemon Venenoso.',
    cardImage: photo16,
    cardAttr1: 40,
    cardAttr2: 3,
    cardAttr3: 3,
    cardAttr4: 20,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Arbok',
    cardDescription: 'Evolução da Ekans.',
    cardImage: photo17,
    cardAttr1: 45,
    cardAttr2: 5,
    cardAttr3: 9,
    cardAttr4: 15,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Pikachu',
    cardDescription: 'Pokemon Elétrico.',
    cardImage: photo18,
    cardAttr1: 20,
    cardAttr2: 9,
    cardAttr3: 8,
    cardAttr4: 40,
    cardRare: rare,
    cardTrunfo: false,
  },
  {
    cardName: 'Zubat',
    cardDescription: 'Pokemon Voador Venenoso.',
    cardImage: photo19,
    cardAttr1: 10,
    cardAttr2: 8,
    cardAttr3: 4,
    cardAttr4: 50,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Golbat',
    cardDescription: 'Evolução do Zubat.',
    cardImage: photo20,
    cardAttr1: 15,
    cardAttr2: 4,
    cardAttr3: 3,
    cardAttr4: 45,
    cardRare: rare,
    cardTrunfo: false,
  },
];

export default cards;

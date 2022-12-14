import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Inputs from './components/Inputs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr4: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
      cardListSave: [],
      cardRareState: 'todas',
      disabled: false,
      checkboxSave: '' };
  }

  enableButton = () => {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const n90 = 90;
    const n210 = 210;
    const num1 = parseInt(cardAttr1, 10);
    const num2 = parseInt(cardAttr2, 10);
    const num3 = parseInt(cardAttr3, 10);
    const sum = num1 + num2 + num3;
    const att1 = num1 >= 0 && num1 <= n90;
    const att2 = num2 >= 0 && num2 <= n90;
    const att3 = num3 >= 0 && num3 <= n90;
    const oneKey = cardName === '' || cardDescription === '' || cardImage === ''
    || cardAttr1 === '0' || cardAttr2 === '0' || cardAttr3 === '0' || sum > n210
    || att1 === false || att2 === false || att3 === false;
    return oneKey;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.enableButton(),
    }));
  };

  rarity = () => {
    const { cardListSave, cardRareState } = this.state;
    if (cardRareState === 'todas') {
      return cardListSave.filter((ele) => ele.cardRare !== cardRareState);
    }
    return cardListSave.filter((ele) => ele.cardRare === cardRareState);
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
      cardAttr4, cardRare, cardTrunfo, cardList } = this.state;
    const object = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardRare,
      cardTrunfo };
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr4: '0',
      cardRare: 'normal',
      cardListSave: [...cardList, object],
    }, () => {
      if (cardTrunfo) {
        this.setState({
          cardTrunfo: false,
          hasTrunfo: true,
          isSaveButtonDisabled: this.enableButton(),
          cardList: this.rarity(),
        });
      } else {
        this.setState({
          cardTrunfo: false,
          isSaveButtonDisabled: this.enableButton(),
          cardList: this.rarity(),
        });
      }
    });
  };

  deleteCard = ({ target }) => {
    const { className } = target;
    const { cardList } = this.state;
    const element = cardList.find((card) => card.cardName === className);
    this.setState({
      cardList: cardList.filter((ele) => ele.cardName !== className),
      hasTrunfo: !element.cardTrunfo,
    });
  };

  nameFilter = ({ target }) => {
    const { value } = target;
    this.setState({
      cardList: this.rarity().filter((ele) => ele.cardName.includes(value)),
    }, () => {
      if (value === '') {
        this.setState({
          cardList: this.rarity(),
        });
      }
    });
  };

  rareFilter = ({ target }) => {
    const { value } = target;
    const { cardList } = this.state;
    if (value === 'todas') {
      this.setState({
        cardList: cardList.filter((ele) => ele.cardRare !== value),
        cardRareState: value,
      });
    } else {
      this.setState({
        cardList: cardList.filter((ele) => ele.cardRare === value),
        cardRareState: value,
      });
    }
  };

  checkFilter = ({ target }) => {
    const { checked } = target;
    const { cardList, cardListSave, checkboxSave } = this.state;
    if (checked) {
      this.setState({
        checkboxSave: cardList,
        disabled: true,
      }, () => {
        if (cardListSave.length > 0) {
          this.setState({
            cardList: cardListSave.filter((ele) => ele.cardTrunfo === true),
          });
        }
      });
    } else {
      this.setState({
        cardList: checkboxSave,
        disabled: false,
      });
    }
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
      cardAttr4, cardRare, cardTrunfo, hasTrunfo, cardList, isSaveButtonDisabled,
      disabled } = this.state;

    return (
      <div>
        <h1>Tryunfo Pokemon</h1>
        <div className="container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardAttr4={ cardAttr4 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div>
            <h2>Pr??-Visualiza????o</h2>
            <Card
              cardName={ cardName }
              cardImage={ cardImage }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardAttr4={ cardAttr4 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
            />
          </div>
        </div>
        <h2>Todas as Cartas</h2>
        <Inputs
          disabled={ disabled }
          nameFilter={ this.nameFilter }
          rareFilter={ this.rareFilter }
          checkFilter={ this.checkFilter }
        />
        <div className="cardList">
          {cardList.map((elem) => (
            <div key={ elem.cardName } className="card-container">
              <Card
                cardName={ elem.cardName }
                cardImage={ elem.cardImage }
                cardDescription={ elem.cardDescription }
                cardAttr1={ elem.cardAttr1 }
                cardAttr2={ elem.cardAttr2 }
                cardAttr3={ elem.cardAttr3 }
                cardAttr4={ elem.cardAttr4 }
                cardRare={ elem.cardRare }
                cardTrunfo={ elem.cardTrunfo }
                hasTrunfo={ elem.hasTrunfo }
              />
              <button
                type="button"
                className={ elem.cardName }
                onClick={ this.deleteCard }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

import { useState } from "react";
import {
  CreditCardContainer,
  CardImage,
  CardDetails,
  CardNumber,
  CardHolderName,
  CardNumberInput,
  CardHolderNameInput,
} from "./styledComponents";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardholderNameChange = (event) => {
    setCardholderName(event.target.value);
  };

  return (
    <CreditCardContainer data-testid="creditCard">
      <CardImage
        src="https://assets.ccbp.in/frontend/hooks/credit-card-bg.png"
        alt="Credit Card"
      />
      <CardDetails>
        <CardNumber>{cardNumber || "#### #### #### ####"}</CardNumber>
        <CardHolderName>
          {cardholderName.toUpperCase() || "CARDHOLDER NAME"}
        </CardHolderName>
      </CardDetails>
      <CardNumberInput
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <CardHolderNameInput
        type="text"
        placeholder="Cardholder Name"
        value={cardholderName}
        onChange={handleCardholderNameChange}
      />
    </CreditCardContainer>
  );
};

export default CreditCard;

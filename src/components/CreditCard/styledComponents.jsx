import styled from "styled-components";

export const CreditCardContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
  background-position: center;
  background-size: cover; /* Ensures the image fills the container */
  width: 100%;
  height: 300px; /* Default height for small screens */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

  /* Media query for larger screens */
  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1200px) {
    height: 400px;
  }
`;

export const CardImage = styled.img`
  width: 30%;
  height: auto;
  position: absolute;
  top: 20px;
  right: 20px;
  object-fit: contain;
  border-radius: 5px;
`;

export const CardDetails = styled.div`
  position: absolute;
  bottom: 50px; /* Adjust bottom position */
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between; /* Space out number and name */
  flex-direction: row;
  align-items: center;
  color: #fff;
`;

export const CardNumber = styled.div`
  font-size: 22px;
  letter-spacing: 2px;
`;

export const CardHolderName = styled.div`
  font-size: 18px;
  text-transform: uppercase;
`;

export const CardNumberInput = styled.input`
  margin-top: 10px;
  padding: 8px;
  width: 80%;
  border-radius: 5px;
  border: 1px solid #d3d9e0;
  font-size: 16px;
  text-align: center;
`;

export const CardHolderNameInput = styled.input`
  margin-top: 10px;
  padding: 8px;
  width: 80%;
  border-radius: 5px;
  border: 1px solid #d3d9e0;
  font-size: 16px;
  text-align: center;
`;

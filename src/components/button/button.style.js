import styled, { css } from "styled-components";
const google = css`
  background-color: #1254ce;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;
const base = css`
  background-color: #247424;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;
const giveRelatedClass = (props) => {
  if (props.buttonName.includes("Google")) {return google};
  return base;
};
export const ButtonContainer = styled.button`
  width: 22vw;
  height: 35px;
  border: none;
  color: aliceblue;
  ${giveRelatedClass}
`;

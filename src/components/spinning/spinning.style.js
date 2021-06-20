import styled from 'styled-components'
export const WrapperSpinner=styled.div`
display: flex;
flex-direction: row;
align-items: center;
outline: none;
justify-content: space-around;
height: 60vh;
width: 50vw;
`;

export const Spinner=styled.div`
height: 50px;
width: 60px;
display: inline-block;
position: relative;
left: 50%;
border-top: 3px solid blue;
  border-right: 3px solid green;
  border-bottom: 3px solid red;
  border-radius: 50%;
  animation: animator 2s linear infinite;
@keyframes animator{
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


`

import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ResetGameButton = styled.button`
  background: blue;
  border: 0;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  color: white;
`;

export const WinnerInformation = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
import styled from "styled-components";

export const GameCellContainer = styled.div`
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  padding: 0;
  border: 1px solid #888;
  background-color: ${props => props.winningCell ? "yellow" : "auto" };
  font-size: 30px;
`;
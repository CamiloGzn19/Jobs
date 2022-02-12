import styled from "styled-components";

export const General = styled.div`
  margin-top: 36px;
  width: 100%;
  height: auto;
  display: grid;
  grid-row-gap: 25px;
`;

export const Item = styled.div`
  width: 100%;
  height: auto;
  padding: 35px 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 15px -7px rgba(93,164,164,0.5);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const Tags = styled.button`
  display: inline-block;
  width: auto;
  height: auto;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: hsl(180, 31%, 95%);
  font-weight: 700;
  font-size: 14px;
  border: 0;
  color: var(--highlight-color);
  margin: 7.5px 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
`;

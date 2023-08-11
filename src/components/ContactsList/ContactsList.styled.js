import styled from 'styled-components';

export const ContactItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const RemoveButton = styled.button`
  min-width: 80px;
  border: none;
  padding: 4px 6px 4px 6px;
  cursor: pointer;
  background: linear-gradient(to right, #d3cce3, #e9e4f0);
  border-radius: 15px;
  font-size: 14px;
  text-align: center;
  color: #696969;

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(232, 77, 151, 0.75);
    color: #000;
  }
`;

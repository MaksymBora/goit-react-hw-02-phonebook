import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 4px 4px 4px 8px;
  width: 300px;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  font-style: italic;
`;

export const StyledLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Wrapper = styled.div`
  width: 500px;
  font-weight: 500;
  padding: 10px;
`;

export const Button = styled.button`
  display: block;
  padding: 8px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  border: none;
  background: linear-gradient(to right, #d3cce3, #e9e4f0);
  text-align: center;
  color: #696969;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(232, 77, 151, 0.75);
    transform: scale(1.1);
    color: #000;
  }
`;

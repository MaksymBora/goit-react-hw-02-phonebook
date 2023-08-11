import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  margin-top: 25px;
  border-radius: 8px;
  background-color: RGBA(227, 253, 211, 0.7);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  display: block;
  font-weight: 700;
  font-size: 24px;
`;

export const SearchWrapper = styled.div`
  margin-right: auto;
`;

export const StyledTitles = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
`;

import styled from '@emotion/styled/macro';

export const CardLabelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ede6fb;
`;

export const CardLabel = styled.span`
  text-align: center;
  color: #1d0053;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
`;

export const NameWrap = styled.div`
  margin-left: 20px;
`;

export const PlayerName = styled.p`
  max-width: 160px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  color: #14141e;
  transition: all 300ms linear;
`;

export const CardWrap = styled.td`
  display: flex;
  align-items: center;
  width: 303px;

  border-radius: 24px;
  border: 1px solid #eeeeee;
  padding: 20px;

  cursor: pointer;

  box-shadow: 0px 2px 10px 0px rgba(20, 20, 30, 0.05),
    0px 1px 4px 0px rgba(20, 20, 30, 0.05);

  transition: all 300ms linear;

  &:hover,
  &:focus {
    box-shadow: 0px 6px 15px 0px rgba(20, 20, 30, 0.05),
      0px 3px 18px 0px rgba(20, 20, 30, 0.05);

    ${PlayerName} {
      color: #652ad3;
    }
  }
`;

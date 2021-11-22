import styled from '@emotion/styled/macro';

export const ConfWrap = styled.span`
  display: inline-block;
  border-radius: 21px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;

  color: ${(props) => (props.conf === 'west' ? '#E64A18' : '#1fad87')};
  background-color: ${(props) =>
    props.conf === 'west' ? '#FFEAE3' : '#daf5ee'};
`;

import styled from '@emotion/styled/macro';
import { Form, Field } from 'formik';

import arrow from '../../images/Icon.svg';

export const FormWrap = styled.div`
  margin-bottom: 24px;
`;

export const CustomForm = styled(Form)`
  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  padding: 24px 240px 41px 24px;
  border: 1px solid #eeeeee;
  border-radius: 24px;
  box-shadow: 0px 2px 10px 0px rgba(20, 20, 30, 0.05),
    0px 1px 4px 0px rgba(20, 20, 30, 0.05);
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  font-size: 12px;
  line-height: 1.3;
  color: #757575;
`;

export const LabelWrap = styled.span`
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  display: block;
  margin: 0;
  padding: 0;
  padding-left: 16px;
  width: 194px;
  height: 48px;
  margin-right: 24px;

  border: 1px solid #bdbdbd;
  border-radius: 4px;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;

    line-height: 1.5;
    color: #9e9e9e;
  }

  &:placeholder-shown {
    padding-left: 16px;
    color: #757575;
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #757575;
  }
`;

export const Select = styled(Field)`
  display: block;
  margin: 0;
  padding: 0;
  padding-left: 16px;
  width: 194px;
  height: 48px;
  margin-right: 24px;

  border: 1px solid #bdbdbd;
  border-radius: 4px;

  appearance: none;
  background: url(${arrow});
  background-repeat: no-repeat;
  background-position: center right calc(0.375em + 0.55rem);
  padding-right: 16px;
  cursor: pointer;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;

    line-height: 1.5;
    color: #9e9e9e;
  }

  &:placeholder-shown {
    padding-left: 16px;
    color: #757575;
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #757575;
  }
`;

export const SelectWrap = styled.div`
  overflow: hidden;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
	padding-right: 10px;
	position: relative;
	z-index: 1;
	
	&:before {  
		content: '\25BC';
    
		position: absolute;
		font-size: 8px;
		-webkit-transform: scaleY(.7);
		-moz-transform: scaleY(.7);
		-ms-transform: scaleY(.7);
		-o-transform: scaleY(.7);
		transform: scaleY(.7);
		right: 0;
		top: 50%;
		margin-top: -4px;
		background: red;
		width: 30px;
		text-align: center;
		pointer-events: none;
		z-index: 2;
  }
	`;

export const Option = styled.option`
  padding-left: 16px;
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 194px;
  height: 48px;
  background-color: #652ad3;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 12px 36px;
  color: #ffffff;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5px;

  cursor: pointer;

  margin: 0 auto;
  transition: all 200ms linear;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const ErrorMsg = styled.span`
  position: absolute;
  bottom: -25%;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: #f44336;
`;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, getIn } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import validationSchema from '../../utils/validationSchema';
import SectionTitle from '../SectionTitle/SectionTitle';

// import toast from 'react-hot-toast';
import { addTeam } from '../../redux/teams/teamSlices';
import {
  FormWrap,
  CustomForm,
  Label,
  LabelWrap,
  Input,
  Option,
  Select,
  ErrorMsg,
  Button,
} from './Form.styled';

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid red',
    };
  }
}

const Form = () => {
  const dispatch = useDispatch();
  return (
    <FormWrap>
      <SectionTitle title={'Teams'}></SectionTitle>

      <Formik
        initialValues={{
          id: '',
          name: '',
          city: '',
          abbreviation: '',
          conference: 'east',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const { name, city, abbreviation, conference } = values;
          dispatch(
            addTeam({ id: uuidv4(), name, city, abbreviation, conference })
          );
          console.log(name);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ errors, setFieldValue }) => (
          <CustomForm autoComplete='off'>
            <Label htmlFor='name'>
              <LabelWrap>Name</LabelWrap>
              <Input
                type='text'
                name='name'
                placeholder='Chandler Bing'
                style={getStyles(errors, 'name')}
              />
              <ErrorMessage name='name' component={ErrorMsg} />
            </Label>
            <Label htmlFor='city'>
              <LabelWrap>City</LabelWrap>
              <Input
                type='text'
                name='city'
                placeholder='Yemen'
                style={getStyles(errors, 'city')}
              />
              <ErrorMessage name='city' component={ErrorMsg}></ErrorMessage>
            </Label>
            <Label htmlFor='abbreviation'>
              <LabelWrap>Abbreviation</LabelWrap>
              <Input
                type='text'
                name='abbreviation'
                placeholder='Only uppercase'
                style={getStyles(errors, 'abbreviation')}
                onChange={(e) => {
                  const value = e.target.value || '';
                  setFieldValue('abbreviation', value.toUpperCase());
                }}
              />
              <ErrorMessage
                name='abbreviation'
                component={ErrorMsg}
              ></ErrorMessage>
            </Label>

            <Label htmlFor='conference'>
              <LabelWrap>Conference</LabelWrap>
              <Select as='select' name='conference'>
                <Option value='east'>EAST</Option>
                <Option value='west'>WEST</Option>
              </Select>
            </Label>
            <Button type='submit'>Add team</Button>
          </CustomForm>
        )}
      </Formik>
    </FormWrap>
  );
};

export default Form;

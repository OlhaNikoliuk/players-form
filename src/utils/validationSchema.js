import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter team name'),
  city: Yup.string()
    .required('Please enter the city')
    .matches(/[a-zA-Z]/, 'Only letters'),
  abbreviation: Yup.string()
    .transform(function (value, originalvalue) {
      return this.isType(value), 'Only uppercase';
    })
    .required('Only uppercase'),
});

export default validationSchema;

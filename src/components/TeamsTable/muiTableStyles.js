import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Inter', sans-serif",
    width: '100%',
    overflow: 'hidden',
    paddingLeft: '0px',
    boxShadow: 'none',
    borderRadius: '6px',

    '& .MuiInputBase-root-MuiTablePagination-select': {
      border: `1px solid red`,
    },

    '& > table > thead': {
      backgroundColor: ' #ede6fb',
    },
  },
  head: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#14141e',

    backgroundColor: '#ede6fb',
    padding: '15px 0 15px 15px',
  },
  body: {
    textAlign: 'left',
    padding: '15px 0 15px 15px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#14141e',

    '&:nth-child(2), &:nth-child(3)': {
      fontWeight: '400',
    },
  },
  footer: {
    '& tr ': {
      height: '68px',
    },
  },

  pagination: {
    borderBottom: 'none',
    '& div.MuiInputBase-root': {
      width: '77px',
      height: '40px',
      border: '1px solid #EEEEEE',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& p.MuiTablePagination-displayedRows': {
      width: '900px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));

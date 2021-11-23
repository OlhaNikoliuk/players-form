import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Inter', sans-serif",
    '& .MuiInputBase-root-MuiTablePagination-select': {
      border: `1px solid red`,
    },

    '& tbody.MuiTableBody-root': {
      display: 'grid',
      maxWidth: '100vw',
      gridTemplateColumns: 'repeat(auto-fill, minmax(303px, 1fr))',
      gridGap: '24px',
      margin: '0 auto',
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

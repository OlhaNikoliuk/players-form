import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { makeStyles } from '@mui/styles';

import { ConfWrap } from './TeamsTable.styled';
import { red } from '@mui/material/colors';

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange, labelPage } = props;
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <div>{labelPage}</div>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root-MuiTablePagination-select': {
      border: `1px solid red`,
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

function TeamsTable({ teams }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const classes = useStyles();

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - teams.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      component={Paper}
      className={classes.root}
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingLeft: '0px',
        boxShadow: 'none',
        borderRadius: '6px',
      }}
    >
      <Table
        sx={{ minWidth: 500 }}
        aria-label='custom pagination table'
        style={{ width: '100%', tableLayout: 'auto' }}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 110 }}>Name</TableCell>
            <TableCell style={{ width: 131 }}>City</TableCell>
            <TableCell style={{ width: 134 }}>Abbreviations</TableCell>
            <TableCell style={{ width: 124 }}>Conference</TableCell>
            <TableCell style={{ width: '61%' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? teams.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : teams
          ).map(({ name, city, abbreviation, conference, id }) => (
            <TableRow key={id}>
              <TableCell style={{ width: 110 }} align='left'>
                {name}
              </TableCell>

              <TableCell style={{ width: 131 }}>{city}</TableCell>
              <TableCell style={{ width: 134 }} align='left'>
                {abbreviation}
              </TableCell>
              <TableCell style={{ width: 124 }} align='left'>
                <ConfWrap conf={conference.toLowerCase()}>
                  {conference}
                </ConfWrap>
              </TableCell>
              <TableCell style={{ width: '61%' }} align='left'></TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter className={classes.footer}>
          <TableRow>
            <TablePagination
              className={classes.pagination}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              labelRowsPerPage={'Items per page'}
              count={teams.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              // labelDisplayedRows={(from = page) =>
              //   `Displaying ${from.from}-${
              //     from.to === -1 ? from.count / rowsPerPage : from.to
              //   } of ${from.count} items`
              // }
              labelDisplayedRows={(from = page) => {
                return (
                  <>
                    <span className={classes.displayItems}>
                      {`Displaying ${from.from}-${
                        from.to === -1 ? from.count / rowsPerPage : from.to
                      }
                     of ${from.count} items`}
                    </span>
                    <span className={classes.displayPages}>
                      {`${page + 1} of ${Math.ceil(
                        from.count / rowsPerPage
                      )} pages`}
                    </span>
                  </>
                );
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default TeamsTable;

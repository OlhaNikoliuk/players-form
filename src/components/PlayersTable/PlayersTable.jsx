import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import TablePagination from '@mui/material/TablePagination';
import SectionTitle from '../SectionTitle/SectionTitle';

import { CardsWrap } from './PlayersTable.styled';
import PlayerCard from '../PlayerCard/PlayerCard';
import * as API from '../../services/api';
import { useStyles } from './muiTableStyles';
import { getAllPlayersList } from '../../services/api';
function TablePaginationActions(props) {
  const { page, onPageChange, labelPage } = props;
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
        // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
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

export default function PlayersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [players, setPlayers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function fetchPlayers() {
      const players = await API.getPlayersList(page + 1, rowsPerPage);
      setPlayers((state) => [...state, ...players]);
    }
    fetchPlayers();
  }, [page, rowsPerPage]);

  useEffect(() => {
    async function fetchPlayers() {
      const players = await getAllPlayersList();
      setPlayers((state) => [...state, ...players]);
    }
    fetchPlayers();
  }, []);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - players.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <CardsWrap>
      <SectionTitle title='Players' />
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
          <TableBody>
            {(rowsPerPage > 0
              ? players.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : players
            ).map((player) => (
              <TableRow key={player.id}>
                <PlayerCard
                  key={player.id}
                  firstname={player.first_name}
                  lastname={player.last_name}
                  id={player.id}
                ></PlayerCard>
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
                rowsPerPageOptions={[8, 16, 24, { label: 'All', value: -1 }]}
                labelRowsPerPage={'Items per page'}
                count={players.length}
                rowsPerPage={rowsPerPage}
                page={page > 0 && players.length <= rowsPerPage ? 0 : page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
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
    </CardsWrap>
  );
}

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import React from 'react';
import { BaseData } from '../../common/base';
import { BlocksTableHeadProps, BlocksTableProps, cyTable, Order } from './util';
import { orderBy } from 'lodash';
import { useTableStyles } from './Table.styles';

function BlocksTableHead<D extends BaseData>(props: BlocksTableHeadProps<D>) {
  const { headers, order, sortBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (
    event: React.MouseEvent<unknown>,
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map(header => (
          <TableCell
            key={String(header.value)}
            align={header.align}
            sortDirection={sortBy === header.value ? order : false}>
            <TableSortLabel
              active={sortBy === header.value}
              direction={sortBy === header.value ? order : Order.asc}
              onClick={createSortHandler(header.value)}
              data-cy={cyTable.header}>
              {header.label}
              {sortBy === header.value ? (
                <span>
                  {order === Order.desc
                    ? 'sorted descending'
                    : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function BlocksTable<D extends BaseData>(
  props: BlocksTableProps<D>,
): JSX.Element {
  const { rows, headers, prepend, append } = props;
  const [order, setOrder] = React.useState<Order>(Order.asc);
  const [sortBy, setSortBy] = React.useState<string>('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useTableStyles();

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = sortBy === property && order === Order.asc;
    setOrder(isAsc ? Order.desc : Order.asc);
    setSortBy(property);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const sortedRows = orderBy(rows, sortBy, [order]).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table size="small" data-cy={cyTable.table}>
            <BlocksTableHead
              headers={headers}
              order={order}
              sortBy={String(sortBy)}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {sortedRows.map((row, i) => {
                return (
                  <TableRow
                    className={classes.fart}
                    hover
                    tabIndex={i}
                    key={i}
                    data-cy={cyTable.row}>
                    {headers.map((header, k) => {
                      if (prepend && header.value === 'prepend')
                        return prepend(row);
                      if (append && header.value === 'append')
                        return append(row);

                      return (
                        <TableCell
                          key={`${i}-${k}`}
                          component={header.component}
                          padding={header.padding}
                          data-cy={cyTable.cell}>
                          {header.filter
                            ? header.filter(row)
                            : row[header.value as keyof D]}
                        </TableCell>
                      );
                    })}
                    {append && append(row)}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={($e, page) => handleChangePage(page)}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          data-cy={cyTable.pagination}
        />
      </Paper>
    </div>
  );
}

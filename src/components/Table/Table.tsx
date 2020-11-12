import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { getComparator, Order, stableSort } from './util';

interface Data {
  name: string;
}

interface Headers<D> {
  value: keyof D;
  label: string;
  sortable?: boolean;
  sortBy: keyof D;
  component?: 'th' | 'div';
  id?: string;
  scope?: string;
  padding?: 'none' | 'default';
  align?: 'right' | 'left';
}

interface EnhancedTableHeaderProps<D extends Data> {
  headers: Headers<D>[];
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof D
  ) => void;
  order: Order;
  orderBy: keyof D;
  prepend?: () => JSX.Element;
  append?: () => JSX.Element;
}

const EnhancedTableHead = <D extends Data>(props: EnhancedTableHeaderProps<D>) => {
  const { classes, order, orderBy, onRequestSort, headers } = props;
  const createSortHandler = (property: keyof D) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map((cell, i) => (
          <TableCell
            key={`${cell.value}-${i}`}
            align={cell.align}
            padding={cell.padding}
            sortDirection={orderBy === cell.value ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.value}
              direction={orderBy === cell.value ? order : 'asc'}
              onClick={createSortHandler(cell.value)}
            >
              {cell.label}
              {orderBy === cell.value ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

interface EnhancedTableProps<D extends Data> {
  headers: Headers<D>[];
  rows: D[];
}

export const EnhancedTable = <D extends Data>(
  props: EnhancedTableProps<D>
): JSX.Element => {
  const { headers, rows } = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof D>('name');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof D
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              headers={headers}
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort<any>(rows, getComparator(orderBy as any, order))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.name}
                    >
                      {headers.map(header => {
                        <TableCell
                          component={header.component}
                          id={header.id}
                          scope={header.scope}
                          padding={header.padding}
                        >
                          {row[header.value]}
                        </TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
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
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

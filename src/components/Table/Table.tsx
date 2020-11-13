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
import { getComparator, Order, stableSort, cyTable } from './util';
import { BaseData } from '../../common/base';

export interface Headers<D> {
  label: string;
  value?: keyof D;
  filter?: (data: D) => string;
  sortable?: boolean;
  sortBy?: keyof D;
  component?: 'th' | 'div';
  id?: string;
  scope?: string;
  padding?: 'none' | 'default';
  align?: 'right' | 'left';
  hide?: boolean;
}

export interface BlocksTableHeaderProps<D> {
  headers: Headers<D>[];
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof D
  ) => void;
  order: Order;
  orderBy: keyof D;
}

const BlocksTableHeader = <D extends BaseData>(props: BlocksTableHeaderProps<D>) => {
  const { classes, order, orderBy, onRequestSort, headers } = props;
  const createSortHandler = (property: keyof D) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map((header, i) => (
          <TableCell
            key={`BlocksTableHeader-${i}-${Math.random()}`}
            align={header.align}
            padding={header.padding}
            sortDirection={orderBy === header.value ? order : false}
          >
            {header.sortable ? 
              (<TableSortLabel
                active={orderBy === header.value}
                direction={orderBy === header.value ? order : 'asc'}
                onClick={createSortHandler(header.value as any)}
              >
                {header.label}
                {orderBy === header.value ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>) :
              (<> { header.label } </>)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

interface MakeTableRowsProps<D extends BaseData> extends BlocksTableProps<D> {
  orderBy: keyof D;
  order: Order;
  page: number;
  rowsPerPage: number;
}

const BlocksTableRows = <D extends BaseData>(props: MakeTableRowsProps<D>): JSX.Element => {
  const { headers, rows, orderBy, order, page, rowsPerPage, prepend, append, dense } = props;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <>
      { 
        stableSort<any>(rows, getComparator(orderBy as any, order))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, i) => {
  
            return (
              <TableRow
                hover
                tabIndex={i}
                key={`BlocksTableRow-${i}-${Math.random()}`}
                data-cy={cyTable.row}
              >
                { prepend && prepend(row)}
                { headers.map((header, i) => !header.hide && (
                  <TableCell
                    key={`BlocksTableCell-${i}`}
                    component={header.component}
                    id={header.id}
                    scope={header.scope}
                    padding={header.padding}
                    data-cy={cyTable.cell}
                  >
                    { header.filter && header.filter(row)}
                    { !header.filter && row[header.value]}
                  </TableCell>
                ))}
                { append && append(row)}
              </TableRow>
            );
          })}
      {emptyRows > 0 && (
        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </>
  );
};

interface BlocksTableProps<D> {
  headers: Headers<D>[];
  rows: D[];
  prepend?: (item: D) => JSX.Element;
  append?: (item: D) => JSX.Element;
  dense: boolean;
}

export const BlocksTable = <D extends BaseData>(
  props: BlocksTableProps<D>
): JSX.Element => {
  const { headers, rows, prepend, append } = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof D>('id');
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(props.dense);
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
            <BlocksTableHeader
              headers={headers}
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              <BlocksTableRows { ...{ headers, rows, prepend, append ,dense, orderBy, order, page, rowsPerPage } }/>
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

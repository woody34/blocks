import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { TableCellBaseProps } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import React from 'react';
import { BaseData } from '../../common/base';
import { cyTable, Order } from './util';
import { orderBy } from 'lodash';
export interface Headers<D> {
  label: string;
  value: string | 'prepend' | 'append';
  filter?: (data: D) => string;
  sortable?: boolean;
  order?: Order,
  component?: React.ElementType<TableCellBaseProps>;
  scope?: string;
  padding?: 'none' | 'default';
  align?: 'right' | 'left';
}

interface BlocksTableHeadProps<D extends BaseData> {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  sortBy: string;
  rowCount: number;
  headers: Headers<D>[];
}

function BlocksTableHead<D extends BaseData>(props: BlocksTableHeadProps<D>) {
  const { headers, classes, order, sortBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map(header => (
          <TableCell
            key={String(header.value)}
            align={header.align}
            sortDirection={sortBy === header.value ? order : false}
          >
            <TableSortLabel
              active={sortBy === header.value}
              direction={sortBy === header.value ? order : Order.asc}
              onClick={createSortHandler(header.value)}
            >
              {header.label}
              {sortBy === header.value ? (
                <span className={classes.visuallyHidden}>
                  {order === Order.desc ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface BlocksTableProps<D extends BaseData> {
  rows: D[],
  headers: Headers<D>[];
  prepend?: (item: D) => JSX.Element;
  append?: (item: D) => JSX.Element;
}

export function BlocksTable<D extends BaseData>(props: BlocksTableProps<D>): JSX.Element {
  const { rows, headers, prepend, append } = props;
  const [order, setOrder] = React.useState<Order>(Order.asc);
  const [sortBy, setSortBy] = React.useState<string>('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = sortBy === property && order === Order.asc;
    setOrder(isAsc ? Order.desc : Order.asc);
    setSortBy(property);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const sortedRows = orderBy(rows, sortBy, [order]).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table className={classes.table} size="small">
            <BlocksTableHead
              headers={headers}
              classes={classes}
              order={order}
              sortBy={String(sortBy)}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {sortedRows.map((row, i) => {
                return (
                  <TableRow
                    hover
                    tabIndex={i}
                    key={i}
                  >
                    { headers.map((header, k) => {
                      if (prepend && header.value === 'prepend') return prepend(row);
                      if (append && header.value === 'append') return append(row);
                        
                      return (
                        <TableCell
                          key={`${i}-${k}`}
                          component={header.component}
                          padding={header.padding}
                          data-cy={cyTable.cell}
                        >
                          { header.filter ? header.filter(row) : row[header.value as keyof D]}
                        </TableCell>
                      );
                    })}
                    { append && append(row)}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  {/* TODO: Figure out colspan */}
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
        />
      </Paper>
    </div>
  );
}

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
  }),
);
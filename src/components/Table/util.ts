import { TableCellBaseProps } from '@material-ui/core';
import { BaseData } from '../../common/base';

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

export interface BlocksTableHeadProps<D extends BaseData> {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  sortBy: string;
  rowCount: number;
  headers: Headers<D>[];
}

export interface BlocksTableProps<D extends BaseData> {
  rows: D[],
  headers: Headers<D>[];
  prepend?: (item: D) => JSX.Element;
  append?: (item: D) => JSX.Element;
}

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export const cyTable = {
  table: 'blocks-table',
  header: 'blocks-table-header',
  row: 'blocks-table-row',
  cell: 'blocks-table-cell',
};

import {RenderFunctionType} from "../Commons/commons.interface";

export type ColumnType<T = any> = {
  key: string;
  name: string;
  render?: RenderFunctionType<T>;
}

export interface TableProps<T = any> {
    columns?: ColumnType<T>[]
    dataSource?: T[]
}

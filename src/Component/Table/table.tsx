import {TableHeader, TableBody, Th, TableStyled, Tr, Thb, Trh} from './table.styled'
import {TableProps} from "./table.interface";

export const Table = (props: TableProps) => {

    return (
        <TableStyled>
            <TableHeader>
                <Trh id="1">
                {
                    props.columns?.map(column => (
                        <Th key={column.key}>
                            {column.name}
                        </Th>
                    ))
                }
                </Trh>
            </TableHeader>
            <TableBody>
                {
                    props.dataSource?.map((row,index) => (
                        <Tr key={index} id={index+''}>
                            {
                                props.columns?.map(column => (
                                    <Thb key={column.key}>
                                        {
                                            column?.render ? column.render(row) : row[column.key]
                                        }
                                    </Thb>
                                ))
                            }
                        </Tr>
                    ))
                }
            </TableBody>
        </TableStyled>
    )
}

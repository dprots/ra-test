import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useTable, useExpanded} from 'react-table';

import './BookListTable.scss';
import {getAllBooks} from '../../../../store/actions';

const BookListTable = () => {

  const books = useSelector((state: any) => state.books);
  const loading = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getAllBooks())
    }
  }, [dispatch, books.length]);

  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({getToggleAllRowsExpandedProps, isAllRowsExpanded}: any) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({row}: any) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ) : null,
      },
      {
        Header: 'Name',
        accessor: 'col1'
      },
      {
        Header: 'Authors',
        accessor: 'col2'
      },
      {
        Header: 'Pages',
        accessor: 'col3'
      },
    ],
    []
  )

  const data = books.map((book: {}) => {
    const {name, authors, numberOfPages}: any = book;
    return ({
      col1: name,
      col2: authors.toString(),
      col3: numberOfPages
    })
  })


  function Table({columns: userColumns, data}: any) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      //@ts-ignore
      state: {expanded},
    } = useTable(
      {
        columns: userColumns,
        data,
      },
      useExpanded // Use the useExpanded plugin hook
    )

    return (
      <>
        <table {...getTableProps()}>
          <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
          </thead>
          <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
        <br/>
        <div>Showing the first 20 results of {rows.length} rows</div>
        <pre>
        <code>{JSON.stringify({expanded: expanded}, null, 2)}</code>
      </pre>
      </>
    )
  }

  return (
    <>
      {/*loading ? <CircularProgress disableShrink/> :*/}
      <Table columns={columns} data={data}/>
    </>
  )
}

export default BookListTable;

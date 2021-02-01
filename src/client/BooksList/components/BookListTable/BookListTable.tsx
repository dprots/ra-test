import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useTable, useExpanded} from 'react-table';

import './BookListTable.scss';
import {getAllBooks} from '../../../../store/actions';
import SwitchView from '../SwitchView';

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
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({row}: any) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Authors',
        accessor: 'authors'
      },
      {
        Header: 'Pages',
        accessor: 'numberOfPages'
      },
    ],
    []
  )

  const data = books.map((book: {}) => {
    const {name, authors, numberOfPages}: any = book;
    return ({
      name,
      authors: authors.toString(),
      numberOfPages
    })
  })

  function Table({columns: userColumns, data, renderRowSubComponent}: any) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      visibleColumns,
    } = useTable(
      {
        columns: userColumns,
        data,
      },
      useExpanded
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
              <React.Fragment {...row.getRowProps()}>
                <tr>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
                {row
                  //@ts-ignore
                  .isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({row})}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
          </tbody>
        </table>
      </>
    )
  }


  const renderRowSubComponent = React.useCallback(
    ({row}) => {
      const index = books.findIndex((item: any) => item.name === row.values.name)
      return (
        <>
          <p>Publisher: {books[index].publisher}</p>
          <p>Media type: {books[index].mediaType}</p>
        </>
      )
    },
    [books]
  )

  const tableElement: JSX.Element = loading ? <CircularProgress disableShrink/> :
    <Table
      columns={columns}
      data={data}
      renderRowSubComponent={renderRowSubComponent}
    />

  return (
    <>
      <SwitchView/>
      {tableElement}
    </>
  )
};

export default BookListTable;

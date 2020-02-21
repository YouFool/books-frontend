import React, { Component } from "react";
import { Table } from "react-bootstrap";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Livro</th>
        <th>Autor</th>
        <th>Editora</th>
        <th>Ano</th>
        <th>Ações</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.booksData;
  if (rows && rows.length) {
    const tableBody = rows.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.publisher}</td>
          <td>{book.year}</td>
          <td>
            <button>Detalhes</button>
          </td>
        </tr>
      );
    });
    return <tbody>{tableBody}</tbody>;
  }
};

class BooksTable extends Component {
  render() {
    return (
      <Table hover="true" /*variant="dark"*/>
        <TableHeader />
        <TableBody booksData={this.props.booksData} />
      </Table>
    );
  }
}

export default BooksTable;

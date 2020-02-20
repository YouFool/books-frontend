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
    const tableBody = rows.map(livro => {
      return (
        <tr key={livro.id}>
          <td>{livro.name}</td>
          <td>{livro.author}</td>
          <td>{livro.publisher}</td>
          <td>{livro.year}</td>
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
      <Table hover="true" variant="dark">
        <TableHeader />
        <TableBody booksData={this.props.booksData} />
      </Table>
    );
  }
}

export default BooksTable;

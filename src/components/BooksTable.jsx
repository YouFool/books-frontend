import React, { Component } from "react";
import { Table } from "react-bootstrap";
import BookModal from "./BookModal";

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

  if (!rows || rows.length === 0) {
    return null;
  }

  if (rows && rows.length) {
    const tableBody = rows.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.publisher}</td>
          <td>{book.year}</td>
          <td>
            <button onClick={() => props.handleShowModal(book)}>
              Detalhes
            </button>
          </td>
        </tr>
      );
    });
    return <tbody>{tableBody}</tbody>;
  }
};

class BooksTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      selectedBook: undefined
    };
  }

  handleShowModal = book => {
    this.setState({ isShowModal: !this.state.isShowModal, selectedBook: book });
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    console.log("table props", this.props);
    return (
      <Table hover="true">
        <BookModal
          show={this.state.isShowModal}
          book={this.state.selectedBook}
          handleCloseModal={this.handleCloseModal}
        />
        <TableHeader />
        <TableBody
          booksData={this.props.booksData}
          handleShowModal={this.handleShowModal}
        />
      </Table>
    );
  }
}

export default BooksTable;

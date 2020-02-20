import React, { Component } from "react";
import BooksTable from "../components/BooksTable";
import { Container, Row } from "react-bootstrap";
import { books } from "./mock";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books
    };
  }

  render() {
    const booksData = this.state.books;

    //TODO: Criar input e button para busca de livros (acho melhor usar um input search)
    //TODO: Criar filtro por ano de publicação com input date e qtde de resultados encontrados
    //TODO: Listagem paginada
    return (
      <Container>
        <Row>
          <h1>Books List</h1>
        </Row>
        <br />
        <BooksTable booksData={booksData} />
      </Container>
    );
  }
}

export default Books;

import React, { Component } from "react";
import BooksTable from "../components/BooksTable";
import {
  Col,
  Container,
  Pagination,
  Row,
  InputGroup,
  Button,
  FormControl,
  Card,
  CardImg
} from "react-bootstrap";
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

    //TODO: Alinhar input para busca de livros
    //TODO: Criar filtro por ano de publicação com input date e qtde de resultados encontrados
    //TODO: Fazer paginação funcionar
    return (
      // <Spinner animation="border" variant="primary" />
      <Container fluid={true}>
        <Row>
          <Col>
            <Card style={{ width: 400 }}>
              <CardImg src="https://www.supero.com.br/wp-content/themes/Supero2019_fast/imagens/supero_cor.svg" />
            </Card>
          </Col>
          <Col md={{ span: "8" }}>
            <InputGroup size={"lg"}>
              <FormControl placeholder="Busque livros pelo título, autor ou ISBN" />
              <InputGroup.Append>
                <Button>Buscar</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            {/*<InputGroup size={"lg"}>*/}
            {/*  <FormControl placeholder="Busque livros pelo título, autor ou ISBN" />*/}
            {/*</InputGroup>*/}
            <h3>Filtrar ano de publicação: </h3>
          </Col>
          <Col>
            <InputGroup>
              <FormControl type={"date"} />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <FormControl type={"date"} />
            </InputGroup>
          </Col>
          <Col>
            <h3>837 Resultados encontrados</h3>
          </Col>
        </Row>
        <br />
        <BooksTable booksData={booksData} />
        <Row>{this.renderPagination()}</Row>
      </Container>
    );
  }

  renderPagination() {
    return (
      <Col md={{ offset: 4 }}>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Col>
    );
  }
}

export default Books;

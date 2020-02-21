import React, { Component } from "react";
import BooksTable from "../components/BooksTable";
import {
  Col,
  Container,
  Row,
  InputGroup,
  Button,
  FormControl,
  Card,
  CardImg
} from "react-bootstrap";
import { LIST_BOOKS } from "./booksService";
import TablePagination from "../components/TablePagination";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentPage: 0,
      totalResults: 0
    };
    this.inputSearchBooksRef = React.createRef();
  }

  componentDidMount() {
    this.loadBooks("");
  }

  loadBooks = async (filter, page) => {
    const result = await LIST_BOOKS(filter, page);
    const books = result.content;
    if (books && books.length) {
      this.setState({ books: books, totalResults: result.totalElements });
    }
  };

  handleClickBuscar = () => {
    const filter = this.inputSearchBooksRef.current.value;
    this.loadBooks(filter, this.state.currentPage);
  };

  handleClickPagination = pageNumber => {
    const nextPage = Number(pageNumber) - 1;
    this.loadBooks(this.inputSearchBooksRef.current.value, nextPage);
    this.setState({ currentPage: nextPage });
  };

  render() {
    const { currentPage, totalResults, books } = this.state;

    //TODO: Criar filtro por ano de publicação com input date
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
            <Card>
              <Card.Body>
                <InputGroup size={"lg"}>
                  <FormControl
                    placeholder="Busque livros pelo título, autor ou ISBN"
                    ref={this.inputSearchBooksRef}
                  />
                  <InputGroup.Append>
                    <Button onClick={() => this.handleClickBuscar()}>
                      Buscar
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
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
            <h3>{this.state.totalResults} Resultados encontrados</h3>
          </Col>
        </Row>
        <br />
        <BooksTable booksData={books} />
        <TablePagination
          currentPage={currentPage}
          totalResults={totalResults}
          onClickCallback={this.handleClickPagination}
        />
      </Container>
    );
  }
}

export default Books;

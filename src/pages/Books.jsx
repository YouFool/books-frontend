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
  CardImg,
  Spinner
} from "react-bootstrap";
import { LIST_BOOKS } from "./booksService";
import TablePagination from "../components/TablePagination";
import dayjs from "dayjs";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentPage: 0,
      totalResults: 0
    };
    this.inputSearchBooksRef = React.createRef();
    this.inputStartDate = React.createRef();
    this.inputEndDate = React.createRef();
  }

  componentDidMount() {
    this.loadBooks("", 0, "", "");
  }

  loadBooks = async (filter, page, startYear, endYear) => {
    const result = await LIST_BOOKS(filter, page, startYear, endYear);
    const books = result.content;
    if (books && books.length) {
      this.setState({ books: books, totalResults: result.totalElements });
    }
  };

  handleClickBuscar = () => {
    const searchFilter = this.inputSearchBooksRef.current.value;
    this.loadBooks(
      searchFilter,
      this.state.currentPage,
      this.yearValueOrEmpty(this.inputStartDate.current.value),
      this.yearValueOrEmpty(this.inputEndDate.current.value)
    );
  };

  yearValueOrEmpty(dateValue) {
    return dateValue ? dayjs(dateValue).year() : "";
  }

  handleClickPagination = pageNumber => {
    const nextPage = Number(pageNumber) - 1;
    this.loadBooks(
      this.inputSearchBooksRef.current.value,
      nextPage,
      this.yearValueOrEmpty(this.inputStartDate.current.value),
      this.yearValueOrEmpty(this.inputEndDate.current.value)
    );
    this.setState({ currentPage: nextPage });
  };

  render() {
    const { currentPage, totalResults, books } = this.state;

    return (
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
              <FormControl type={"date"} ref={this.inputStartDate} />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <FormControl type={"date"} ref={this.inputEndDate} />
            </InputGroup>
          </Col>
          <Col>
            <h3>{this.state.totalResults} Resultados encontrados</h3>
          </Col>
        </Row>
        <br />
        {this.renderTableContent(books, currentPage, totalResults)}
      </Container>
    );
  }

  renderTableContent(books, currentPage, totalResults) {
    if (!books || books.length === 0) {
      return (
        <Container className={"text-center"}>
          <Spinner animation="border" variant="primary" />
        </Container>
      );
    }

    return (
      <>
        <BooksTable booksData={books} />
        <TablePagination
          currentPage={currentPage}
          totalResults={totalResults}
          onClickCallback={this.handleClickPagination}
        />
      </>
    );
  }
}

export default Books;

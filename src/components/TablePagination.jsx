import React, { Component } from "react";
import { Col, Pagination, Row } from "react-bootstrap";

class TablePagination extends Component {
  render() {
    const totalResults = this.props.totalResults;
    const currentPage = this.props.currentPage + 1;
    const numberOfPages = Math.floor(totalResults / 10) < 1 ? 1 : Math.floor(totalResults / 10);

    let items = [];
    for (let number = 1; number <= numberOfPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={event => this.props.onClickCallback(event.target.innerHTML)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <Row>
        <Col md={{ offset: 4 }}>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {items}
            {/*<Pagination.Ellipsis />*/}
            {/*<Pagination.Item>{20}</Pagination.Item>*/}
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    );
  }
}

export default TablePagination;

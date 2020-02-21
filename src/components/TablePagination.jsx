import React, { Component } from "react";
import { Col, Pagination, Row } from "react-bootstrap";

class TablePagination extends Component {
  handlePageBrowse = (pageNumber, numberOfPages) => {
    if (pageNumber < 1) {
      return 1;
    } else if (pageNumber > numberOfPages) {
      return numberOfPages;
    } else {
      return pageNumber;
    }
  };

  getNumberOfPages(totalResults) {
    const onlyOnePage = Math.floor(totalResults / 10) < 1;
    return onlyOnePage ? 1 : Math.ceil(totalResults / 10);
  }

  render() {
    const totalResults = this.props.totalResults;
    const currentPage = this.props.currentPage + 1;
    const numberOfPages = this.getNumberOfPages(totalResults);

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
            <Pagination.First onClick={() => this.props.onClickCallback(1)} />
            <Pagination.Prev
              onClick={() =>
                this.props.onClickCallback(
                  this.handlePageBrowse(currentPage - 1, numberOfPages)
                )
              }
            />
            {items}
            <Pagination.Next
              onClick={() =>
                this.props.onClickCallback(
                  this.handlePageBrowse(currentPage + 1, numberOfPages)
                )
              }
            />
            <Pagination.Last
              onClick={() => this.props.onClickCallback(numberOfPages)}
            />
          </Pagination>
        </Col>
      </Row>
    );
  }
}

export default TablePagination;

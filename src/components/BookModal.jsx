import React from "react";
import { Button, Modal } from "react-bootstrap";
import KeyValueInput from "./KeyValueInput";

const renderBookFields = book => {
  return (
    <>
      <KeyValueInput
        id={"title"}
        title={"Título"}
        readOnly={true}
        value={book.title}
      />
      <KeyValueInput
        id={"isbn"}
        title={"Código ISBN"}
        readOnly={true}
        value={book.isbnCode}
      />
      <KeyValueInput
        id={"author"}
        title={"Autor"}
        readOnly={true}
        value={book.author}
      />
      <KeyValueInput
        id={"publisher"}
        title={"Editora"}
        readOnly={true}
        value={book.publisher}
      />
      <KeyValueInput
        id={"year"}
        title={"Ano de publicação"}
        readOnly={true}
        value={book.year}
      />
      <KeyValueInput
        id={"language"}
        title={"Idioma"}
        readOnly={true}
        value={book.language}
      />
      <KeyValueInput
        id={"weight"}
        title={"Peso em gramas"}
        readOnly={true}
        value={book.weight}
      />
      <KeyValueInput
        id={"dimension"}
        title={"Dimensões em cm³"}
        readOnly={true}
        value={book.dimension}
      />
    </>
  );
};

const BookModal = props => {
  const { book, show, handleCloseModal } = props;

  if (!show && !book) {
    return null;
  }

  return (
    <Modal show={show} centered={true} onHide={() => {}}>
      <Modal.Header>
        <Modal.Title>Dados do Livro</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderBookFields(book)}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;

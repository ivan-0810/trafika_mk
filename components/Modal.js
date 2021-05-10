import { Modal } from 'react-bootstrap';
const MyModal = ({
  modalShow,
  setModalShow,
  submitInput,
  handleSearch,
  inputVal,
}) => {
  return (
    <>
      <Modal
        size="md"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="my-modal"
        centered
      >
        <Modal.Body>
          <i className="icon loupe-red-icon mr-3" onClick={submitInput}></i>
          <input
            type="text"
            placeholder="Пребарувај..."
            value={inputVal}
            onKeyDown={handleSearch}
            onChange={handleSearch}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyModal;

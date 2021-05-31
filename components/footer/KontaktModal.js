import { Modal } from 'react-bootstrap';
import { useState } from 'react';
const MyModal = ({ modalShow, setModalShow }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [textarea, setTextarea] = useState();
  const submitForm = e => {
    e.preventDefault();
    console.log('zdravo');
    setModalShow(false);
  };
  return (
    <>
      <Modal
        size="md"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="kontact-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {' '}
            <h3>Контакт</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-wrapper mt-4">
            <h2>Испратете ни порака</h2>
            <form className="d-flex flex-column" onSubmit={submitForm}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Име и Презиме"
                  value={name}
                  className="form-control"
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Е-маил"
                  className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <textarea
                className="form-control"
                value={textarea}
                onChange={e => setTextarea(e.target.value)}
                rows="4"
                cols="50"
              >
                Порака
              </textarea>

              <span>140 карактери</span>
              <button className="btn btn-block mt-4" onClick={submitForm}>
                Испрати
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyModal;

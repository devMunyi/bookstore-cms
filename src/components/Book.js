/* eslint-disable */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemoved, BOOK_REMOVED } from '../redux/reducers/books';
import Swal from 'sweetalert2';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const { id, title, author, chapter, completed } = book;

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn mx-2 btn-success',
        cancelButton: 'btn mx-2 btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Remove',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(
            bookRemoved({ actionType: BOOK_REMOVED, actionPayload: id })
          );
          swalWithBootstrapButtons.fire(
            'Removed!',
            'Book has been removed.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Cancelled', '', 'error');
        }
      });
  };
  return (
    <li className="card book-card mt-4 mb-4" key={id}>
      <div className="row">
        <div className="col-md-5 d-flex flex-wrap">
          <div className="div">
            <h3 className="book-title">{title}</h3>
            <p className="book-author">{author}</p>

            <div className="book-card-footer">
              <button type="button" className="btn btn-outline-primary">
                Comments
              </button>
              |
              <button
                onClick={() => handleDelete(id)}
                type="button"
                className="btn btn-outline-primary"
              >
                Remove
              </button>
              |
              <button type="button" className="btn btn-outline-primary">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-3 card-col d-flex align-items-center gap-4 flex-wrap">
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid silver',
            }}
            className="progress-circle"
          />
          <p>{completed} Completed</p>
        </div>
        <div className="col-md-1 d-flex align-items-center">
          <div className="vertical-rule" />
        </div>

        <div className="col-md-3 card-col d-flex flex-column flex-wrap right-col">
          <p>Current chapter</p>
          <p className="fw-bold">{chapter}</p>
          <button type="button" className="btn btn-primary ">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;

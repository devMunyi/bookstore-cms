import Swal from 'sweetalert2';
import { checkStatusAction, CHECK_STATUS } from '../redux/reducers/categories';
import store from '../redux/configureStore';

const CategoriesPage = () => {
  const handleStatusCheck = () => {
    // dispatch action
    store.dispatch(checkStatusAction(CHECK_STATUS));

    // get updated status
    const { categories } = store.getState();

    // render modal notification
    if (categories) {
      Swal.fire({ title: categories, icon: 'info' });
    }
  };
  return (
    <div className="container-fluid page">
      <div
        style={{ minHeight: '400px' }}
        className="d-flex justify-content-center align-items-center container"
      >
        <button
          onClick={handleStatusCheck}
          type="button"
          className="btn btn-primary"
        >
          Check Status
        </button>
      </div>
    </div>
  );
};
export default CategoriesPage;

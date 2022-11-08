// initial state
const initialState = [];

// action constant
export const CHECK_STATUS = 'CHECK_STATUS';

// categories reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under contruction';

    default:
      return state;
  }
};

// action creator
export const checkStatusAction = (action) => ({
  type: action,
});

export default categoryReducer;

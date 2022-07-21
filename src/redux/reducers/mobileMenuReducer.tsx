/* eslint-disable default-param-last */
const initialState = { menuState: false };

const mobileMenuReducer = (
  state = initialState,
  action: {
    type: string;
    payload: {
      menuState: boolean;
    };
  },
) => {
  switch (action.type) {
    case 'SET_MOBILEMENU':
      return {
        menuState: action.payload.menuState,
      };
    default:
      return state;
  }
};

export default mobileMenuReducer;

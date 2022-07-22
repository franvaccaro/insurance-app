/* eslint-disable default-param-last */
const initialState = { navMenuState: false };

const navMenuReducer = (
  state = initialState,
  action: {
    type: string;
    payload: {
      navMenu: boolean;
    };
  },
) => {
  switch (action.type) {
    case 'SET_NAVMENU':
      return {
        navMenuState: action.payload.navMenu,
      };
    default:
      return state;
  }
};

export default navMenuReducer;

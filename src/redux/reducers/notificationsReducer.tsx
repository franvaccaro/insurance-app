/* eslint-disable default-param-last */
const initialState = { notifArr: [] };

const notificationsReducer = (
  state = initialState,
  action: {
    type: string;
    payload: {
      id: number;
      message: string;
      link: string;
      linktext: string;
      message2: string;
    };
  },
) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifArr: [
          ...state.notifArr,
          {
            id: action.payload.id,
            message: action.payload.message,
            link: action.payload.link,
            linktext: action.payload.linktext,
            message2: action.payload.message2,
          },
        ],
      };
    case 'DELETE_NOTIFICATION':
      return {
        ...state,
        notifArr:
          state.notifArr.filter(
            (notif: any) => notif.id !== action.payload.id,
          ),
      };
    default:
      return state;
  }
};

export default notificationsReducer;

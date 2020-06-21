export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITIES':
      return {
        ...state,
        cities: action.payload,
      };
    // case 'SEARCH':
    //   return {
    //     ...state,
    //     cities: action.payload,
    //   };
    default:
      return state;
  }
};

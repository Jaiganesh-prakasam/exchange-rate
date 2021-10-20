const initialState = {
  name: "Jai Ganesh",
  loggedIn: false,
};

export function userReducer(state = initialState, action) {
  return state;
}

// selectors
export const getName = (state) => state.user.name;
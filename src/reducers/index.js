export const history = (state = '/page1', action) => {
  switch (action.type) {
    case "PUSH_HISTORY" : {
      state = action.url;
      return state;
    }
    default:
      return state;
  }
}



export const rootReducer = (state = {
  result : 1,
  lastValues : []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result : state.result + action.payload,
        lastValues : [...state.lastValues,action.payload]
      }
      return state;
    case "SUBTRACT":
      state = {
        ...state,
        result : state.result - action.payload,
        lastValues : [...state.lastValues,action.payload]
      }
      return state;
    default:
      return state;
  }
}

export const userReducer = (state = {
  name : "max",
  age : 27
}, action) => {
  switch (action.type) {
    case "SET_NAME_FULFILLED":
      state = {
        ...state,
        name : action.payload
      }
      return state;
    case "SET_AGE":
      state = {
        ...state,
        age : action.payload
      }
      return state;
    default:
      return state;
  }
}

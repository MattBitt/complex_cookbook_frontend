// ------------------------------------
// Constants
// ------------------------------------
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const REQUEST_RECIPE = 'REQUEST_RECIPE'
export const RECIEVE_RECIPE = 'RECIEVE_RECIPE'
// ------------------------------------
// Actions
// ------------------------------------

export function requestRecipe () {
  console.log('request Recipe')
  return {
    type: REQUEST_RECIPE
  }
}

export function recieveRecipe (value) {
  console.log('recieved data')
  console.log(value)
  return {
    type: RECIEVE_RECIPE,
    payload: value
  }
}

export function fetchRecipe () {
  return (dispatch) => {
    dispatch(requestRecipe())
    

    return fetch('http://127.0.0.1:8000/api/recipes/42/?format=json')
            .then(data => data.json())
            .then(json_data => dispatch(recieveRecipe(json_data)))
  }
}
export const actions = {
  requestRecipe,
  recieveRecipe,
  fetchRecipe
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const RECIPE_ACTION_HANDLERS = {
  [REQUEST_RECIPE]: (state) => {
    return ({...state, fetching: true})
  },
  [RECIEVE_RECIPE]: (state, action) => {
    return ({...state, recipe: action.payload, fetching: false})
  }
} 

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {fetching: false, recipe: null}
export default function recipeReducer (state = initialState, action) {
  const handler = RECIPE_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

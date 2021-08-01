export const initialState = {
    term : null
};

export const SET_TERM = 'SET_TERM'

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case SET_TERM:
            return {
                ...state,
                term : action.term
            }

        default:
            return state
    }
}

export default reducer
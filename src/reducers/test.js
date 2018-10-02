export default function testReducer(state = {
    message : 'redux'
}, action) {

    switch(action.type) {
        default :
            return state
    }

    return state
}
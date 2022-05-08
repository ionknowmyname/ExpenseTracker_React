export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,  // spread operator for current state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
                // send all the transactions except the one that was deleted
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,  // spread operator for current state
                transactions: [action.payload, ...state.transactions]
                // add new transaction to existing transactions
            }
        default:
            return state;
    }
}
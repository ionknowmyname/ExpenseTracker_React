import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    // const context = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext); // destructuring context to get transactions

    const amounts = transactions.map(transaction => transaction.amount); // collect amounts to an array

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // add all amounts to 2 decimal places (.toFixed(2))

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

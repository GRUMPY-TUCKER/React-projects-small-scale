import React from 'react'

const Eleven = () => {
    let quotes = ["Do not wait for leaders; do it alone, person to person." ,"Success is not final, failure is not fatal: It is the courage to continue that counts." , "Life isn't about waiting for the storm to pass, it's about learning how to dance in the rain." , "In the end, we only regret the chances we didn't take." , "Strive not to be a success, but rather to be of value." , "Doubt kills more dreams than failure ever will.", "Success is stumbling from failure to failure with no loss of enthusiasm." ,"The only limit to our realization of tomorrow will be our doubts of today." , "Happiness is not something ready-made. It comes from your own actions." , "Courage is the most important of all the virtues because, without courage, you can't practice any other virtue consistently."]
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quote = quotes[randomIndex];
    return (
    <div>
        <h1>Quote of the Day : {quote}</h1>
    </div>
  )
}

export default Eleven
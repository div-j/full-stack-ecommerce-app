import React from 'react'

export default function Womens() {

  let getData = () => {
    let stData =  localStorage.getItem('count')
    return parseInt(stData) || 0
   }

let [count, setCount] = React.useState(getData)
React.useEffect(() => {
  localStorage.setItem('count', count)
}, [count])




  return (
    <div>Womens
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <p>{count}</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'


function Counts() {
    const [count, setcount] = useState(0)
    const [alterter, setalterter] = useState(0)
    console.log(count)
    function handleAdd() {
        console.log("count", count)
        setcount(count => count = count + 1)
    }

    function handleSub() {
        setcount(count => count = count - 1)
    }

    function hanldeAlert() {
        console.log('test')
        setTimeout(() => {

            setalterter(alterter => alterter = +1)
        }, 5000)
    }
    useEffect(() => {

        if (alterter > 0) {

            alert(count)
        }

    }, [alterter])


    return (<section>

        <header>Counter: {count}</header>
        <button onClick={handleAdd} >+</button><button onClick={handleSub}>-</button>
        <button onClick={hanldeAlert}>Alert after 5 s</button>


    </section>)
}

export default Counts
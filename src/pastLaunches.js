import React, {useEffect} from 'react'

const PastLaunches = () => {

    useEffect(() => {
        
        fetch('https://api.spacexdata.com/v4/launches/latest')
        .then(response => response.json())
        .then(data => console.log(data))
        return () => {
        }
    }, [])

    return (

        <section id="Past Launches">

            <h1>Past launches</h1>

            <div className="launch-container"></div>

        </section>
    )
}

export default PastLaunches
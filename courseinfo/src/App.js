import React from 'react'

const Header = x => {
    return (
        <div>
            <h1>{x.course}</h1>
        </div>
    )
}

const Total = x => {
    return (
        <>
            <p>Number of exercises {x.total[0].exercises + x.total[1].exercises + x.total[2].exercises}</p>
        </>
    )
}

const Part = x => {
    return (
        <>
            <p>{x.part.name} {x.part.exercises} </p>
        </>
    )
}

const Content = x => {
    return(
        <>
            <Part part={x.contents[0]}/>
            <Part part={x.contents[1]} />
            <Part part={x.contents[2]} />
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <div>
            <Header course={course.name} />
            <Content contents={course.parts}/>
            <Total total={course.parts}/>
        </div>
    )
}

export default App
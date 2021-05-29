import React, {useState} from "react";

const App = () => {
    const [good,addGood] = useState(0);
    const [neutral,addNeutral] = useState(0);
    const [bad,addBad] = useState(0);

    const handleGood = () => {
        addGood(good + 1);
    }

    const handleNeutral = () => {
        addNeutral(neutral + 1);
    }

    const handleBad = () => {
        addBad(bad + 1 );
    }

    return(
        <>
            <h1>Give feedback</h1>
            <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
            <table>
                <Statistics good={good} neutral={neutral} bad={bad}/>
            </table>
        </>
    )
}

const Buttons = ({handleGood, handleNeutral, handleBad}) => {
    return(
        <>
        <Button handleClick={handleGood} text="Good"/>
        <Button handleClick={handleNeutral} text="Neutral"/>
        <Button handleClick={handleBad} text="Bad"/>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const sum = good + neutral + bad;
    const average = (good / sum) - (bad / sum);
    const positive = good / sum + "%";

    if(sum === 0)
    {
        return(
            <>
                <tbody>
                    <tr>
                        <td>No feedback given</td>
                    </tr>
                </tbody>
            </>
        )
    }

    return(
        <>
            <Status rating="good" count={good} />
            <Status rating="neutral" count={neutral} />
            <Status rating="bad" count={bad} />
            <Status rating="all" count={sum}/>
            <Status rating="average" count={average}/>
            <Status rating="positive" count={positive}/>
        </>
        )

}

const Button = ({handleClick, text}) => {
    return(
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    )
}

const Status = (props) => {
    return(
        <>
            <tbody>
                <tr>
                    <td>{props.rating}:</td>
                    <td>{props.count}</td>
                </tr>
            </tbody>
        </>
    )
}

export default App;

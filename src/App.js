import React, {useState} from "react"

const Hello = (props) =>
{
    return(
    <>
        <p>Hello {props.name}, you are {props.age} years old</p>
    </>
    )
}

const person = {
    name: "Rune",
    age: 36
}


const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftClick = () => {
        setAll(allClicks.concat("L"));
        setLeft(left + 1);
    }
    const handleRightClicks = () => {
        setAll(allClicks.concat("R"));
        setRight(right + 1);
    }

    const [counter, setCounter] = useState(0);

    console.log("hello world: " , person)

    const name = "Derpy";
    const age = 10;

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);
    debugger

    return (
    <>
        <h1>Greetings!</h1>
        <Hello name="Rune" age={26 + 10} />
        <Hello name={name} age={age}/>
        <Test name={person.name} age={person.age}/>

        <br/><br/>

        <Display counter={counter} />
        <br/>
        <Button handleClick={increaseByOne} text={"plus"} />
        <Button handleClick={decreaseByOne}  text={"minus"} />
        <Button handleClick={setToZero} text={"zero"} />

        <br/><br/>
        {left}
        <Button handleClick={handleLeftClick} text="Left" />
        <Button handleClick={handleRightClicks} text="Right" />
        {right}
        <br/>
        <br/>
        <History allClicks={allClicks}/>
    </>
    )
}

const History = (props) => {
    if(props.allClicks.length === 0)
    {
        return(
            <>
                The app is used by pressing buttons
            </>
        )
    }
    return (
        <>
            Button press history: {props.allClicks.join(" ")}
        </>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>)

const Display = ({counter}) => {
    return (
        <>{counter}</>
    )
}

const Test = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age;

    return(
        <>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </>
    )
}

export default App
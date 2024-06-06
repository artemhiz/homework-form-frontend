import { useState } from "react"
import './App.css'
import Window from "./window";

export default function App() {
    const [opened, setOpening] = useState(false);
    return <>
        <h2>Your opinion is important for us!</h2>
        <button className="rate" onClick={() => setOpening(true)}>Lave a comment about us</button>
        <Window opened={opened} setOpening={setOpening}/>
    </>
}
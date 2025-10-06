import { useState } from "react";

export default function ColorBox({ colors }, index) {
    const randIndexGen = () => Math.trunc(Math.random() * colors.length);
    const [randomIndex, setRandomIndex] = useState(randIndexGen())

    return <div className="ColorBox" key={index}
        onClick={() => setRandomIndex(randIndexGen())}
        style={{backgroundColor: colors[randomIndex]}}>
        </div>
}
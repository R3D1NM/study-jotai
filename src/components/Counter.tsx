import { atom, useAtom } from "jotai"

const counter = atom(0);

const Counter = () => {
    const [count, setCounter] = useAtom(counter)

    const onClick = () => {
        setCounter((prev) => prev + 1)
    }

    return (
        <div className="flex justify-center">
            <h3 className="text-xl p-3">Counter: {count}</h3>
            <button className="bg-slate-200 border-black border-1 rounded-lg m-2 p-1" onClick={onClick}> Click </button>
        </div>
    )
}

export default Counter
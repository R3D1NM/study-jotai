


import { atom, useAtom } from "jotai"

const textAtom = atom("readonly atoms");
const uppercase = atom((get) => get(textAtom).toUpperCase());

const Uppercase = () => {
    const [lowercaseText, setLowercaseText] = useAtom(textAtom)
    const [uppercaseText] = useAtom(uppercase)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLowercaseText(e.target.value)
    }

    return (
        <div className="flex justify-center flex-col">
            <div className="flex justify-center">
                <h3 className="text-xl p-3">Enter any words:</h3>
                <input type="text" value={lowercaseText} onChange={handleChange} className="bg-slate-200 border-black border-1 rounded-lg m-2 p-2" />
            </div>
            <h3 className="text-3xl p-3">{uppercaseText}</h3>    
        </div>
    )
}

export default Uppercase




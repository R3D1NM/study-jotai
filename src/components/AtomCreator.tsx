import { Atom, WritableAtom, atom, useAtom } from "jotai"


const createCountIncAtoms = (initialValue:number): [Atom<number>,WritableAtom<null,[],void>]=> {
    const baseAtom = atom(initialValue)
    const valueAtom = atom((get) => get(baseAtom))
    const incAtom = atom(null, (get, set) => set(baseAtom, (c) => c + 1))
    return [valueAtom, incAtom]
}

const [fooAtom, fooIncAtom] = createCountIncAtoms(0)
const [barAtom, barIncAtom] = createCountIncAtoms(0)

const AtomCreator = () => {
    const [fooCount] = useAtom(fooAtom)
    const [, incFoo] = useAtom(fooIncAtom)
    const [barCount] = useAtom(barAtom)
    const [, incBar] = useAtom(barIncAtom)

    const onClick1 = () => {
        incFoo()
    }
    
    const onClick2 = () => {
        incBar()
    }

    return (
        <div className="flex justify-center">
            <div className="border rounded-md m-1">
                <h3 className="text-xl p-3">Counter1: {fooCount}</h3>
                <button className="bg-slate-200 border-black border-1 rounded-lg m-2 p-1" onClick={onClick1}> Click </button>
            </div>
            <div className="border rounded-md m-1">
                <h3 className="text-xl p-3">Counter2: {barCount}</h3>
                <button className="bg-slate-200 border-black border-1 rounded-lg m-2 p-1" onClick={onClick2}> Click </button>
            </div>
        </div>
    )
}

export default AtomCreator
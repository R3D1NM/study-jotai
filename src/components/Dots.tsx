import { atom, useAtom } from "jotai";

const dotsAtom = atom<[number, number][]>([]);

const drawingAtom = atom(false);

const handleMouseDownAtom = atom(
    null,
    (get, set) => {
        set(drawingAtom, true);
    }
);

const handleMouseUpAtom = atom(null, (get, set) => {
    set(drawingAtom, false);
});

const handleMouseMoveAtom = atom(
    null,
    (get, set, update:[number,number]) => {
        if (get(drawingAtom)) {
            set(dotsAtom, (prev) => [...prev, update]);
        }
    }
);

const SvgDots = () => {
    const [dots] = useAtom(dotsAtom);
    return (
        <g>
        {dots.map(([x, y], index) => (
            <circle cx={x} cy={y} r="2" fill="#aaa" key={index} />
        ))}
        </g>
    );
};

const SvgRoot = () => {
    const [, handleMouseUp] = useAtom(
        handleMouseUpAtom
    );
    const [, handleMouseDown] = useAtom(
        handleMouseDownAtom
    );
    const [, handleMouseMove] = useAtom(
        handleMouseMoveAtom
    );
    return (
        <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 100vw 100vh"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={(e:React.MouseEvent<SVGSVGElement, MouseEvent>) => {
            handleMouseMove([e.clientX, e.clientY]);
        }}
        >
        <rect width="100vw" height="100vh" fill="#eee" />
        <SvgDots />
        </svg>
    );
};

const Dots = () => {
    return (
        <div className="flex justify-center">
        <SvgRoot />
        </div>
    );
};

export default Dots;

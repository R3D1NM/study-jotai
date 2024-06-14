import { useAtom } from 'jotai';
import {atomWithStorage} from 'jotai/utils';

const theme = atomWithStorage('dark', false);

const ThemeSwitcher = () => {
    const [appTheme, setAppTheme] = useAtom(theme);
    const handleClick = () => setAppTheme(!appTheme);

    return (
        <div className="flex justify-center min-w-[30vw]">
            <div className='p-3' >
                <div className={appTheme? 'bg-black text-white': 'bg-slate-200 text-black'}>
                    <h3 className="text-xl p-3">Theme Switcher</h3>
                </div>
            </div>
            <button className="bg-slate-200 border-black border-1 rounded-lg m-4 p-2" onClick={handleClick}> {appTheme? 'DARK': 'LIGHT'} </button>
        </div>
    )
}

export default ThemeSwitcher
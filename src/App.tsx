import Counter from "./components/Counter";
import './App.css';
import ThemeSwitcher from "./components/ThemeSwitcher";
import Uppercase from "./components/Uppercase";

function App() {
  return (
    <div className="flex flex-col justify-center  items-center">
      <header className="flex bg-[#282c34] min-h-[10vh] flex-col align-middle justify-center min-w-[100vw] items-center">
        <h1 className="text-3xl text-white">Jotai</h1>
      </header>
      <div className="w-[80vw] flex justify-center flex-col align-middle text-center">
        {/* <h2 className="text-2xl">1. Counter</h2>
        <Counter /> */}
        {/* <h2 className="text-2xl">2. Theme Switcher</h2>
        <ThemeSwitcher /> */}
        <h2 className="text-2xl">3. Uppercase</h2>
        <Uppercase />
      </div>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="container w-max-[1440px] mx-auto">
      <div className="mt-[170px] flex text-[56px]  items-center relative">
        <div className="before-gradient"></div>
        <h1 className=" text-[#42567A] leading-[67.2px] font-sans w-[353px] h-[134px]  pl-[83px]">
          Исторические даты
        </h1>
      </div>
      <div className=" mt-[96px] ml-[217px] mr-[250px] w-[973px] h-[160px] text-[200px] flex justify-between leading-[160px] font-sans">
        <span className="text-[#3877EE]">2014</span>
        <span className="text-[#EF5DA8]">2022</span>
      </div>
    </div>
  );
}

export default App;

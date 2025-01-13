import "./App.css";

// const data = [
//   {
//     id: 1,
//     year: 2015,
//     description:
//       "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
//   },
//   {
//     id: 2,
//     year: 2016,
//     description:
//       "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
//   },
//   {
//     id: 3,
//     year: 2017,
//     description:
//       "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
//   },
// ];

function App() {
  return (
    <div className=" w-[1440px] ml-[320px] h-[1080px] ">
      <div className="pt-[170px] flex text-[56px]  items-center relative">
        <div className="before-gradient"></div>
        <h1 className=" text-[#42567A] leading-[67.2px] font-sans w-[353px] h-[134px]  pl-[83px]">
          Исторические даты
        </h1>
      </div>
      <div className=" mt-[96px] ml-[217px] mr-[250px] w-[973px] h-[160px] text-[200px] flex justify-between leading-[160px] font-sans">
        <span className="text-[#3877EE]">2015</span>
        <span className="text-[#EF5DA8]">2022</span>
      </div>
      <div className="mt-[137px] pl-[80px]">
        <div className="font-normal text-[14px] leading-[18.12px] text-[#42567A]">
          06/06
        </div>
        <div className="flex mt-[20px] gap-5 ">
          <button>
            <img src="./Group 3277.png" alt="back" />
          </button>
          <button>
            <img src="./Group 3276.png" alt="forward" />
          </button>
        </div>
      </div>
      <div className="flex mt-[50px] h-[135px] gap-[80px] w-[1440px]  pl-[80px]">
        {/* {data.map((item) => {
          return (
            <div>
              <h2>{item.year}</h2>
              <p>{item.description}</p>
            </div>
          );
        })} */}
        <div className="w-[320px] ">
          <h2 className="text-[#3877EE] font-normal text-[25px] leading-[30px] font-bebas">
            2015
          </h2>
          <p className="leading-[30px] text-[20px] font-normal font-sans text-[#42567A] mt-[15px]">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </p>
        </div>
        <div className="w-[400px] ">
          <h2 className="text-[#3877EE] font-normal text-[25px] leading-[30px] font-bebas">
            2016
          </h2>
          <p className="leading-[30px]  text-[20px] font-normal font-sans text-[#42567A] mt-[15px]">
            Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
            галактик, получившую обозначение GN-z11
          </p>
        </div>
        <div className="w-[320px] mr-0">
          <h2 className="text-[#3877EE] font-normal text-[25px] leading-[30px] font-bebas">
            2017
          </h2>
          <p className="leading-[30px]  text-[20px]  font-normal font-sans text-[#42567A] mt-[15px]">
            Компания Tesla официально представила первый в мире электрический
            грузовик Tesla Semi
          </p>
        </div>
        <div className="-ml-[80px] flex-1 relative">
          <button className="absolute w-[40px] h-[40px] top-[41px] left-[80px] z-10">
            <img
              src="/Ellipse 335.png"
              alt="button"
              className="absolute top-0 left-0"
            />
            <img
              src="/Vector 2.svg"
              alt="arrow"
              className="absolute left-[18px] top-[15px]"
            />
          </button>
        </div>
      </div>
      <div className="absolute top-[215px] left-[772px] w-[536px] h-[530px]">
        <img src="./Mask Group.png" alt="mase" />
        <img
          src="./Group 2345.png"
          alt="six"
          className="absolute top-0 left-[348px]"
        />
        <p className="absolute top-[13px] left-[371px] text-[20px] leading-[30px] text-[#42567A]">
          6
        </p>
        <p className="absolute top-[13px] left-[424px] text-[20px] font-bold leading-[30px] text-[#42567A]">
          Наука
        </p>
      </div>
    </div>
  );
}

export default App;

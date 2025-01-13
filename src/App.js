import "./App.css";

const data = [
  {
    id: 1,
    year: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    id: 2,
    year: 2016,
    description:
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
  },
  {
    id: 3,
    year: 2017,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
];

function App() {
  return (
    <div className="container w-max-[1440px] ml-[320px]">
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
      <div className="mt-[137px]">
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
      <div className="flex mt-[50px] h-[135px] gap-[80px]">
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
          <p className="leading-[30px] text-[20px] font-normal font-sans text-[#42567A]">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </p>
        </div>
        <div className="w-[400px] ">
          <h2 className="text-[#3877EE] font-normal text-[25px] leading-[30px] font-bebas">
            2016
          </h2>
          <p className="leading-[30px]  text-[20px] font-normal font-sans text-[#42567A]">
            Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
            галактик, получившую обозначение GN-z11
          </p>
        </div>
        <div className="w-[320px] ">
          <h2 className="text-[#3877EE] font-normal text-[25px] leading-[30px] font-bebas">
            2017
          </h2>
          <p className="leading-[30px]  text-[20px]  font-normal font-sans text-[#42567A]">
            Компания Tesla официально представила первый в мире электрический
            грузовик Tesla Semi
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

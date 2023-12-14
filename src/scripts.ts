const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver",
    mileage: 25000,
    fuelType: "Gasoline",
    features: {
      navigation: true,
      sunroof: false,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2021-03-15", type: "Oil Change", mileage: 15000 },
      { date: "2022-06-20", type: "Brake Inspection", mileage: 22000 },
    ],
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2019,
    color: "Blue",
    mileage: 18000,
    fuelType: "Gasoline",
    features: {
      navigation: false,
      sunroof: true,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2020-12-10", type: "Tire Rotation", mileage: 12000 },
      { date: "2021-09-25", type: "Air Filter Replacement", mileage: 16000 },
    ],
  },
  {
    make: "Ford",
    model: "Escape",
    year: 2021,
    color: "Red",
    mileage: 15000,
    fuelType: "Hybrid",
    features: {
      navigation: true,
      sunroof: true,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2021-05-20", type: "Battery Check", mileage: 12000 },
      { date: "2022-10-15", type: "Fluid Top-up", mileage: 18000 },
    ],
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2018,
    color: "Black",
    mileage: 30000,
    fuelType: "Gasoline",
    features: {
      navigation: false,
      sunroof: false,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2019-02-28", type: "Transmission Flush", mileage: 20000 },
      { date: "2020-11-10", type: "Spark Plug Replacement", mileage: 28000 },
    ],
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2022,
    color: "White",
    mileage: 12000,
    fuelType: "Electric",
    features: {
      navigation: true,
      sunroof: true,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2022-03-12", type: "Charging System Check", mileage: 8000 },
      { date: "2023-01-05", type: "Software Update", mileage: 11000 },
    ],
  },
  {
    make: "BMW",
    model: "X5",
    year: 2021,
    color: "Gray",
    mileage: 20000,
    fuelType: "Diesel",
    features: {
      navigation: true,
      sunroof: true,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2021-08-22", type: "Oil Change", mileage: 15000 },
      { date: "2022-11-18", type: "Brake Pad Replacement", mileage: 18000 },
    ],
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    color: "Silver",
    mileage: 22000,
    fuelType: "Gasoline",
    features: {
      navigation: true,
      sunroof: true,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2021-01-30", type: "Tire Rotation", mileage: 18000 },
      { date: "2022-05-15", type: "Air Filter Replacement", mileage: 20000 },
    ],
  },
  {
    make: "Audi",
    model: "Q5",
    year: 2022,
    color: "Black",
    mileage: 15000,
    fuelType: "Gasoline",
    features: {
      navigation: true,
      sunroof: true,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2022-09-10", type: "Battery Check", mileage: 12000 },
      { date: "2023-03-25", type: "Fluid Top-up", mileage: 18000 },
    ],
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "Blue",
    mileage: 10000,
    fuelType: "Electric",
    features: {
      autopilot: true,
      fullSelfDriving: false,
      summonFeature: true,
    },
    maintenanceHistory: [
      { date: "2023-02-15", type: "Charging Cable Replacement", mileage: 8000 },
      { date: "2023-07-20", type: "Software Update", mileage: 9500 },
    ],
  },
  {
    make: "Volkswagen",
    model: "Golf",
    year: 2017,
    color: "Green",
    mileage: 35000,
    fuelType: "Diesel",
    features: {
      navigation: false,
      sunroof: false,
      bluetooth: true,
    },
    maintenanceHistory: [
      { date: "2018-04-05", type: "Transmission Flush", mileage: 25000 },
      { date: "2019-09-12", type: "Spark Plug Replacement", mileage: 32000 },
    ],
  },
];

const carsWrapper = document.querySelector<HTMLDivElement>(".js-cars__wrapper"); // -3.punkts. Norādam, ko gribam selektot.

// -2.punkts. Ar forEach() palīzību norādam, ko gribam redzēt iekš carsWrappera, kad ielādēsies lapa.
/*
cars.forEach((car) => {     
  carsWrapper.innerHTML += `   
  <div class="car">
    <span class="car__brand">Brand: ${car.make}</span>
    <span class="car__model">Model: ${car.model}</span>
    <span class="car__release-Year">Year: ${car.year}</span>
  </div>
  `;
});
Šis vēlāks būs ņemts kā template, kad veidosim daudzreiz izmantojamu funkciju 5.punktā. Un ar to brīdi šo daļu var iekomentēt vai dzēst.
 */

type Cars =
  typeof cars; /* 5.1. Taisam tipu priekš Cars, lai no masīva cars, kas ir definēts augstāk, ieliktu tā tipu iekš const renderCars. Šīir TS fiška jeb ir veids, kā ātri var izveidot tipu. Vēl varētu klasiski kopēt datus no masīva objekta, kas nebūtu ātri, un tas izskatītos šādi: 
type Cars = {
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  fuelType: string;
  features: {
    navigation: boolean;
    sunroof: boolean;
    bluetooth: boolean;
    autopilot?: undefined;
    fullSelfDriving?: undefined;
    summonFeature?: undefined;
  };
  maintenanceHistory: {
    date: string;
    type: string;
    mileage: number;
  }[];
}  */

const renderCars = (carsArr: Cars) => {
  // 5. Veidojam funkciju, lai izvairītos no DRY (do not repeat yourself), t.i.lai aizvietotu kodu, kas izveido html elementus un ieliek tos wraperī (3 reizes, t.i.kad ielādē lapu, kad nospiež vienu btn, kad nospiež otru btn). Kombinācijā (carsArr: Cars) "carsArr" te ir brīvi piešķirts nosaukums (var bū anything) un "Cars" ir tips, ko definējām 5.1.punktā un kas obligāti jānorāda savādāk TS rādīs kļūdu.
  carsArr.forEach((car) => {
    carsWrapper.innerHTML += `   
    <div class="car">
      <span class="car__brand">Brand: ${car.make}</span>
      <span class="car__model">Model: ${car.model}</span>
      <span class="car__release-Year">Year: ${car.year}</span>
    </div>
    `;
  });

  /*   Zemāk parastās funkcijas izveide, lai veicot 5-o punktu labāk saprastu, kā definēt const renderCars. Ka funkcijas iekavās jānorāda tas, kas mainīsies:
  const sum = (num1: number, num2: number) => {
    return num1 + num2;
  }
  sum(10, 12); */
};

renderCars(cars); // 6. Tiek izsaukts sākotnējais masīvs, izantojot iepriekš definētu funkciju.

// -1.punkts. Selektojam abas pogas
const buttonLatest =
  document.querySelector<HTMLButtonElement>(".js-button__latest");
const buttonOldest =
  document.querySelector<HTMLButtonElement>(".js-button__oldest");

// 0.punkts. Pievienojam eventListeneri pogai buttonOldest
buttonOldest.addEventListener("click", () => {
  // Darbību plāns uzdevumam: pie pogas nospiešanas lapā jāparādās kartiņām, kas sasortētas augošā secībā pēc year.
  // 1.Klonēt masīvu cars
  // 2. Sortēt klonēto masīvu pēc year
  // 3. Izņemt esošās kartiņas (lai pēc pogas nospiešanas nevis liek klāt vēl vienu masīvu, bet vispirms iztīra/ novāc original masīvu, un tikai pēc tam rāda sortēto)
  // 4. Izveidot html elementus un ielikt cars wraperī
  const clonedCars = [...cars]; // 1.punkts
  clonedCars.sort((a, b) => a.year - b.year); // 2.punkts
  console.log(clonedCars); // Pārbaudam konsolē, vai rāda klonēto masīvu

  carsWrapper.innerHTML = ""; // 3.punkts

  renderCars(clonedCars); // 4.punkts. Skat.augstāk, kā veidota funkcija renderCars()
});

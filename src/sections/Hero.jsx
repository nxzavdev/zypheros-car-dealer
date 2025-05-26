import carImage from '../assets/future-car.webp';

export default function Hero() {
  return (
    <section className="h-screen">
      <picture className="h-full w-full">
        <img
          className="block h-full object-cover object-[20%_85%] w-full"
          src={carImage}
          loading="lazy"
          alt="Hero Image"
        />
      </picture>
      <div className="absolute top-0 left-0 w-full flex flex-col justify-between h-full bg-black/25">
        <div className="pt-40">
          <h1 className="text-7xl text-center mb-6">Zenith V</h1>
          <h2 className="text-3xl text-center">Crafted for the Next Century</h2>
        </div>

        <div className="flex lg:justify-between flex-col lg:flex-row gap-y-8 p-8 bg-linear-to-t from-black to-transparent">
          <div className="flex gap-x-8">
            <div>
              <span className="text-4xl">Up to 620</span>
              <span>km</span>
              <p className="text-sm text-neutral-400">Autonomy (WLTP)</p>
            </div>
            <div>
              <span className="text-4xl">1.9</span>
              <span>s</span>
              <p className="text-sm text-neutral-400">
                0 - 100km/h Acceleration
              </p>
            </div>
            <div>
              <span className="text-4xl">30</span>
              <span>min</span>
              <p className="text-sm text-neutral-400">Charging Time</p>
            </div>
          </div>

          <div className="flex w-full lg:w-fit items-center gap-x-8 text-center">
            <a href="#" className="w-full lg:w-fit lg:px-8 py-3 font-[sans-serif] bg-amber-50 text-black rounded-full">
              Drive Test
            </a>
            <a href="#" className="w-full lg:w-fit lg:px-8 py-3 font-[sans-serif] bg-[#F11A7B] rounded-full">
              Order Now
            </a>
          </div>
        </div>
      </div>
      <div className="h-full"></div>
    </section>
  );
}

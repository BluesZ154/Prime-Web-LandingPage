import { processItems } from "../constant/constant";

const Process = () => {
  return (
    <section className="py-2 mb-8 bg-white">
      <div className="text-center mb-24">
        <p className="uppercase text-blue-600 font-bold">
          Our Process
        </p>

        <h2 className="text-3xl font-bold mt-4">
          From Idea to Impact
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Proses yang transparan agar project berjalan lancar.
        </p>
      </div>
   
      <div className="relative max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-7">
          {processItems.map((item) => {
            const Icon = item.logo;

            return (
              <div key={item.number} className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
                  <div
                    className="
                     w-20
                     h-20
                     rounded-full
                     bg-blue-600
                     border-[8px]
                     border-white
                     shadow-xl
                     flex
                     items-center
                     justify-center
                    "
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-16 w-[2px] h-10 bg-blue-200"></div>
                <div
                  className="
                    pt-28
                    pb-8
                    px-6
                    h-full
                    rounded-3xl
                    border
                    border-gray-100
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2 
                    hover:shadow-xl
                  "
                >
                  <span className="text-5xl font-bold text-blue-100">
                    {item.number}
                  </span>

                  <h3 className="text-2xl font-semibold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-4 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
import Image from "next/image";

const formatServiceName = (serviceName) => {
  return serviceName
    .toLowerCase()
    .replace(/\s+and\s+/gi, "&")
    .replace(/\s*&\s*/g, "&")
    .replace(/\s+/g, "-");
};

const servicesCore = [
  { name: "Buy & Sell", totalImages: 16 },
  { name: "Catering Services", totalImages: 3 },
  { name: "PPE and Corporate Clothing", totalImages: 4 },
  { name: "Signage", totalImages: 3 },
  { name: "Fuel Lubricants", totalImages: 2 },
  { name: "Fire Protection Equipment", totalImages: 0 },

  { name: "Industrial Gearboxes", totalImages: 0 },
];

const servicesSecondary = [
  { name: "Logistics", totalImages: 5 },
  { name: "Plant Hire", totalImages: 10 },
  { name: "Office Space Hire", totalImages: 2 },
];

const renderServiceImages = (serviceName, totalImages) => {
  if (!totalImages || totalImages <= 0) return null;

  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(
      <div key={i} className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image
          src={`/images/${formatServiceName(serviceName)}${i}.jpeg`}
          alt={`${serviceName} ${i}`}
          fill
          className="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`grid ${
        totalImages > 4 ? "grid-cols-3" : "grid-cols-2"
      } gap-1 overflow-y-auto pr-2`}
      style={{ maxHeight: "400px" }}
    >
      {images}
    </div>
  );
};

const Services = () => {
  return (
    <section className="mt-14 bg-white">
      {/* Banner */}
      <div className="relative h-64 md:h-72 bg-gray-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#004aad] drop-shadow-sm mb-2">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Explore the wide range of services we provide
        </p>
      </div>

      {/* Core Services */}
      <div className="px-6 md:px-20 bg-gray-50 py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-10 text-[#004aad] text-center">
          Core Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesCore.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 h-[450px] flex flex-col overflow-hidden"
            >
              {/* Images Section */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="grid grid-cols-1 gap-1">
                  {renderServiceImages(service.name, service.totalImages)}
                </div>
              </div>

              {/* Service Name */}
              <div className="p-2 text-center bg-white">
                <h3 className="text-lg font-semibold text-[#ff9900]">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Services */}
      <div className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold mb-10 text-[#004aad] text-center">
          Secondary Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesSecondary.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 h-[450px] flex flex-col overflow-hidden"
            >
              {/* Images Section */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="grid grid-cols-1 gap-1">
                  {renderServiceImages(service.name, service.totalImages)}
                </div>
              </div>

              {/* Service Name */}
              <div className="p-2 text-center bg-white">
                <h3 className="text-lg font-semibold text-[#ff9900]">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

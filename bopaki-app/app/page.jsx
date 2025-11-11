import Image from "next/image";

const Home = () => {
  return (
    <main className=" bg-background text-black font-sans mt-10">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Faint background logo */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/BopakiminingLogo.jpg"
            alt="Bopaki Mining Services Logo"
            fill
            priority
            className="object-contain object-center"
          />
        </div>

        {/* Overlay content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#ff9900]">
            Bopaki Mining Services (Pty) Ltd
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed">
            A 100% black woman-owned enterprise providing high-quality services
            and solutions to the mining and engineering sectors.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 md:px-20 bg-background/10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#004aad]">
            Who We Are
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <span className="font-semibold text-black">
              Bopaki Mining Services (Pty) Ltd
            </span>{" "}
            is a 100% black woman-owned company providing professional services
            and solutions to the mining and engineering sectors. Founded by{" "}
            <strong>Keikanetswe Teme</strong>, a visionary leader who has broken
            barriers in a male-dominated industry, the company stands as a
            symbol of excellence and empowerment.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            BMS is built on the pillars of efficiency, reliability, integrity,
            and professionalism — delivering quality, cost-effective, and
            dependable services to clients across industries.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 md:px-20 bg-[#004aad]/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-blue-100 shadow-lg p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[#ff9900]">Vision</h3>
            <p className="text-gray-800 leading-relaxed">
              To build and maintain a reputation of service excellence,
              commitment, and integrity — fostering lasting partnerships with
              clients and suppliers alike.
            </p>
          </div>

          <div className="bg-background/10 border border-blue-100 shadow-lg p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[#ff9900]">Mission</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-800 leading-relaxed">
              <li>
                Deliver prompt and efficient services to minimize downtime.
              </li>
              <li>
                Be recognized locally and internationally for service excellence
                in mining and engineering.
              </li>
              <li>
                Build a sustainable, world-class company benefiting all
                stakeholders.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 px-6 md:px-20 bg-background/10 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#004aad]">
            Director
          </h2>
          <div className="bg-[#004aad]/10 border border-blue-100 shadow-md rounded-2xl p-8 inline-block">
            <p className="text-xl font-semibold mb-2 text-black">
              Ms. Keikanetswe Teme
            </p>
            <p className="text-gray-800 leading-relaxed max-w-2xl mx-auto">
              Ms. Teme holds a Master’s Degree in Business Administration,
              providing her with a unique strategic and managerial advantage in
              the mining and engineering industries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

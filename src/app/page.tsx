import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-8 font-sans">
      <Navbar />
      <section className="section-1 flex justify-center max-w-[900px] mx-auto items-center mt-16 gap-8">
        
        {/* Text and Grid */}
        <div className="text-and-grid flex-col items-center content-center max-w-[800px] w-fit">
          <h1 className="text-text-primary font-semibold text-6xl mb-8">
            Best way to start your day
          </h1>
          <div className="grid grid-cols-5 grid-rows-2 gap-4 max-w-[400px] text-center">
            <div className="col-span-3 bg-black/80 py-8 rounded-xl font-semibold text-2xl">
              <span>1K+ reviews</span>
            </div>

            <div className="col-span-2 row-span-2 bg-primary rounded-xl text-2xl font-semibold"></div>

            <div className="col-span-3 bg-primary py-8 rounded-xl flex justify-around px-4">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.png"
                  alt="rating star"
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Coffee Cup */}


    <div className="relative z-10">
      <Image 
        className="absolute -top-8 -right-12 blur-[1.5px] z-0"
        src="/bean-1.png"
        alt="coffee bean"
        width={128}
        height={128}
      />

      <Image 
        className="absolute -bottom-8 -left-4 blur-[0px] z-20 rotate-45"
        src="/bean-1.png"
        alt="coffee bean"
        width={100}
        height={100}
      />

      <Image 
        className="absolute top-[50%] -right-4 -rotate-3 blur-[1.2px] z-20"
        src="/bean-2.png"
        alt="coffee bean"
        width={64}
        height={64}
      />

      <Image 
        className="absolute top-0 rotate-32 -left-8 blur-[0px] z-0"
        src="/bean-2.png"
        alt="coffee bean"
        width={82}
        height={82}
      />

      <Image
        className="relative z-10"
        src="/coffee-cup.png"
        alt="coffee cup"
        width={288}
        height={288}
      />
    </div>

      </section>
      <div className="bg-primary mt-32 py-6 uppercase text-3xl font-bold text-text-secondary text-center"><span className="">20% off your first order</span></div>
      <section className="min-h-screen mt-32">
        {/* main container */}
        <div className="grid rounded-3xl grid-rows-1 grid-cols-2 gap-2 px-12 text-text-primary w-full max-w-[800px] border-primary border-2 mx-auto py-12">
          {/* left side */}
          <div className="">
            <div className="flex gap-4 items-center">
              <h1 className="text-3xl font-bold">simple coffee</h1>
              <span className="text-2xl text-text-primary/80 font-medium inline-block text-center self-center">4.3</span>
            </div>
              <p className="mt-2 text-xl font-semibold text-text-primary/80">very simple coffee you should defently try, it’s so good you’ll never forget about it!</p>
              <div className="flex mt-8 gap-8 items-center">
                <span className="text-3xl font-semibold">9.99$</span>
                <button className="bg-primary text-text-secondary text-xl py-3 font-medium px-6 rounded-2xl">add to cart</button>
              </div>
          </div>

            {/* right side */}
          <div>dw

          </div>

        </div>
      </section>
    </div>
  );
}

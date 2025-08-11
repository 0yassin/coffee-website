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
        <div>
          <Image
            src="/coffee-cup.png"
            alt="coffee cup"
            width={288}
            height={288}
            
          />
        </div>
      </section>
      <section className="min-h-screen">

      </section>
    </div>
  );
}

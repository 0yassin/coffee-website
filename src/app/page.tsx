import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-8 font-sans">
      <Navbar />
      <section className="section-1 flex justify-around max-w-[800px] mx-auto items-center  mt-16 ">

        <div className="text-and-grid flex-col items-center content-center max-w-[800px]  w-fit ">
          <h1 className="text-text-primary font-semibold text-6xl mb-8 ">Best way to start your day</h1>
            <div className="grid grid-cols-5 grid-rows-2 gap-4 max-w-[400px] text-center">
              <div className=" col-span-3 row-span-1 bg-black/80 py-8 rounded-xl font-semibold text-2xl ">1K+ reviews</div>
              <div className="col-span-2 row-span-2 bg-primary rounded-xl">hi</div>
              <div className="col-span-3 row-span-1 bg-primary py-8 rounded-xl justify-around flex px-4">
                <img src="/star.png" alt="star" className="h-8" />
                <img src="/star.png" alt="star" className="h-8" />
                <img src="/star.png" alt="star" className="h-8" />
                <img src="/star.png" alt="star" className="h-8" />
                </div>
          </div>

        </div>
        <div className="cup"></div>
        <div className="px-8">
          <img src={"/coffee-cup.png"} className=""></img>
        </div>
      </section>
      
    </div>
  );
}

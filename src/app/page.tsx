import Image from "next/image";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Mar from "./Mar";
import Sec3 from "./Sec3";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <Sec1/>
      <Sec2/>
      <Mar/>
      <Sec3/>
    </div>
  );
}

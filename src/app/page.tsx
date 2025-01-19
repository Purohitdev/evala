import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sec1 from "@/components/Sec1";
import Sec2 from "@/components/Sec2";
import Mar from "@/components/Mar";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Sec6 from "@/components/Sec6";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] min-w-full font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <Sec1/>
      <Sec2/>
      <Mar/>
      <Sec3/>
      <Sec4/>
      <Sec6/>
    </div>
  );
}

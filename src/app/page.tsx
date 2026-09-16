import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Membership from "@/components/Membership";
import Clubs from "@/components/Clubs";
import SupportRow from "@/components/SupportRow";
import Contest from "@/components/Contest";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Membership />
        <Clubs />
        <SupportRow />
        <Contest />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

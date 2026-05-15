import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import Scroll from "@/components/ui/Scroll";
import BenefitsList from "@/components/sections/BenefitsList";
import CoursesList from "@/components/sections/CoursesList";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main>
        <Scroll />
        <BenefitsList />
        <Gallery />
        <CoursesList />
        <Location />
        <LeadForm />
      </main>

      <Footer />


    </>
  );
}

import BenefitsList from "@/components/sections/BenefitsList";
import CoursesList from "@/components/sections/CoursesList";
import Gallery from "@/components/sections/Gallery";
import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import Scroll from "@/components/ui/Scroll";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";
import LeadForm from "@/components/sections/LeadForm";







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
      <footer>
        <Footer />
      </footer>

    </>
  );
}

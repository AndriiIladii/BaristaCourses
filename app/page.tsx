import BenefitsList from "@/components/BenefitsList";
import CoursesList from "@/components/CoursesList";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Scroll from "@/components/Scroll";
import Location from "@/components/Location";
import Footer from "@/components/Footer";







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
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  );
}

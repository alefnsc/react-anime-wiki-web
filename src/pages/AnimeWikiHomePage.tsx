import NavbarMenu from "../components/NavbarMenu";
import Footer from "../components/Footer";
import HomeCarousel from "../components/HomeCarousel";

export default function AnimeWikiHomePage() {
  return (
    <>
      <NavbarMenu search={false} />
      <div className="my-10 m-auto max-w-[1200px] ">
        <HomeCarousel />
      </div>
      <Footer />
    </>
  );
}

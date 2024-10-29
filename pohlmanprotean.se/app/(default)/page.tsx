export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import About from "@/components/about";
import Services from "@/components/services";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";
import HeroHome from "@/components/hero-home";
import PageIllustration from "@/components/page-illustration";
export default function Home() {
  return (
    <>
    <PageIllustration />
    <HeroHome />
      <About />
      <Services />
      <Technologies />
      <Contact />
    </>
  );
}

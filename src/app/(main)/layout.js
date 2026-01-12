import Navbar from "@/components/commonComponents/Navbar"; // Apna sahi path check kar lein
import Footer from "@/components/commonComponents/Footer"; // Apna sahi path check kar lein

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

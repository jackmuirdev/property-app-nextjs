import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Find the best property for you",
  description: "Find the best property for you",
  keywords: "property, real estate, buy, sell, rent",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;

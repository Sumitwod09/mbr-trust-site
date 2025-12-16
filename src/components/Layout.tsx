import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyContactButtons from "./StickyContactButtons";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <StickyContactButtons />
    </div>
  );
};

export default Layout;

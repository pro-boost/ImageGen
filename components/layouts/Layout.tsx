import { ReactComponentProps } from "@/interfaces/index";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: ReactComponentProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

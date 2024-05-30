import Footer from "./components/Footer";
import Header from "./components/Header";

function MainLayout({ children }: { children: any }): JSX.Element {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div className=" ">{children}</div>
      <Footer/>
    </div>
  );
}

export default MainLayout;

import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      <main className="container mt-10 border border-zinc-300">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;

import AppRoutes from "./AppRoutes";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;

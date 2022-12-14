import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Sidebar from "./sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div className="container mx-auto py-10 flex flex-col gap-4">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}

import Head from "next/head";
import Search from "../components//activity/Search";
import Activities from "../components/activity/Activities";
import DbState from "../context/DbContext/DbState";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/layout/Navbar";

//* Check TypeORM data get

//* Create simple form

//* Add submit fetch with pagination

//* Populate page

export default function Home() {
  const bgStyle = {
    background: "url(bg2.svg)",
    backgroundSize: "cover",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: "-1",
  };

  return (
    <>
      <Head>
        <title>MajorcaFun - Demo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={bgStyle}></div>
      <ToastContainer />
      <div className="container h-auto px-4 mx-auto">
        <Navbar />
        <div className="grid grid-cols-12 gap-5 pt-0 pb-16 md:pt-8 lg:pt-8 xl:pt-8">
          <DbState>
            <Search />
            <Activities />
          </DbState>
        </div>
      </div>
    </>
  );
}

import classNames from "classnames";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Search from "../components//activity/Search";
import Activities from "../components/activity/Activities";
import Navbar from "../components/layout/Navbar";
import DbState from "../context/DbContext/DbState";

export default function Home() {
  const bgClasses = classNames(
    "fixed w-screen h-screen",
    "z-n1 bg-cover bg-no-repeat bg-center"
  );

  const containerClasses = classNames("container h-auto px-4 mx-auto");

  const mainDivClasses = classNames(
    "grid grid-cols-12 gap-5",
    "pt-0 pb-16 md:pt-8 lg:pt-8 xl:pt-8"
  );

  return (
    <>
      <Head>
        <title>MajorcaFun</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={bgClasses} style={{ backgroundImage: `url(bg2.svg)` }} />
      <ToastContainer />
      <div className={containerClasses}>
        <Navbar />
        <div className={mainDivClasses}>
          <DbState>
            <Search />
            <Activities />
          </DbState>
        </div>
      </div>
    </>
  );
}

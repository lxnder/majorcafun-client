import classNames from "classnames";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Search from "../components//activity/Search";
import Activities from "../components/activity/Activities";
import Navbar from "../components/layout/Navbar";
import DbState from "../context/DbContext/DbState";
import WelcomeScreen from "../components/overlay/WelcomeScreen";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [overlayIsActive, setOverlayIsActive] = useState(true);

  const bgImgClasses = classNames(
    "w-screen h-screen",
    "fixed top-0 left-0",
    "bg-cover bg-no-repeat bg-center",
    "z-n2"
  );

  const bgGradientClasses = classNames(
    "w-screen h-screen",
    "fixed top-0 left-0",
    "bg-gradient",
    "z-n1"
  );

  const containerClasses = classNames("container h-auto mx-auto px-4");

  const mainDivClasses = classNames(
    "grid grid-cols-12",
    "pt-0 pb-16 md:pt-8 lg:pt-8 xl:pt-8"
  );

  return (
    <>
      <Head>
        <title>MajorcaFun</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ToastContainer />

      <AnimatePresence>
        {overlayIsActive && (
          <WelcomeScreen onClick={() => setOverlayIsActive(false)} />
        )}
      </AnimatePresence>

      {!overlayIsActive && (
        <>
          <div className={bgGradientClasses} />
          <div
            className={bgImgClasses}
            style={{ backgroundImage: `url(blur.png)` }}
          />
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
      )}
    </>
  );
}

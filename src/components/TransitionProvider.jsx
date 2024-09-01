"use client";
import { motion, AnimatePresence, easeOut, delay } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName} // This will trigger the animation when pathName changes
        className="w-full h-full bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="z-60 w-screen h-screen bg-black rounded-b-[100px]"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: easeOut }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-defaul z-50 w-fit h-fit"
          initial={{opacity:1 }}
          animate={{opacity:0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
            {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="z-40 w-screen fixed h-screen bg-black rounded-t-[100px] bottom-0"
          initial={{ height: "100vh" }}
          animate={{ height: "0vh",transition:{delay:0.5} }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

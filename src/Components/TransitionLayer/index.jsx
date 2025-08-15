import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./TransitionLayer.css"
import { Typography } from "@mui/material";

export const TransitionLayer = (props) => {
  const wrapperVariants = {
    initial: { height:0, y: "200vh" },
    animate: { height:'300vh', y: '-110vh', transition: { delay: 0, duration: 0.3 } },
    exit: { height:0, y: "-300vh", transition: { delay: 0, duration: 1 } },
  };
  const [reload, setReload] = useState(false);
  const [animate, setAnimate] = useState("animate");
  useEffect(() => {
    setReload(true);
    setAnimate("animate");
    setTimeout(() => setAnimate("exit"), 400);
    setTimeout(() => setReload(false), 2000);
  }, []);
  return reload ? (
    <div style={{overflow:'hidden', width:'100vw'}}>
    <motion.div
      className="transition-layer"
      variants={wrapperVariants}
      initial={"initial"}
      animate={animate}
      transition={{ type: "easeInOut" }}
    >
      <div className="inner">
      <div className="inner-inner"></div>
      </div>
    </motion.div>
    </div>
  ) : (
    <></>
  );
};

export const AnimationLayout = ({ children }) => {
  return (
    <>
      {/* <TransitionLayer /> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.3 },
        }}
        exit={{ opacity: 0, y: 300, transition: { duration: 0.5 } }}
        // variants={pageVariants}
        // transition={pageTransition}
      >
        {children}
      </motion.div>
    </>
  );
};
"use client";
import SplineWrapper from "./components/SplineWrapper";
import styles from "./page.module.scss";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMousePosition from "./components/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 600 : 40;

  return (
    <main className={styles.main}>

      <div className="w-full h-full flex justify-start items-center bg-[#121405]">
        <p className="text-9xl font-extrabold text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pl-36">
          REDUCE <br/>
          FOOD WASTE <br/>
          SAVE <br/>
          CLIMATE.
        </p>
      </div>

      <div className="w-full h-full" >    
        <div className="fixed top-0 left-0 w-dvw h-dvh -z-10">
          <SplineWrapper />
        </div>

        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="text-9xl font-bold text-center absolute"
          >
            Potential waste by an Apple
          </p>
        </motion.div>
        <div className={styles.body}>
          <p className="text-9xl font-extrabold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            The Journey of an <br /> <span>Apple</span>
          </p>
        </div>

        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="text-9xl font-bold text-center absolute"
          >
            Potential waste by an Apple
          </p>
        </motion.div>
        <div className={styles.body}>
          <p className="text-9xl font-extrabold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            The Journey of an <br /> <span>Apple</span>
          </p>
        </div> 

        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="text-9xl font-bold text-center absolute"
          >
            Potential waste by an Apple
          </p>
        </motion.div>
        <div className={styles.body}>
          <p className="text-9xl font-extrabold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            The Journey of an <br /> <span>Apple</span>
          </p>
        </div>

        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="text-9xl font-bold text-center absolute"
          >
            Potential waste by an Apple
          </p>
        </motion.div>
        <div className={styles.body}>
          <p className="text-9xl font-extrabold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            The Journey of an <br /> <span>Apple</span>
          </p>
        </div>

      </div>
    </main>
  );
}

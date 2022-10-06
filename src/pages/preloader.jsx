import React from "react";
import "../scss/preloader.scss";

import { motion } from "framer-motion";


const name = "Darshan";

function Preloader() {
  return (
      <section className="preLoader">
        {/* Logo */}
        <motion.span
            initial={{opacity: 0, scale: 0.92, y: 25}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 2, delay: 0.2}}
        >
          <Svg w="120" h="115.355" />
        </motion.span>

        {/* Line */}
        <motion.span
            initial={{scale: 0.1}}
            animate={{scale: 1}}
            transition={{duration: 1.6}}
        >
          <div className="line"></div>
        </motion.span>

        {/* Name */}
        <h1>
        {
            name.split("").map((letter, index) => {
                return(
                    <motion.span
                        key={index}
                        initial={{opacity: 0, scale: 0.92, y: 25}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{duration: 2, delay: 0.2 + (index * 0.15)}}
                    >
                    {letter}
                    </motion.span>
                );
            }
       ,) }
        </h1>

        {/* Portfolio */}
        <motion.p
            initial={{opacity: 0.1, y: 80}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.6, delay: 0.2}}
        >
            PORTFOLIO
        </motion.p>

      </section>
  );

}


function Svg({w, h}) {
    return(
        <>
            <svg className="loaderLogo" width={w} height={h} viewBox="0 0 120 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_33_2)">
                <path d="M12.1724 41.1433L0 57.6328L12.1724 74.1224L24.3437 57.6328L12.1724 41.1433Z" fill="#CADEFC"/>
                <path d="M115.415 80.6036C112.358 88.0045 108.175 94.1179 102.866 98.9445C97.3954 104.093 90.9601 108.115 83.5591 111.011C76.1582 113.907 67.8729 115.355 58.7023 115.355H31.9149V97.0141H58.4611C64.5745 97.0141 70.1251 96.0488 75.1126 94.1182C79.9392 92.1876 84.122 89.4526 87.6616 85.9129C91.2013 82.3732 93.9363 78.1904 95.8669 73.3639C97.7976 68.5373 98.7629 63.228 98.7629 57.4361C98.7629 51.8052 97.7976 46.5765 95.8669 41.7499C93.9363 36.7624 91.2013 32.6599 87.6616 29.4421C84.4441 26.0634 80.261 23.3287 75.1129 21.2368C69.9648 19.3062 64.4142 18.3409 58.4614 18.3409H31.9152V0H58.7026C67.2295 0 75.4345 1.52834 83.3182 4.5853C90.7191 7.32026 97.2347 11.4228 102.866 16.8931C108.336 21.8806 112.519 27.9943 115.415 35.234C118.472 42.6349 120 50.1964 120 57.9189C120 66.2851 118.472 73.8467 115.415 80.6039V80.6036Z" fill="#CADEFC"/>
                </g>
                <defs>
                <clipPath id="clip0_33_2">
                <rect width={w} height={h} fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </>
    );
}


export default Preloader;
export {Svg};
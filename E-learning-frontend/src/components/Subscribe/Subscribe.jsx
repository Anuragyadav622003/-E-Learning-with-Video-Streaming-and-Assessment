// import React from 'react';
// import { FaBell } from "react-icons/fa";
// import BgImage from "../../components/Subscribe/sub.png";

// import {motion} from "framer-motion";
// const bgStyle ={
//     backgroundImage:`url{$(BgImage)}`,
//     backgroundRepeat:"no-repeat",
//     backgroundSize:"cover",
//     backgroundPosition:"center"
// };

// const Subscribe = () => {
//   return (
//     <div className='bg-[#f4f4f4] '>
//     <div  style={bgStyle} className='container py-24 md:py-28 '>
//     <div className='flex flex-col justify-center'>
//     <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
//     <h1 className='text-4xl font-bold !leading-snug'>
//     100k Student are Learning From us
//     </h1>
//      <p>There are few good feedback obtained from Students</p>
//      <a href='#' className='primary-btn !mt-8 inline-flex items-center gap-4 group'>Subscribe Now <FaBell className='group-hover:animate-bounce'/></a>

//     </div>
//     </div>
//     </div>
    
//     </div>
//   )
// }

// export default Subscribe


import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../components/Subscribe/sub.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
//   backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
//   backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className=" text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              1000+ Students are learning from us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima
            </p>
            <a
              href=""
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200 bg-pink-300" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Subscribe;


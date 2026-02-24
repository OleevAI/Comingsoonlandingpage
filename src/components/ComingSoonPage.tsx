import { motion } from "motion/react";
import { EmailForm } from "./EmailForm";
import svgPaths from "../imports/svg-u9cvc46aq1";

export function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex">
      {/* Left side - Dark section with logo */}
      <div className="w-full lg:w-[42%] bg-[#121d32] relative flex items-center justify-center px-8 lg:px-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-start"
        >
          {/* Logo */}
          <div className="mb-8">
            <svg className="w-60 h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 241 77.6743">
              <g>
                <g>
                  <path d={svgPaths.pb8c9f00} fill="white" />
                  <path d={svgPaths.p6efd5c0} fill="white" />
                  <path d={svgPaths.p2c9a6f00} fill="white" />
                  <path d={svgPaths.pc499f80} fill="white" />
                  <path d={svgPaths.p5ef5400} fill="white" />
                </g>
                <path d={svgPaths.p23b10e80} fill="#D9D9D9" />
                <path d={svgPaths.pb202400} fill="url(#paint0_linear)" />
                <path d={svgPaths.p3c30d700} fill="#66A321" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="25.8463" x2="66.0688" y1="9.89768" y2="86.9732">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-base lg:text-lg max-w-xs"
          >
            Something revolutionary is on the horizon
          </motion.p>
        </motion.div>

        {/* Copyright footer */}
        <p className="absolute bottom-8 left-8 text-sm text-white/40">
          © Copyrights Greelogix | All Rights Reserved
        </p>
      </div>

      {/* Right side - White section with form */}
      <div className="hidden lg:block w-[58%] bg-white relative rounded-tl-[38px] rounded-bl-[38px] shadow-2xl">
        <div className="flex items-center justify-center min-h-screen px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-xl"
          >
            {/* Coming Soon heading */}
            <h1 className="text-[#2d2d2d] text-5xl font-normal mb-6 text-center">
              Coming Soon
            </h1>

            {/* Description */}
            <p className="text-[#2d2d2d] text-lg leading-relaxed text-center mb-12 max-w-lg mx-auto">
              The next generation of financial intelligence for investment professionals. Built for the future.
            </p>

            {/* Email Form */}
            <EmailForm />
          </motion.div>
        </div>
      </div>

      {/* Mobile view - stacked layout */}
      <div className="lg:hidden absolute inset-0 bg-white flex flex-col">
        <div className="flex-1 bg-[#121d32] flex items-center justify-center px-8 relative overflow-hidden">
          {/* Mobile animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            {/* Mobile Logo */}
            <div className="mb-6 flex justify-center">
              <svg className="w-48 h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 241 77.6743">
                <g>
                  <g>
                    <path d={svgPaths.pb8c9f00} fill="white" />
                    <path d={svgPaths.p6efd5c0} fill="white" />
                    <path d={svgPaths.p2c9a6f00} fill="white" />
                    <path d={svgPaths.pc499f80} fill="white" />
                    <path d={svgPaths.p5ef5400} fill="white" />
                  </g>
                  <path d={svgPaths.p23b10e80} fill="#D9D9D9" />
                  <path d={svgPaths.pb202400} fill="url(#paint0_linear_mobile)" />
                  <path d={svgPaths.p3c30d700} fill="#66A321" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_mobile" x1="25.8463" x2="66.0688" y1="9.89768" y2="86.9732">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-white text-base px-4">
              Something revolutionary is on the horizon
            </p>
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md"
          >
            <h1 className="text-[#2d2d2d] text-4xl font-normal mb-4 text-center">
              Coming Soon
            </h1>
            <p className="text-[#2d2d2d] text-base leading-relaxed text-center mb-8">
              The next generation of financial intelligence for investment professionals. Built for the future.
            </p>
            <EmailForm />
          </motion.div>
        </div>

        {/* Mobile copyright */}
        <p className="text-sm text-black/40 text-center pb-4 px-4">
          © Copyrights Greelogix | All Rights Reserved
        </p>
      </div>
    </div>
  );
}

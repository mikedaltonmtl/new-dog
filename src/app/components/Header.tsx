"use client";

import React from 'react';
import { motion } from "framer-motion";


export default function Header() {
  return (
    <motion.header
      className="w-full h-48 bg-green-400 flex items-center justify-center"
      initial={{ x: '-100%' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="m-0"
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
      >
        <h1 className="topHeader text-9xl text-center">NEW DOG</h1>
      </motion.div>
    </motion.header>
  );
}

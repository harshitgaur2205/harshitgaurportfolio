"use client"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  return (
    <div className="notification bg-transparent w-[fit-content] h-[40px] flex items-center justify-center rounded-[4px] ">
      <button
        onClick={() => {
          setNotifications((pv) => [generateRandomNotif(), ...pv]);
        }}
        className="notification text-sm text-white bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all font-medium px-3 py-2 rounded"
      >
        Notification
      </button>
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      <FiCheckSquare className=" mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default SlideInNotifications;

const generateRandomNotif = () => {
  const data = {
    text: `Don't Forget to check my Resume`,
  };

  return data;
};
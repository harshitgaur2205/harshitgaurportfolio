import React from "react";
import { useState } from 'react';
import useMeasure from "react-use-measure";
import {  useDragControls} from "framer-motion";
import {  useMotionValue} from "framer-motion";
import {  useAnimate} from "framer-motion";
import {  motion} from "framer-motion";

const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid h-[20px] w-[fit-content]  place-content-center bg-neutral-950">
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
      >
        Find Out 
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200 text-slate-400 ">
            Fueling My Growth: A Lifelong Learner's Journey
          </h2>
          <p>
          I'm a BTech student at the Vellore Institute of Technology, and I'm passionate about harnessing the power of data and technology to tackle challenges and create innovative solutions.  I believe in the power of a growth mindset, constantly seeking opportunities to learn and expand my skillset. Every day is a chance to push my boundaries and become a better version of myself.
          </p>
          <p>
          My academic journey has led me to explore the exciting world of data analytics. I'm also well-versed in web development, having built projects that showcase my ability to translate ideas into reality. But my interests extend beyond the technical realm. I'm a problem-solver at heart, driven by the thrill of untangling complex issues and finding creative solutions.
          </p>
          <p>
          When I'm not immersed in code or data, you'll find me expressing myself creatively. I find joy in rapping and songwriting, where I can weave words into narratives and tap into emotions. Basketball provides a healthy outlet for my competitive spirit and teamwork skills, while acting allows me to explore different personalities and perspectives. These diverse pursuits fuel my overall growth and bring a sense of balance to my life.
          </p>
          <p>
          As you navigate through my portfolio, you'll gain insights into my technical capabilities, problem-solving approach, and unwavering focus on career growth.  Welcome to my world, where learning is a constant, and the journey towards excellence never ends!
          </p>
          
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default  DragCloseDrawerExample
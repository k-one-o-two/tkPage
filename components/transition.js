import { useContext } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useRouter } from "next/router";
import gsap from "gsap/dist/gsap";

import TransitionContext from "../context/transition";

const TransitionComponent = ({ children }) => {
  const router = useRouter();
  const { toggleCompleted } = useContext(TransitionContext);
  return (
    <SwitchTransition>
      <Transition
        key={router.pathname}
        timeout={500}
        onEnter={(node) => {
          toggleCompleted(false);
          gsap.set(node, {
            autoAlpha: 0,
            scale: 1,
            yPercent: -100,
            opacity: 0,
          });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(node, { autoAlpha: 1, yPercent: 0, duration: 0.25 })
            .to(node, { opacity: 1, scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={(node) => {
          gsap
            .timeline({ paused: true })
            .to(node, { opacity: 0, scale: 0.8, duration: 0.25 })
            .to(node, { yPercent: 100, autoAlpha: 0, duration: 0.25 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;

"use client";

import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import _ScrollTrigger from 'gsap/ScrollTrigger';

export default function SplineWrapper() {
  const apple = useRef();
  const camera = useRef();
  const tree = useRef();
  const truck = useRef();
  const crate = useRef()

  gsap.registerPlugin(ScrollTrigger)

  function onLoad(spline) {
    apple.current = spline.findObjectByName('Apple_Model');
    camera.current = spline.findObjectByName('Camera');
    tree.current = spline.findObjectByName('Tree');
    truck.current = spline.findObjectByName('Truck');
    crate.current = spline.findObjectByName('Crate');
  
    setTimeout(() => {
      animateApple();
    }, 4500);
  }
  
  function animateApple() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part2",
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      })
      .to(apple.current.position, {
        x: apple.current.position.x + 60,
        z: tree.current.position.z + 20,
        duration: 1,
        ease: "none"
      })
      .to(tree.current.position, {
        x: tree.current.position.x + 60,
        y: tree.current.position.y,
        z: tree.current.position.z + 20,
        duration: 1,
        ease: "none",
      }, "<");

      gsap
      .timeline({
        scrollTrigger: {
          trigger: "#part3",
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      })
      .to(apple.current.position, {
        x: apple.current.position.x - 80,
        z: apple.current.position.z + 50,
        duration: 1,
        ease: "none"
      })
      .to(truck.current.position, {
        x: truck.current.position.x - 50,
        y: truck.current.position.y + 20,
        duration: 1,
        ease: "none",
      }, "<");
  }

  return (
    <div className='w-full h-dvh'>
      <Spline
        scene="https://prod.spline.design/DwFAYXJyneWm2UEQ/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
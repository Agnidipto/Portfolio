// scrollTo.js

import { animateScroll } from "./animateScroll";

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

const getElementPosition = (element) => element.offsetTop;

const scrollTo = ({ id = null, ref = null, top = null, duration = 3000 }) => {
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  var element = null
  var targetPosition = null
  if(ref) {
    element = ref.current 
    targetPosition = getElementPosition(element)
  }
  else if(id) {
    element = document.getElementById(id)
    targetPosition = getElementPosition(element)
  }
  else if(top != null) {
    targetPosition = top
  }
  else {
    logError();
    return;
  }

  animateScroll({
    targetPosition,
    initialPosition,
    duration
  });
};

export default scrollTo
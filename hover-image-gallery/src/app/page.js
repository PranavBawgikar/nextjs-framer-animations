'use client'
import styles from "./page.module.css";
import { useRef } from "react";

export default function Home() {

  let refs = []
  let currentIndex = 0
  let steps = 0
  let nbOfImages = 0
  let maxNumberOfImages = 8

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e

    steps += Math.abs(movementX) + Math.abs(movementY)

    if(steps >= currentIndex * 150) {
      moveImage(clientX, clientY)

      if(nbOfImages == maxNumberOfImages) {
        removeImage()
      }
    }

    if(currentIndex == refs.length) {
      currentIndex = 0 // On reaching the last image, reset the currentIndex to 0 to loop back to the first image
      steps = -150 // Setting the steps to -150 on reaching the last image, so that an image does not immediately appear on the next mouse event move
    }
  }

  const moveImage = (x, y) => {
    const currentImage = refs[currentIndex].current
    currentImage.style.left = x + "px"
    currentImage.style.top = y + "px"
    currentImage.style.display = "block"
    currentIndex++
    nbOfImages++
    setZIndex()
  }

  const setZIndex = () => {
    const images = getCurrentImages()
    for(let i = 0; i < images.length; i++) {
      images[i].style.zIndex = i
    }
  }

  const removeImage = () => {
    const images = getCurrentImages()
    images[0].style.display = "none"
    nbOfImages--
  }

  // Returns an array of the current img elements shown
  const getCurrentImages = () => {
    let images = []
    let indexOfFirst = currentIndex - nbOfImages
    for(let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i
      if(targetIndex < 0) targetIndex += refs.length
      images.push(refs[targetIndex].current)
    }
    return images
  }

  return (
    // Adding a mouse event on the main container for the images to move along with the cursor
    <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
      {
        // Since there are 19 images we create an Array of 19 empty elements and map it
        // For each image, we create a new ref and add it to a refs array
        [... Array(19).keys()].map( (_, index) => {
          const ref = useRef(null)
          refs.push(ref)
          return <img key={index} ref={ref} src={`/images/${index}.jpg`}></img>
        })
      }
    </main>
  );
}

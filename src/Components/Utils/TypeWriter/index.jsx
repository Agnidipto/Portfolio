import { useEffect, useState, useMemo } from "react";
import './TypeWriter.css'


function TypeWriter({content = [], writeSpeed = 1000, deleteSpeed = 200, waitTime = 4000, delay = 0}) {

  const [displayedMessage, setDisplayedMessage] = useState('')
  const [isWriting, setIsWriting] = useState(false) // 1 is for writing, 0 is for deleting

  // const delay = ms => new Promise(res => setTimeout(res, ms));

  const [contentIndex, setContentIndex] = useState(0)

  var intervalToClear = null

  const [startDelay, setStartDelay] = useState(delay)

  function startWriting() {

    if (content.length === 0) {
      return null
    }

    var index = 0
    const writing = content[contentIndex]

    const interval = setInterval(() => {

      if (writing === undefined) {
        clearInterval(interval);
        if (contentIndex >= content.length-1) {
          setContentIndex(0)
        }
        else {
          setContentIndex(contentIndex => contentIndex + 1)
        }
        setIsWriting(false)
      }

      else if (index >= writing.length) {
        clearInterval(interval);
        if (content.length > 1) {
          setTimeout(() => {
            if (contentIndex >= content.length-1) {
              setContentIndex(0)
            }
            else {
              setContentIndex(contentIndex => contentIndex + 1)
            }
            
            setIsWriting(false)
  
          }, waitTime)
        }
        
      }
      else {
        setDisplayedMessage((displayedMessage) => {
          // console.log(displayedMessage + content[index])
          return displayedMessage + writing[index]})
        index ++;
      }

    }, writeSpeed)

    intervalToClear = interval
  }

  function startDeleting() {

    var index = displayedMessage.length
    // console.log(content.length)

    if (content.length === 1 && displayedMessage === content[0]) {
      return null
    }

    const interval = setInterval(() => {
      
      if (index === 0 ) {
        clearInterval(interval);
        setTimeout(() => {
          setIsWriting(true)
        }, 200)
      }
      else {
        setDisplayedMessage((displayedMessage) => { 
          return displayedMessage.substring(0, index-1)})
        index --;
      }

    }, deleteSpeed)
  }

  useEffect(() => {
    if (startDelay === 0) {
      if (isWriting) startWriting()
      else startDeleting()
    }
    
  }, [isWriting])

  useEffect(() => {

    console.log(content[0])

    clearInterval(intervalToClear)
    if (content.length > 0) {
      setContentIndex(0)
      setTimeout(() => {
        setStartDelay(0)
        if(isWriting) setIsWriting(false)
        else startDeleting()
      }, startDelay)
    }   
     
  }, [content])

  return <>
    {displayedMessage.split('\n').map((part, index) => 
    <span key={part}>{part}{index === displayedMessage.split('\n').length - 1 ? null : <br/>} </span>)}
    <span class="blinking-cursor">|</span>
  </>
}

function MemoizedTypeWriter({content = [], writeSpeed = 1000, deleteSpeed = 200, waitTime = 4000, delay = 0}) {
  const Child = useMemo(() => 
  <TypeWriter content={content} writeSpeed = {writeSpeed} deleteSpeed = {deleteSpeed} waitTime = {waitTime} delay={delay}/>, 
  [content, writeSpeed, deleteSpeed, waitTime, delay])

  return <>{Child}</>
}

export default MemoizedTypeWriter;
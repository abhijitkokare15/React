import { useRef } from 'react'

function Video() {

  const videoRef = useRef(null)

  function start() {
    videoRef.current.play()
  }

  function stop() {
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  function pause() {
    videoRef.current.pause()
  }

  return (
    <>
      <video
        src="/sih.mp4"
        width="600"
        height="400"
        ref={videoRef}
      >
        Irumudi
      </video>

      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
      </div>
    </>
  )
}

export default Video
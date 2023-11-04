// import video from "../../assets/waves.mp4"
import Login from "./Login"

export const Home = () => {
  return (
    <>
      {/* <div className="background-video">
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div id="homepage_content" className="view">
        <Login></Login>
      </div>
    </>
  )
}

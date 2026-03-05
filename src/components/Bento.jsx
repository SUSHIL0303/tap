import "../styles/Bento.css";
import Image2 from "../assets/img2.png"
import Image3 from "../assets/img3.png"

export default function Bento() {
  return (
    <div className="bento">
      <div className="bento-container">

        <div className="bento-first-row">
          <div className="bento-box">
            <img src={Image3} className="bento-img" />
          </div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"25px", backgroundColor:"white", border:"2px solid black"}} className="bento-box">
            <h1>Save space,<br></br>Live smarter</h1>
          </div>
        </div>

        <div className="bento-second-row">

          <div className="bento-left">
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}} className="bento-box">
              <h1 style={{color:"white", fontFamily:"Roboto,sans-serif"}}>Small apartment, <br></br><span style={{color:"#1e35ff"}}>big ideas</span> !</h1>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"white", border:"2px solid black"}} className="bento-box">
              <h1 style={{color:"black", fontFamily:"Roboto,sans-serif"}}>Compact living <br></br>made easy.</h1>
            </div>
          </div>

          <div className="bento-box">
            <img style={{width:"100%", height:"100%", objectfit:"fill"}} src={Image2}/>
          </div>

        </div>

      </div>
    </div>
  );
}
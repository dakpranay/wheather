import "../styles/templetMain.css"
import Templet from "./templet";
function TempletMain(props){
 
    return(
        <div className="body">
            <div className="templetbody">
            <h3 className="location">{props.d.location}</h3>
           <div className="innertempletBody">
           <div className="data1" >
              <p className="otherData">{"Temperature : "+props.d.temperature}</p>
              <p className="otherData">{"Humidity : "+props.d.humidity}</p>
            </div>
            <div className="data2">
              <p className="otherData">{"Air Quality Index : "+props.d.airQualityIndex}</p>
              <p className="otherData">{"Day : "+props.d.day}</p>
            </div>
           </div>
           </div>
        </div>
    )
}
export default TempletMain;
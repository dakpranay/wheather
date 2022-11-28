import Header from "../common/header"
import Templet from "../common/templet";
import TempletMain from "../common/templetMain";
import Main from "../common/Main";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function Homebody(){
    let data={
        location:'Jaipur',
        temperature: 101,
        humidity:91,
        airQualityIndex:1,
        day:'Monday'
    }

    let newData=[{
        location:'Jaipur',
        temperature: 102,
        humidity:92,
        airQualityIndex:2,
        day:'Tuesday'
    },
    {
        location:'Jaipur',
        temperature: 103,
        humidity:93,
        airQualityIndex:3,
        day:'Thrusday'
    },
    {
        location:'Jaipur',
        temperature: 104,
        humidity:94,
        airQualityIndex:4,
        day:'Friday'
    },
    {
        location:'Jaipur',
        temperature: 105,
        humidity:95,
        airQualityIndex:5,
        day:'Saturday'
    },
    {
        location:'Jaipur',
        temperature: 106,
        humidity:96,
        airQualityIndex:6,
        day:'Sunday'
    }
]

    return(
        <div>
            <TempletMain d={data}></TempletMain>
            <Templet></Templet>
            <Main New={newData}></Main>
        </div>
    )
}
export default Homebody;
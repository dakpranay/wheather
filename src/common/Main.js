import '../styles/main.css'
function Main(props){
    return(
        <div className='body1' >
            <div className='body2'>
              <div>
                 <p className='l'>{props.New[0].location}</p>
                 <p className='o'>{"Temperature : "+props.New[0].temperature}</p>
                 <p className='o'>{"Humidity : "+props.New[0].humidity}</p>
              </div>
              <div>
                 <p className='o'>{"Air Quality Index : "+props.New[0].airQualityIndex}</p>
                 <p className='o'>{"Day : "+props.New[0].day}</p>
              </div>
            </div>

            <div className='body2'>
              <div>
                 <p className='l'>{props.New[1].location}</p>
                 <p className='o'>{"Temperature : "+props.New[1].temperature}</p>
                 <p className='o'>{"Humidity : "+props.New[1].humidity}</p>
              </div>
              <div>
                 <p className='o'>{"Air Quality Index : "+props.New[1].airQualityIndex}</p>
                 <p className='o'>{"Day : "+props.New[1].day}</p>
              </div>
            </div>

            <div className='body2'>
              <div>
                 <p className='l'>{props.New[2].location}</p>
                 <p className='o'>{"Temperature : "+props.New[2].temperature}</p>
                 <p className='o'>{"Humidity : "+props.New[2].humidity}</p>
              </div>
              <div>
                 <p className='o'>{"Air Quality Index : "+props.New[2].airQualityIndex}</p>
                 <p className='o'>{"Day : "+props.New[2].day}</p>
              </div>
            </div>

            <div className='body2'>
              <div>
                 <p className='l'>{props.New[3].location}</p>
                 <p className='o'>{"Temperature : "+props.New[3].temperature}</p>
                 <p className='o'>{"Humidity : "+props.New[3].humidity}</p>
              </div>
              <div>
                 <p className='o'>{"Air Quality Index : "+props.New[3].airQualityIndex}</p>
                 <p className='o'>{"Day : "+props.New[3].day}</p>
              </div>
            </div>

            <div className='body2'>
              <div>
                 <p className='l'>{props.New[4].location}</p>
                 <p className='o'>{"Temperature : "+props.New[4].temperature}</p>
                 <p className='o'>{"Humidity : "+props.New[4].humidity}</p>
              </div>
              <div>
                 <p className='o'>{"Air Quality Index : "+props.New[4].airQualityIndex}</p>
                 <p className='o'>{"Day : "+props.New[4].day}</p>
              </div>
            </div>

            
        </div>

    )

}
export default Main
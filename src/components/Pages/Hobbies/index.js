import gardening from'./Assersts/gardening.png'
import music from './Assersts/music.png'
import drawing from './Assersts/drawing.png'

export default function Hobbies(){
    return(
        <html>
            <body>
                <h2> gardening</h2>
                <img src={gardening} alt="kk" width="200" height="200"/>
                
                <h2> music</h2>
                <img src={music} alt="kk" width="200" height="200"/>
                
                <h2> drawing</h2>
                <img src={drawing} alt="kk" width="200" height="200"/>
            </body>
        </html>
    )
}
import Navbar from "../../components/Navbar"
export default function Appbar(){
    const pages=["Autocomplete","Button","ButtonGroup","checkox","Slider"]
    return(
        <>
        <Navbar pages={pages} bgcolor="magenta" buttoncolor="black"/>
        </>
    )
}
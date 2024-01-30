import '../App.css'
function Card({elem, key}){
    return <div className="weatherDiv">
                <h1 elem={elem} key={key}>{elem}</h1>
                <h2>Country:{elem.current.cloud}</h2>
            </div>
}
export default Card
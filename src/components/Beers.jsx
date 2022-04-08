import Beer from './Beer.jsx'

function Beers({list}){
    const a = 10;
    console.log( <Beer info={list[0]} randomNumber={a} key={100}/>)
    return (
        <div className="beers">
            {list.map((item, index) => <Beer info={item} randomNumber={a} key={index}/>)}
        </div>
    )   

}

export default Beers
import Beer from './Beer.jsx'

function Beers({list}){
    const a = 10;
    return (
        <div className="beers">
            {list.list.map(item => <Beer info={item} randomNumber={a} />)}
        </div>
    )   

}

export default Beers
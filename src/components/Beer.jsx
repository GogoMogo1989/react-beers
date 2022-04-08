function Beer({info, randomNumber}){

    const {title, sub, text} = info

    return(
        <div className="beer">
            {title}
            {sub}
            {text}
           {/*  <button onClick=()=>{(console.log(`clicked`)}>Click me!</button> */}
        </div>
    )
}

export default Beer
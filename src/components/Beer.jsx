function Beer({info, randomNumber}){

    const {title, sub, text} = info

    return(
        <div className="beer">
            {title}
            {sub}
            {text}
        </div>
    )
}

export default Beer
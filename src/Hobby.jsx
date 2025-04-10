function Hobby({hobby}){
    return(
        <div>
            {/* display the name and description for hobby */}
            <h2>{hobby.name}</h2>
            <p>{hobby.desc}</p>
        </div>
    )
}

export default Hobby;
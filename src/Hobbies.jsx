import Hobby from './Hobby.jsx'

function Hobbies({hobbies}){
    return(
        <div>
            {/* Iterate over the 'hobbies' array and render a 'Hobby' component for each item */}
            {hobbies.map((hobby, index) => (<Hobby key={index} hobby={hobby}/>))}
        </div>
    )
}

export default Hobbies;
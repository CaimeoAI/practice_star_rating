import { useState } from 'react'
import {FaStar} from 'react-icons/fa'


//? starAmount as props, if starAmount is not passed down by parent component it defaults to 5
export default function StarRating({starAmount = 5}){

    const [currentRating, setCurrentRating] = useState(0)
    const [currentHover, setCurrentHover] = useState(0)

    function handleClick(getCurrentIndex) {
        
    }

    function handleMouseEnter(getCurrentIndex) {

    }

    function handleMouseLeave(getCurrentIndex) {

    }

    return (
        <div className="star-rating">
            {
                //? Array(starAmount) creates an empty array of length starAmount.Example: If starAmount = 5, it creates [empty, empty, empty, empty, empty].
                //? ...Array(starAmount) uses the spread operator (...) to convert it into an iterable array. The result is an array of undefined values but with starAmount number of elements.Example Output: [undefined, undefined, undefined, undefined, undefined].
                //? .map() loops through each element in the array. The function inside .map() has two parameters: _ (underscore): This is a convention used when the first parameter is not needed. Normally, .map((value, index) => {...}) is used, but since value is undefined, we ignore it. index: The current index of the element in the array (0, 1, 2, ...).
                [...Array(starAmount)].map((_,index) => {
                    
                    return <FaStar 
                            key={index} 
                            onClick={() => handleClick()} 
                            onMouseMove={() => handleMouseEnter()} 
                            onMouseLeave={() => handleMouseLeave()} 
                            size={40}    
                            />
                })
            }
        </div>
    )
}
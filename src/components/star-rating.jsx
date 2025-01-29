import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import "../css/star-rating.css"


//? starAmount as props, if starAmount is not passed down by parent component it defaults to 5
export default function StarRating({starAmount = 10}){

    const [currentRating, setCurrentRating] = useState(0)
    const [currentHover, setCurrentHover] = useState(0)

    function handleClick(getCurrentIndex) {
        if (currentRating === getCurrentIndex) {
            setCurrentRating(0)
        } else {
            setCurrentRating(getCurrentIndex)
        }
    }

    function handleMouseEnter(getCurrentIndex) {
        setCurrentHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setCurrentHover(currentRating)
    }

    return (
        <div className="star-rating">
            {
                //? Array(starAmount) creates an empty array of length starAmount.Example: If starAmount = 5, it creates [empty, empty, empty, empty, empty].
                //? ...Array(starAmount) uses the spread operator (...) to convert it into an iterable array. The result is an array of undefined values but with starAmount number of elements.Example Output: [undefined, undefined, undefined, undefined, undefined].
                //? .map() loops through each element in the array. The function inside .map() has two parameters: _ (underscore): This is a convention used when the first parameter is not needed. Normally, .map((value, index) => {...}) is used, but since value is undefined, we ignore it. index: The current index of the element in the array (0, 1, 2, ...).
                [...Array(starAmount)].map((_,index) => {
                    //? The map function iterates over an array of starAmount length, where index starts at 0 for the first element. The += 1 shifts the index so that the first star is at index 1 instead of 0, the second is 2, and so on. This is useful because star ratings generally don't have a "0th" star; they start from 1 star up to starAmount.
                    index += 1
                    return <FaStar
                            key={index}
                            className={index <= (currentHover || currentRating) ? "active" : "inactive"}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={40}
                            />
                })
            }
        </div>
    )
}
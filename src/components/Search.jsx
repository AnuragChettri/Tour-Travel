import React from 'react';
import { useNavigate } from 'react-router-dom';
import { destinationListData } from '../utils/constant.jsx';

const Search = ()=>{

    let navigate = useNavigate();

    const [suggestionOpen,setSuggestionOpen] = React.useState(false);

    const [searchData,setSearchData] = React.useState({
        destination: "",
        duration: "",
        guests: 0
    });

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setSearchData((prevState)=>{
            return{
                ...prevState,
                [name]: value
            }
        });
    }

    // Auto Suggestion
    const autoSuggestionList = destinationListData.filter((value)=>{
        return value.placeName.toLowerCase().includes(searchData.destination.toLowerCase());
    });

    const handleSuggestion = ()=>{
        setSuggestionOpen(prevState=>!prevState);
    }

    // Handle Suggestion Click
    const handleSuggestionClick = (suggestion,event)=>{
        // console.log("From Suggestion");

        handleSuggestion();

        setSearchData((prevState)=>{
            return {
                ...prevState,
                [`destination`]: suggestion
            }
        })
    }
    // console.log(searchData);

    // Handle Submit  
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(searchData);

        let place = destinationListData.find((value)=>{
            return value.placeName.toLowerCase() === searchData.destination.toLowerCase();
        })

        // clearing all state data
        setSearchData({
            destination: "",
            duration: "",
            guests: 0
        })

        if(place == null)
        {
            place = {
                id: 0
            }
        }
        navigate(`/destination/place/${place.id}`);
    }

    // React.useEffect(()=>{
    //     handleSuggestion();
    // },[searchData]);

    return(
        <div>
            <form onSubmit={handleSubmit} 
                className="sm:flex sm:items-end p-5 text-gray-600">
                    <div className="relative basis-[30%] mb-4 sm:mb-0">
                        <p className="pl-4">Destination</p>
                        <input type="text" className="w-full text-sm font-medium pl-4 h-12 outline-yellow-500 border-[1px] border-gray-400"
                         placeholder="Search Your Destination"
                         name="destination"
                         value={searchData.destination}
                         onChange={handleChange}
                        //  onFocus={handleSuggestion}
                        //  onBlur={handleSuggestion}
                        onClick={handleSuggestion}
                        />
                        <div className="absolute bg-white border-[1px] border-gray-200 rounded-md shadow-xl z-10  w-full"
                            // onClick={handleSuggestion}
                            // onFocus={handleSuggestion}
                            // onBlur={handleSuggestion}
                            onMouseLeave ={()=>{setSuggestionOpen(false);}}
                        >
                            {/* <p className="pt-4 pl-4 hover:bg-gray-200 cursor-pointer hover:font-medium">Gangtok, sikkim </p> */}
                            {
                                suggestionOpen && 
                                autoSuggestionList.map((value,index)=>{
                                    if(index > 5)
                                        return;
                                    else
                                    return (
                                        <div onClick={()=>{handleSuggestionClick(value.placeName)}} key={index}>
                                        <p className="z-20 pt-3 pl-3 hover:bg-gray-200 cursor-pointer hover:font-medium"
                                        >
                                            {value.placeName}
                                        </p>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    <div className="basis-[20%] mb-4 sm:mb-0 sm:ml-5">
                        <p className="pl-4">Tour Duration</p>
                        {/* <input type="" className="w-full sm:w-[300px] h-12 outline-yellow-500 border-[1px] border-gray-400"/> */}
                        <select className="w-full text-sm font-medium pl-4 sm:w-[300px] h-12 outline-yellow-500 border-[1px] border-gray-400"
                         name="duration"
                         onChange={handleChange}
                         value={searchData.duration}
                        >
                            {/* <option> select --- </option> */}
                            <option>1 to 3 days</option>
                            <option>4 to 7 days</option>
                            <option>1 to 2 weeks</option>
                            <option>2 weeks to 1 month </option>
                        </select>
                    </div>
                    <div className="basis-[20%] mb-4 sm:mb-0 sm:ml-5">
                        <p className="pl-4">Total Guest</p>
                        <input type="number" min="0" max="10" className="w-full font-medium pl-4 sm:w-[] h-12 outline-yellow-500 border-[1px] border-gray-400"
                         name="guests"
                         onChange={handleChange}
                         value={searchData.guests}
                        />
                    </div>
                    <div className="basis-[20%] sm:px-4 ">
                        <button type="submit" className="bg-yellow-500 text-white text-xl font-medium h-12 w-full hover:bg-green-500 transition-colors duration-400">Search</button>
                    </div>
                </form>
        </div>
    )
}

export default Search;
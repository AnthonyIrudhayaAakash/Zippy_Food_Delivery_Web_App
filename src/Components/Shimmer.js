import React, { useEffect, useState } from 'react';


const Shimmer = ({duration=3000}) => {
    
    console.log("Shimmer is rendering")
    const [showShimmer, setShowShimmer] = useState(true);
    
    const sadFaceEmoji = "😞";
    const shimmer_elements = [];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowShimmer(false);
        }, duration);

        console.log("timeout", timeoutId)
        return () => clearTimeout(timeoutId);
    }, [duration]);
    
    for(let i=0; i<10;i++){
        shimmer_elements.push(
            <div className="shimmer-card flex flex-wrap w-72 h-48 px-3 my-4 animate-pulse" key={i}>

                <div className="shimmer-image w-64 h-32 m-2 bg-gray-300">

                </div>
                <div className="shimmer-name w-60 h-5 m-1 bg-gray-300">

                </div>
                <div className="shimmer-cuisine w-32 h-5 m-1 bg-gray-300">

                </div>
                <div className="shimmer-details w-24 h-5 m-1 bg-gray-300">

                </div>

            </div>
        )
        console.log("im shimmer")
    }
    

    return showShimmer ? (
        <div className="shimmer-container flex justify-between flex-wrap">
            {shimmer_elements}

        </div>
        
    ) : (
        <div id="no-restaurents">
            <h2>No Restaurents found{sadFaceEmoji}</h2>
            <h2>Go to HomePage</h2>
        </div>
        
      
    )
}

export default Shimmer;
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
            <div id="shimmer-card" key={i}>

                <div id="shimmer-image">

                </div>
                <div id="shimmer-name">

                </div>
                <div id="shimmer-cuisine">

                </div>
                <div id="shimmer-details">

                </div>

            </div>
        )
    }
    

    return showShimmer ? (
        <div id="shimmer-container">
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
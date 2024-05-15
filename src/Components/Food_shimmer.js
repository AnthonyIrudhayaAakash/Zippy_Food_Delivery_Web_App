 const Food_shimmer = ()  => {

    const shimmer_elements = [];
    



    return (
        <>
        
        {[...Array(10)].map((_, index) => (
            
            <div key={index} className="food_shimmer_card_container w-32 h-32 rounded-full bg-gray-300 mx-2 animate-pulse">
              <div className="food_shimmer_card bg-gray-400"></div>
            </div>
          ))}
        </>
          
        
      );
 }
 export default Food_shimmer;
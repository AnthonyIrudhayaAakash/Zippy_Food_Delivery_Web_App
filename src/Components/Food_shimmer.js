 const Food_shimmer = ()  => {

    const shimmer_elements = [];
    



    return (
        <>
        {[...Array(10)].map((_, index) => (
            <div key={index} id="food_shimmer_card_container">
              <div id="food_shimmer_card"></div>
            </div>
          ))}
        </>
          
        
      );
 }
 export default Food_shimmer;
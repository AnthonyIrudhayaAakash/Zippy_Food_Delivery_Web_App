const Food_Category_Header = (props)  => {

    // console.log("category props", props.data)

    if(props?.data?.card?.card?.title != undefined){
        return (  
            
            <div className="category heading">

                 <div className="gap-column"></div>
                <h3 className="category">{props.data.card.card.title}</h3>
            
            </div>   
        )
    }
}
export default Food_Category_Header;
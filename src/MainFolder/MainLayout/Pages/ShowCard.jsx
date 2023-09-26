/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowCard = ({item}) => {
    const {image, id, category,title} = item;


    const categoryColors = {
      'Clothes':'skyblue' ,
      'Food': 'papayawhip',
      'Education' : 'Plum',
      'Health' : 'salmon'     
      };    
      const defaultColor = 'white'; 
      const bbackgroundColor = categoryColors[category] || defaultColor;

     



      const TextColors = {
        'Clothes': '#0052FF',
        'Food': 'magenta',
        'Education' : 'purple',
        'Health' : 'crimson'

        
      };
     
      const DefaultColor = 'white';
      const textColor = TextColors[category] || DefaultColor;

      const FontColors = {
        'Clothes': 'skyblue',
        'Food': 'papayawhip',
        'Education' : 'Plum',
        'Health' : 'salmon'

        
      };
     
      const DefaultCol = 'gray';
      const FontColor = FontColors[category] || DefaultCol



  return (
<div>

<div className=''>
      <div className="">
      <Link to={`/details/${id}`}>
        
        <div  className="card w-60 h-full shadow-xl rounded-lg"  style={{ backgroundColor : bbackgroundColor }} >
  <figure><img src={image} alt="cardd" /></figure>
  <div className="card-body">

   


  <div className="card-actions ">
      <button  className="btn px-3 font-bold text-xl rounded-md ml-2 mt-4 " style={{ backgroundColor : textColor , color : FontColor  }}>{category}</button>
    </div>

    <h2 className="card-title mt-2 mb-5 font-bold mx-2" style={{color : textColor }}>{title}</h2>
    {/* className="btn bg-gray-400 pt-1 px-3 rounded-md ml-2 mt-4  "  */}
    
    
  </div>
  
</div> </Link> </div>
    </div>

</div>
    
  )
}

export default ShowCard
/* eslint-disable react/prop-types */
import './Pages.css'
import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {image, id, title, category} = card ;

    const categoryColors = {
        'clothes': ' rgba(121, 194, 63, 0.15)',
        'Food': 'rgba(248, 113, 71, 0.15)',
        'Education' : 'Plum',
        'Health' : 'rgba(0, 82, 255, 0.15)'    
      };    
      const defaultColor = 'white'; 
      const bbackgroundColor = categoryColors[category] || defaultColor;

     



      const TextColors = {
        'clothes': ' #79C23F',
        'Food': '#F87147',
        'Education' : 'PaleVioletRed',
        'Health' : 'SteelBlue'

        
      };
     
      const DefaultColor = 'white';
      const textColor = TextColors[category] || DefaultColor;



  return (
    <div className='max-w-[1200px] mx-auto'>
      <Link to={`/details/${id}`}>
        <div  className="card w-60 h-full shadow-xl rounded-lg"  style={{ backgroundColor : bbackgroundColor }} >
  <figure><img src={image} alt="cardd" /></figure>
  <div className="card-body">

   


  <div className="card-actions ">
      <button  className="btn pt-1 px-3 rounded-md ml-2 mt-4 " style={{ backgroundColor : textColor  }}>{category}</button>
    </div>

    <h2 className="card-title mt-6 mb-5 font-bold mx-2" style={{color : textColor }}>{title}</h2>
    {/* className="btn bg-gray-400 pt-1 px-3 rounded-md ml-2 mt-4  "  */}
    
    
  </div>
</div> </Link>
    </div>
  )
}

export default Card
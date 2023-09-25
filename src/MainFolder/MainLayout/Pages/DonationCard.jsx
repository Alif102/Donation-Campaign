/* eslint-disable react/prop-types */

const DonationCard = ({card}) => {
    const {title, image, category, price} = card;

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

    const ButtonColors = {
      'clothes': ' #3CB371',
      'Food': '#DC143C',
      'Education' : '#FF1493',
      'Health' : 'teal'

      
    };
   
    const DefaultC = 'white';
    const btnColor = ButtonColors[category] || DefaultC;


  return (
    <div className=" mt-6 max-w-[1200px] mx-auto">
      
    
        
        <div className="card w-[500px] grid grid-cols-1 md:grid-cols-2 card-side bg-base-100">
  <figure><img className="w-[370px] h-full" src={image} alt="Movie"/></figure>
  <div style={{ backgroundColor : bbackgroundColor }} className="card-body flex flex-col items-center">
    
    <h2 className="p-2 rounded-md mr-3 mt-3" style={{ backgroundColor : textColor  }}>{category}</h2> 
    <h2 className="text-2xl font-bold p-1">{title}</h2>
    <h1>{price}</h1>
    
    <div className="card-actions">
      <button  className="btn p-4 mb-3 text-2xl font-semibold rounded-md " style={{ backgroundColor : btnColor  }}>View Details</button>
    </div>
  </div>
</div> 
    </div>
  )
}

export default DonationCard
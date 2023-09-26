/* eslint-disable react/prop-types */

const DonationCard = ({card}) => {
  const {title, image, category, price} = card;

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

    const ButtonColors = {
      'Clothes': ' #3CB371',
      'Food': '#DC143C',
      'Education' : '#FF1493',
      'Health' : 'teal'

      
    };
   
    const DefaultC = 'white';
    const btnColor = ButtonColors[category] || DefaultC;

    const FontColors = {
      'Clothes': 'skyblue',
      'Food': 'papayawhip',
      'Education' : 'Plum',
      'Health' : 'salmon'

      
    };
   
    const DefaultCol = 'gray';
    const FontColor = FontColors[category] || DefaultCol


  
    


return (
  <div className=" mt-6 max-w-[1200px] mx-auto">
    
  
      
      <div className="card w-[500px] grid grid-cols-1 md:grid-cols-2 card-side bg-base-100">
<figure><img className="w-[370px] h-full" src={image} alt="Movie"/></figure>
<div style={{ backgroundColor : bbackgroundColor }} className="card-body flex flex-col items-center">
  
  <h2 className="p-2 rounded-md mr-3 mt-3" style={{ backgroundColor : textColor , color: FontColor }}>{category}</h2> 
  <h2 className="text-2xl font-bold p-1">{title}</h2>
  <h1 style={{ color : textColor  }} className=" font-bold text-xl"> <span style={{ color : textColor  }} className=" font-bold text-xl ">$</span> {price}</h1>
  
  <div className="card-actions">
    <button  className="btn px-4 mb-2 text-xl font-semibold rounded-md " style={{ backgroundColor : btnColor  }}>View Details</button>
  </div>
</div>
</div> 
  </div>
)
}

export default DonationCard
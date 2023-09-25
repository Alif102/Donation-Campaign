/* eslint-disable react/prop-types */

const Card = ({card}) => {
    const {image, title, category} = card ;

    const categoryColors = {
        'clothes': 'red',
        'Food': 'blue',
        'Education' : 'gray',
        'Health' : 'green'

        // Define colors for other categories
      };
    
      // Default color for unknown categories
      const defaultColor = 'white';
    
      // Get the background color based on the category
      const backgroundColor = categoryColors[category] || defaultColor;


  return (
    <div>
        <div className="card w-52  bg-base-100 shadow-xl"  style={{ backgroundColor }} >
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">

  


  <div className="card-actions ">
      <button className="btn btn-primary bg-gray-400 pt-1 px-3 rounded-md ml-2 mt-4  ">{category}</button>
    </div>

    <h2 className="card-title mb-6 mx-2">{title}</h2>

    
    
  </div>
</div>
    </div>
  )
}

export default Card
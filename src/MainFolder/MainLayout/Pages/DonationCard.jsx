/* eslint-disable react/prop-types */

const DonationCard = ({card}) => {
    const {title, image} = card;


  return (
    <div className="mt-6">
        
        <div className="card w-[500px] flex card-side bg-base-100 shadow-xl">
  <figure><img className="w-[250px]" src={image} alt="Movie"/></figure>
  <div className="card-body flex flex-col justify-center items-center ml-3">
    <h2 className="card-title">{title}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DonationCard
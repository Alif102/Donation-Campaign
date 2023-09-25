/* eslint-disable react/prop-types */

const Detail = ({detail}) => {
    const {id,image, title} = detail;

    const handleAddToDonate = ()=>{
      const donationArray = [];
      const donation = JSON.parse(localStorage.getItem('donation'));
      if(!donation){
        donationArray.push(detail)
        localStorage.setItem('donation', JSON.stringify(donationArray))
        alert('pro adddd')
      }
      else{
        const isExist = donation.find(item => item.id === id)
        if(!isExist){
          donationArray.push(...donation, detail);
        localStorage.setItem('donation', JSON.stringify(donationArray))
        alert('pro add')

        }else{
          console.log('already ache')
        }
        
      }
    }
  return (
    <div>
        <img src={image} alt="img" />
        <button onClick={handleAddToDonate} className="bg-[red] py-2 px-3">Donate</button>
        <h2>{title}</h2>

    </div>
  )
}

export default Detail
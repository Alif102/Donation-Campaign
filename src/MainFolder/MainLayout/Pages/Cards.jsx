/* eslint-disable react/prop-types */
import Card from "./Card"

const Cards = ({cards}) => {
  return (
    <div className=" max-w-[1200px] mx-auto mt-5 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-md mt-8 mb-12 gap-5">
            {
                cards.map(card => <Card key={card.id} card={card} ></Card>)
            }
        </div>
    </div>
  )
}

export default Cards
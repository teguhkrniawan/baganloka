import React from 'react';
import './featuredproperties.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch('/hotel?featured=false&limit=4')

  const resultRating = (rating) => {
    
    const ratingConvert = parseInt(rating)
    
    if (ratingConvert <= 5) {
      return 'Bad';
    }
    else if(ratingConvert <= 8){
      return 'Good';
    }
    else {
      return 'Exellent';
    }
  }

  return (
    <div className="fp">
      {
        loading ? ("Please Wait") : (
          <>
            {
              data.map((item, index) => (
                <div className="fpItem" key={item._id}>
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/121399207.jpg?k=16e7a6131ee3cc1bc92346d473b167d92eb9be1a35172e03db8426b47041e91f&o=&hp=1"
                    alt=""
                    className="fpImg"
                  />
                  <span className="fpName">{ item.name }</span>
                  <span className="fpCity">{ item.city }</span>
                  <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                  <div className="fpRating">
                    <button>
                      {item.rating ? item.rating : '0.0'}
                    </button>
                    <span>
                      { item.rating ? resultRating(item.rating) : resultRating(0) }
                    </span>
                  </div>
                </div>
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default FeaturedProperties
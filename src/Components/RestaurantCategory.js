import { useState } from "react";
import { CDN_URL, NO_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";
import { Slide, toast } from "react-toastify";



const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true);
  const { title } = data?.card?.card;

  const itemCards = data?.card?.card?.itemCards;

  const notify = () =>
    toast.success("Item added to cart", {
      position: "bottom-center",
      autoClose: 300,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });

  const dispatch = useDispatch();

  return (
    <div className="text-base items-center border-t-[14px]">
      <div
        onClick={() => {
          setShowItems(!showItems);
        }}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="font-bold sm:font-extrabold py-5 sm:mx-2  ">
          {title} ({itemCards.length})
        </h1>
        <span>
          <i className="ri-arrow-down-s-line text-2xl text-[&#xEA4E]"></i>
        </span>
      </div>
      <div className="items ">
        {showItems &&
          itemCards.map((item) => (
            <div
              key={item.card.info.id}
              className="flex  justify-between py-6 md:py-10 px-2  border-b-2"
            >
              <div className="w-6/12 md:w-8/12">
                <div className="flex gap-2 items-end">
                  <h1>
                    {item.card.info.itemAttribute.vegClassifier == "VEG" ? (
                      <img
                        className="size-5"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
                      />
                    ) : (
                      <img
                        className="size-5"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
                      />
                    )}
                  </h1>
                  <p className="text-[#FF6E5A] text-sm font-semibold">
                    {item.card.info?.isBestseller ? "Bestseller" : null}
                  </p>
                </div>
                <h1 className="font-bold text-sm md:text-md sm:py-0 py-2 ">{item.card.info.name}</h1>
                <div className="flex items-center ">
                  <h3 className="line-through font-semibold opacity-50">
                    {item.card.info.finalPrice
                      ? "₹" + item.card.info.finalPrice / 100
                      : null}
                  </h3>
                  <h3 className="font-semibold ">
                    ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </h3>
                  <span className=" ml-1 sm:ml-2 mr-1 text-[8px] sm:text-[11px] font-extrabold sm:font-bold text-[#1BA672]">
                    {item.card.info.offerTags
                      ? item.card.info.offerTags[0].title
                      : null}
                  </span>
                  <span className="text-[8px] sm:text-[11px] font-extrabold sm:font-bold text-[#1BA672]">
                    {item.card.info.offerTags
                      ? item.card.info.offerTags[0].subTitle
                      : null}
                  </span>
                </div>

                <div className="py-2 font-bold">
                  <span className="text-[#1BA672] text-sm ">
                    {item.card.info.ratings.aggregatedRating.rating ? (
                      <i className="ri-star-s-fill "></i>
                    ) : null}
                    {item.card.info.ratings.aggregatedRating.rating
                      ? item.card.info.ratings.aggregatedRating.rating
                      : null}
                  </span>

                  <span className="mx-1 text-sm w-1/2">
                    {item.card.info.ratings.aggregatedRating.ratingCountV2
                      ? "(" +
                        item.card.info.ratings.aggregatedRating.ratingCountV2 +
                        ")"
                      : null}
                  </span>
                </div>

                <p className=" hidden sm:block text-sm font-medium w-full">
                  {item.card.info.description}
                  
                </p>

                <p className=" sm:hidden  text-sm font-medium w-full">
                {item.card.info.description?.split(" ").slice(0, 12).join(" ") + "...."}
                  
                </p>
              </div>
              <div className=" w-4/12 md:w-2/12 flex flex-col justify-center items-center">
                <img
                  className="w-44 h-32 rounded-lg bg-cover  "
                  src={
                    item.card.info.imageId
                      ? CDN_URL + item.card.info.imageId
                      : NO_IMAGE_URL
                  }
                />

                <button
                  onClick={() => dispatch(addItem(item)) && notify()}
                  className="border border-gray items-center my-1 w-full rounded-lg px-2 py-2 text-lg font-extrabold text-green-600 hover:bg-gray-200"
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
          
          
      </div>

     
     
    </div>
  );
};

export default RestaurantCategory;

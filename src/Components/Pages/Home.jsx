import {
  FaLongArrowAltRight,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const Home = () => {
  const HeroImgae =
    "https://abdullahalsazib.github.io/e-commerce/images/image1.png";
  const ImagesLinks = [
    {
      altFrom: "Error Images",
      link: "https://abdullahalsazib.github.io/e-commerce/images/category-1.jpg",
    },
    {
      altFrom: "Error Images",
      link: "https://abdullahalsazib.github.io/e-commerce/images/category-2.jpg",
    },
    {
      altFrom: "Error Images",
      link: "https://abdullahalsazib.github.io/e-commerce/images/category-3.jpg",
    },
  ];
  return (
    <>
      <div className="w-full h-full ">
        <div className={` w-full flex items-center justify-between `}>
          <div className="space-y-5 flex md:block flex-col items-center justify-center">
            <h1 className="text-6xl font-extrabold ">
              Give Your Workout A New Style!
            </h1>
            <p className="text-slate-500  capitalize">
              Success is not always about greatness. It is about
              construction.Consistency hard work gains Success. Greatness will
              cone.
            </p>
            <button className="flex items-center justify-center bg-orange-600 py-2 px-4 text-white rounded-full gap-x-4 hover:bg-orange-700 cursor-pointer ">
              Explor Now <FaLongArrowAltRight />
            </button>
          </div>

          <img className="w-1/2 hidden md:flex " src={HeroImgae} alt="" />
        </div>
        {/* After the home header page */}
        <div className="mt-[20%]">
          <div className="flex items-center justify-center flex-row gap-10 py-5">
            {ImagesLinks.map((items, index) => (
              <img
                key={index}
                className="w-[27%]"
                src={items.link}
                alt={items.altFrom}
              />
            ))}
          </div>
        </div>
        {/* After home static image then add Featured Products */}
        <div className=" space-y-10 py-3">
          <div className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-3xl font-semibold">Featured Products</h1>
            <div className="w-56 h-[5px] bg-orange-600"></div>
          </div>
          <div className=" grid grid-flow-col gap-1">
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const CardComponents = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center p-2 ">
          <img
            className="w-[80%] "
            src="https://abdullahalsazib.github.io/e-commerce/images/product-1.jpg"
            alt=""
          />

          <h3 className=" text-xl font-semibold">Red Prined T-Shirt</h3>
          <h2 className="flex items-center justify-start text-orange-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </h2>
          <h3>$30.20</h3>
        </div>
      </div>
    </>
  );
};

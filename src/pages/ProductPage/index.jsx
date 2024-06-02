import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/addSlice";
import ProductTabs from "../../components/productTabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEnvelope,
  faShareNodes,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import toast, { Toaster } from "react-hot-toast";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const dispatch = useDispatch(product);

  const [quantity, setQuantity] = useState(1);

  const handleAddCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5050/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(setProduct);
      });

    fetch("http://localhost:5050/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, [id]);

  useEffect(() => {
    // Filter out the current product and get similar products
    const similar = allProducts.filter((p) => p.id !== id);
    setSimilarProducts(similar);
  }, [product, allProducts, id]);

  return (
    <div className="boxCommon">
      <Toaster position="top-center" />
      <Link to="/shop" className="no-underline text-black">
      <div className="back-button lg:hidden flex items-center ml-1 mb-2">
        <FontAwesomeIcon icon={faLeftLong} />
        <p className="mt-3 ml-1">back to shop</p>
      </div>
      </Link>
      <div className="class grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12 lg:p-10" key={product.id}>
          <div className="imgbox flex lg:m-10 m-0">
            <div className="imgs  lg:flex flex-col hidden">
              <img className="w-[100px]" src={product.img} />
              <img className="w-[100px] mt-[20px]" src={product.img} />
              <img className="w-[100px]  mt-[20px] " src={product.img} />
              <img className="w-[100px]  mt-[20px]" src={product.img} />
            </div>
            <div className="imgmain lg:ml-10  lg:w-[470px] w-[100%] h-full">
              <img className="w-full" src={product.img} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12  lg:p-9">
          <h1 className="font-bold text-[24px]">{product.title}</h1>
          <div className="price flex justify-between items-center">
            <p className="mt-[20px]   font-bold text-[17px] text-[#af9c80]">
              {product.price}$
            </p>
            <span className="lg:hidden flex">
              <FontAwesomeIcon icon={faShareNodes} />
            </span>
          </div>
          <img
            className="lg:flex hidden h-[20px]"
            src="/img/custrew.png"
            alt=""
          />
          <p className="mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            <br />
            placerat, augue a volutpat hendrerit, sapien tortor faucibus <br />
            augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
            <br />
            facilisis consequat sed eu felis.
          </p>
          <div className="card-add flex mt-[30px] h-[40px]">
            <div className="pm w-[80px] bg-[#efefef] rounded-[5px] lg:flex hidden items-center px-2 justify-between">
              <button onClick={handleDecrement}>-</button>
              {quantity}
              <button onClick={handleIncrement}>+</button>
            </div>
            {/* <Link to="/bag"> */}
            <button
              className="lg:w-[300px] lg:ml-4 w-[100%] font-bold rounded-[5px] border border-black"
              onClick={handleAddCart}
            >
              ADD TO CART
            </button>
            {/* </Link> */}
          </div>
          <div className="icons  items-center lg:flex hidden  my-4">
            <div className="like flex items-center h-[14px] border-r border-black">
              <span className="pr-6">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </div>
            <div className="sosial">
              <span className="px-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="px-3">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span className="px-3">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="px-3">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </div>
          </div>
          <div className="cat lg:block hidden mt-[30px]">
            <div className="div">
              <span className="font-bold text-black">SKU</span>: 12
            </div>
            <div className="categoriws flex">
              <p className="font-bold text-black">Categories:</p>
              <p className="ml-1">Fashion,style</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs">
        <ProductTabs />
      </div>
      <div className="similar-products">
        <h2 className="lg:text-start text-center">Similar Items</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper my-10"
        >
          {similarProducts.slice(0, 4).map((similarProduct) => (
            <SwiperSlide
              key={similarProduct.id}
              className="lg:w-[250px] lg:h-[250px] w-[300px]"
            >
              <img
                src={similarProduct.img}
                alt={similarProduct.title}
                className="lg:w-[100%]"
              />
              <div className="content">
                <h1 className="lg:text-[20px] font-bold text-[14px] p-1">
                  {similarProduct.title.slice(0, 7)}
                </h1>
                <p className="font-bold lg:text-[20px] text-[12px] p-1">
                  {similarProduct.price}$
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductPage;

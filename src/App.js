// src/App.js
import React, { useState } from "react";
import "./App.css";
import { Image, Button } from "antd";
import image01 from "../src/01.jpg";
import image02 from "../src/02.jpg";
import image03 from "../src/03.jpg";
import image04 from "../src/04.jpg";
import image05 from "../src/05.jpg";
import image06 from "../src/06.jpg";

const imageList = [image05, image06, image01, image02, image03, image04];
// const imageList = [
//   "https://images.pexels.com/photos/6555781/pexels-photo-6555781.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg",
//   "https://images.pexels.com/photos/19721323/pexels-photo-19721323/free-photo-of-land-rover-defender-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=800",
// ];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(imageList[index]);
  };

  return (
    <div className="flex flex-col ">
      <header className=" h-[10vh] w-full shadow-sm flex px-4 items-center jusify-center text-xl font-serif">
        <h1>Gallery</h1>
      </header>

      <div className="flex flex-wrap justify-center mt-5">
        {imageList.map((img, index) => (
          <div
            className="flex flex-row m-2 overflow-hidden h-[50%] w-[35%]"
            key={index}
          >
            <Image
              className="object-contain rounded-lg cursor-pointer"
              src={img}
              alt="image"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="m-4">
          <Image
            className="object-contain rounded-lg"
            src={selectedImage}
            alt="selectedImage"
          />
        </div>
      )}

      <div className="bg-gray-700 w-full h-[10vh] items-center flex justify-center mt-4">
        <h1 className="text-white text-center">All rights reserved ©</h1>
      </div>
    </div>
  );
}

export default App;

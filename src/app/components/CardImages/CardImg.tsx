import React from "react";

interface IProps {
  images: string[];
}

const CardImg: React.FC<IProps> = ({ images }) => {
  return (
    <div className="box d">
      <div
        className="box e"
        style={{ backgroundImage: `url(${images[0]})` }}
      ></div>
      <div
        className="box f"
        style={{ backgroundImage: `url(${images[1]})` }}
      ></div>
      <div
        className="box g"
        style={{ backgroundImage: `url(${images[2]})` }}
      ></div>
    </div>
  );
};

export default CardImg;

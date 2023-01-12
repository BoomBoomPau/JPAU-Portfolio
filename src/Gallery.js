import images from "./images";

export default function Gallery() {
  const photos = images.map((item) => {
    return <img src={item.photo} />;
  });

  return (
    <div>
      <div className="gallery-container"> {photos} </div>
      <div></div>
    </div>
  );
}

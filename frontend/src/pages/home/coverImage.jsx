import coverImage from "../../assets/coverImage.jpg";

export default function CoverImage() {
  return (
    <div className="cover_image_container w-screen h-[40vh] mt-4">
      <img className="w-full h-full" src={coverImage} alt="/" />
    </div>
  );
}

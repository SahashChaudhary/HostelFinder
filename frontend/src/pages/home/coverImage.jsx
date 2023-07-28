import coverImage from "../../assets/coverImage.jpg";

export default function CoverImage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="cover_image_container h-[40vh] mt-4 relative mb-3">
=======
    <div className="cover_image_container h-[40vh] mt-4 relative">
>>>>>>> 84941c998ad88fdbf7010b3268259a5796a60b6d
=======
    <div className="cover_image_container h-[40vh] mt-4 relative mb-3">
>>>>>>> 8575c7efbb7ece03af79a4cee614a1668527dbe9
      <img className="w-full h-full" src={coverImage} alt="/" />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="text-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-5xl font-bold ">Home for every student</h1>
        <h1 className="text-2xl font-bold">Simplest Way to find the hostel</h1>
      </div>
    </div>
  );
}

// import coverImage from "../../assets/coverImage.jpg";

// export default function CoverImage() {
//   return (
//     <div className="cover_image_container w-screen h-[40vh] mt-4">
//       <img className="w-full h-full" src={coverImage} alt="/" />
//     </div>
//   );
// }

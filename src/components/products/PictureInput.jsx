import { CloseCircleFilled, CloudUploadOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function PictureInput({ supabase, images, setImages }) {
  const CDNURL =
    "https://qgzeodsxjjpqfbghflzn.supabase.co/storage/v1/object/public/";

  async function uploadImage(e) {
    let file = e.target.files[0];
    const { data, error } = await supabase.storage
      .from("images")
      .upload("product_image" + "/" + uuidv4(), file);
    if (data) {
      setImages([...images, data]);
    } else {
      toast.error("unable to load image");
      console.log(error);
    }
  }

  async function deleteImage(imagePath) {
    // delete image from supabase
    const { error } = await supabase.storage.from("images").remove([imagePath]);

    // update client state
    if (error) {
      toast.error("Unable to delete image");
    } else {
      let remImages = images.filter((image) => image.path !== imagePath);
      setImages(remImages);
    }
  }

  return (
    <div className="flex gap-3">
      {images?.map((image) => (
        <div className="relative" key={image.path}>
          <Image
            src={CDNURL + image?.fullPath}
            alt="img"
            className="w-20 h-20 rounded-md shadow object-contain"
            width={200}
            height={200}
          />
          <CloseCircleFilled
            className="text-red-600 absolute top-0 right-0 text-xl cursor-pointer"
            onClick={() => deleteImage(image.path)}
          />
        </div>
      ))}
      <div className=" bg-gray-200 flex items-center justify-center h-20 w-20">
        <label htmlFor="pics_input" className="">
          <CloudUploadOutlined className="text-4xl" />
        </label>
        <input
          type="file"
          id="pics_input"
          className="hidden"
          accept=".jpg, .jpeg, .png"
          onChange={uploadImage}
        />
      </div>
    </div>
  );
}

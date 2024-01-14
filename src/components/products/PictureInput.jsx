import { CloseCircleFilled } from "@ant-design/icons";
import toast from "react-hot-toast";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function PictureInput({ supabase, user }) {
  const CDNURL =
    "https://qgzeodsxjjpqfbghflzn.supabase.co/storage/v1/object/public/product_images/";
  // CDNURL + user.id + "/" + image.name
  const [images, setImages] = useState([]);
  async function getImages() {
    const { data, error } = await supabase.storage
      .from("product_images")
      .list(user?.id + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    // data [image1,image2,image3]
    if (data != null) {
      setImages(data);
    } else {
      alert("error loading images");
      console.log(error);
    }
  }

  async function deleteImage(imageName) {
    toast.success("deleting...");
    const { error } = await supabase.storage
      .from("product_images")
      .remove([user.id + "/" + imageName]);

    if (error) {
      toast.error(error);
    } else {
      getImages();
    }
  }

  const uploadImage = async (e) => {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("product_images")
      .upload(user.id + "/" + uuidv4(), file);

    if (data) {
      getImages();
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getImages();
    }
  }, [user]);

  return (
    <div className="flex gap-3">
      {images.map((image) => (
        <div className="relative" key={image.name}>
          <Image
            src={CDNURL + user.id + "/" + image.name}
            alt="img"
            className="w-20 h-20 rounded-md shadow"
            width={200}
            height={200}
          />
          <CloseCircleFilled
            className="text-red-600 absolute top-0 right-0 text-xl cursor-pointer"
            onClick={() => deleteImage(image.name)}
          />
        </div>
      ))}
      <div className="w-20 20 bg-gray-200 flex items-center justify-center">
        <input type="file" onChange={uploadImage} />
        {/* <FileAddOutlined className="text-3xl" /> */}
      </div>
    </div>
  );
}

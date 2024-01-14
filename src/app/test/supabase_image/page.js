"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const cndURl =
  "https://qgzeodsxjjpqfbghflzn.supabase.co/storage/v1/object/public/";

function Upload() {
  const [images, setImages] = useState([]);
  const supabase = createClientComponentClient();

  async function uploadImage(e) {
    let file = e.target.files[0];
    const { data, error } = await supabase.storage
      .from("images")
      .upload("product_image" + "/" + uuidv4(), file);

    if (data) {
      toast.success("uploaded");
      console.log(data);
      setImages([...images, data]);
    } else {
      console.log(error);
    }
  }

  async function deleteImage(imagePath) {
    const { error } = await supabase.storage.from("images").remove([imagePath]);

    if (error) {
      toast.error("Unable to deletes");
    } else {
      let newImages = images.filter((image) => image.path !== imagePath);
      setImages(newImages);
      toast.success("deleted");
    }
  }

  return (
    <div>
      <h1>Image upload and get url test</h1>
      <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadImage} />
      {images.map((image) => (
        <div key={image.path}>
          <Image
            src={cndURl + image.fullPath}
            className="w-32 h-32"
            alt="img"
            width={200}
            height={200}
          />
          <button
            className="bg-red-500 p-2 text-white"
            onClick={() => deleteImage(image.path)}
          >
            Delete Image
          </button>
        </div>
      ))}
    </div>
  );
}

export default Upload;

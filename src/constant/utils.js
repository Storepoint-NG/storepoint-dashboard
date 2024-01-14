import toast from "react-hot-toast";

export async function signInWithEmail(email, password, supabase, router) {
  const toastId = toast.loading("Processing Signin");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  toast.dismiss(toastId);
  if (data?.user) {
    toast.success("Login successfully");
    console.log("data", data);
    router.push("/");
  } else {
    toast.error("Unable to Login");
    if (error.message === "Invalid login credentials") {
      toast.error("Invalid login details");
    }
    // Remove email verification
    else if (error.message === "Email not confirmed") {
      toast.error("You have not verified your email");
      //   dispatch(
      //     setUser({
      //       email: form.email,
      //     })
      //   );
      //   router.push("/signup/verify-email");
    } else {
      toast.error(`${error.name}: ${error.message}`);
    }
  }
}

export async function signUpNewUser(email, password, form, supabase, router) {
  const toastId = toast.loading("Processing Signup");
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: form.name,
        phone: form.number,
      },
    },
  });
  toast.dismiss(toastId);
  if (error) {
    if (error.message === "User already registered") {
      toast.error("Email Already Taken");
      router.push("/reset-password");
      return;
    }
    toast.error("Unable to Sign up");
    return;
  }
  if (data?.user) {
    toast.success("Sign up successfully");

    await ensureUserProfile(data.user, form, supabase);
    router.push("/login");
  }
}

export const fetchUserProfile = async (user, supabase) => {
  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("user_email", user.email)
    .single();

  if (data) {
    return data;
  }

  if (error) {
    console.error("error while fetching profile", error);
    return null;
  }
};

export const ensureUserProfile = async (user, form, supabase) => {
  let userProfile = await fetchUserProfile(user, supabase);

  if (!userProfile) {
    const { error } = await supabase.from("profiles").insert({
      user_email: user.email,
      user_id: user.id,
      username: form.name,
      phone_number: form.number,
    });

    if (error) {
      console.error("Error while creating profile", error);
    }
  }
};

export const getFirstName = (user) => {
  if (!user) return;
  const name = user?.user_metadata.username;
  const firstname = name.split(" ")[0];
  return firstname;
};

export const getShortName = (name) => {
  if (!name) return;
  const words = name.split(" ");
  let firstletter = "";
  for (let i = 0; i < 2; i++) {
    if (i == words.length) return firstletter;
    firstletter += words[i][0];
  }
  return firstletter;
};

// // retrive images from supabase
// async function getImages() {
//   const { data, error } = await supabase.storage
//     .from("product_images")
//     .list(user?.id + "/", {
//       limit: 10,
//       offset: 0,
//       sortBy: { column: "name", order: "asc" },
//     });

//   // data [image1,image2,image3]
//   if (data != null) {
//     // updationg ui for images here
//     setImages(data);
//     // update form
//     setForm({
//       ...form,
//       pictures: { user_id: user.id, images: data, cdn: CDNURL },
//     });
//   } else {
//     alert("error loading images");
//     console.log(error);
//   }
// }
// delete image from supbase
// async function deleteImage(imageName) {
//   const { error } = await supabase.storage
//     .from("product_images")
//     .remove([user.id + "/" + imageName]);

//   if (error) {
//     toast.error(error);
//   } else {
//     getImages();
//   }
// }

// const uploadImage = async (e) => {
//   let file = e.target.files[0];

//   const { data, error } = await supabase.storage
//     .from("product_images")
//     .upload(user.id + "/" + uuidv4(), file);

//   if (data) {
//     getImages();
//   } else {
//     console.log(error);
//   }
// };

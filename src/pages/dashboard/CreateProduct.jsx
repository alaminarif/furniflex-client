import { useState } from "react";

const CreateProduct = () => {
  const [imgFile, setImgFile] = useState(null);
  const [product, setProducts] = useState({});

  const uploadImage = async (file) => {
    //  setLoading(true);
    const response = await fetch("https://api.cloudinary.com/v1_1/dqk1og6f4/image/upload", {
      method: "POST",
      body: file,
    });
    const data = await response.json();

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const file = new FormData();

    file.append("file", imgFile);
    file.append("upload_preset", "heroclub");
    const pictureInfo = await uploadImage(file);

    if (pictureInfo?.secure_url) {
      fetch("https://furniflex-server.onrender.com/products/create-product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    console.log(e);
  };
  return (
    <div>
      <h1 className="">Create Product</h1>
      <form onSubmit={handleSubmit} className="w-6/12 mx-auto">
        <label className="input input-bordered  flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Daisy" name="name" />
        </label>

        <div>
          <label className="text-md uppercase" htmlFor="">
            Image
          </label>
          <br />
          <input
            className="w-full h-14 mt-2 file-input"
            type="file"
            required
            id="file"
            name="file"
            placeholder="Upload an image"
            onChange={(e) => setImgFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn bg-white uppercase w-full py-3 mt-2 text-[#000944] rounded-md ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

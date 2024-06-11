"use client";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

//NOTE: the custom imagepicker is made out of file input and you hide that file input and put an extra custom made button
//      with style you like and attach a ref to input element and on custom button click event fires then you pass that
//      to input element which triggers file picker and opens dialog file picker

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imagePickerRef = useRef();

  const handleImagePicker = () => {
    imagePickerRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
        setPickedImage(fileReader.result);
    }

    fileReader.readAsDataURL(file)
  };

  return (
    <div className={styles.picker}>
      <label htmlFor="image">{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={styles.input} // style to hide this input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imagePickerRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleImagePicker}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;

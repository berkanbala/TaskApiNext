"use client";
import Select from "react-select";
import styles from "./create.module.scss";
import { useState } from "react";
import { useFormik } from "formik";

export default function Create() {
  const [loading, setLoading] = useState(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [a, b] = useState("s");

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      image: "",
      description: "",
      tags: [],
    },
    onSubmit: async (values: any) => {
      try {
        setLoading(true);
        console.log(values);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
  });

  console.log(values);

  return (
    <div className={styles.container}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.addImage}>
          <span>Image URL:</span>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            placeholder="Add an imgur url..."
            value={values.name}
            disabled={loading}
          />
        </div>
        <div className={styles.addDescription}>
          <span>Description:</span>
          <input
            name="text"
            value={values.description}
            onChange={handleChange}
            placeholder="Add a description..."
            disabled={loading}
          />
        </div>
        <div className={styles.addTags}>
          <span>Tags:</span>
          <Select
            // className={styles.tags}
            isMulti
            id="tags"
            placeholder="Choose tags..."
            onChange={(e: any) => setFieldValue("tags", e.value)}
            options={options}
            isDisabled={loading}
            value={values.tags}
          />
        </div>
        <div className={styles.formButton}>
          <button type="submit">Submit post</button>
        </div>
      </form>
    </div>
  );
}

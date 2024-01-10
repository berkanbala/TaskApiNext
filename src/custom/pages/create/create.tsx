"use client";
import Select from "react-select";
import styles from "./create.module.scss";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button/button";

export default function Create() {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const options = [
    { value: "aidi", label: "Aidi" },
    { value: "german shepherd dog", label: "German Shepherd Dog" },
    { value: "bulldog", label: "Bulldog" },
    { value: "shepherd", label: "Shepherd" },
    { value: "boerboel", label: "Boerboel" },
    { value: "poodle", label: "Poodle" },
    { value: "chihuahua", label: "Chihuahua" },
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

  useEffect(() => setIsMounted(true), []);

  return (
    <div className={styles.container}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.addImage}>
          <span>Image URL</span>
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
          <span>Description</span>
          <input
            name="text"
            value={values.description}
            onChange={handleChange}
            placeholder="Add a description..."
            disabled={loading}
          />
        </div>
        <div className={styles.addTags}>
          <span>Tags</span>
          {isMounted ? (
            <Select
              className={styles.tags}
              isMulti
              id="tags"
              placeholder="Choose tags..."
              onChange={(e: any) => setFieldValue("tags", e.value)}
              options={options}
              isDisabled={loading}
              value={values.tags}
            />
          ) : null}
        </div>
        <div className={styles.formButton}>
          <Button type="submit" text={"Submit"} />
        </div>
      </form>
    </div>
  );
}

"use client";
import Select from "react-select";
import styles from "./create.module.scss";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button/button";
import { Input } from "@/common/components/ui/input/input";
import { showNotification } from "@/common/configs/notification";

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

  const { values, handleChange, setFieldValue, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        image: "",
        description: "",
        tags: [],
      },
      onSubmit: async (values: any, actions: any) => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          actions.resetForm();
          setLoading(true);
          console.log(values);
          showNotification("success", "başarıyla eklendi");
        } catch (error) {
          showNotification("error", "hata");
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
          <Input
            type="text"
            name="image"
            value={values.image}
            onChange={handleChange}
            placeholder="Add an imgur url..."
            disabled={loading}
            required
          />
        </div>
        <div className={styles.addDescription}>
          <span>Description</span>
          <Input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Add a description..."
            disabled={loading}
            required
          />
        </div>
        <div className={styles.addTags}>
          <span>Tags</span>
          {isMounted ? (
            <Select
              required
              className={styles.tags}
              isMulti
              id="tags"
              placeholder="Choose tags..."
              onChange={(value: any) => {
                setFieldValue("tags", [...value]);
              }}
              options={options}
              isDisabled={loading}
              value={values.tags}
              // value={
              //   options ? options.find((option) => option.value === values) : ""
              // }
            />
          ) : null}
        </div>
        <div className={styles.formButton}>
          <Button
            disabled={isSubmitting}
            type="submit"
            text={"Submit"}
            // disabled={Object.values(values).some(
            //   (formValue) => formValue === ""
            // )}
          />
        </div>
      </form>
    </div>
  );
}

"use client";
import Select from "react-select";
import styles from "./create.module.scss";
import { Input } from "@/common/components/ui/input/input";
import { Button } from "@/common/components/ui/button/button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
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

  useEffect(() => setIsMounted(true), []);

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      image: "",
      description: "",
      tags: [],
    },
    onSubmit: async (values: any) => {
      try {
        if (
          !Object.values([values.image, values.description]).every(
            (item) => item !== ""
          ) ||
          values.tags.length < 1
        ) {
          showNotification("error", "Lütfen tüm alanları doldurunuz");
          return;
        }
        setLoading(true);
        const newTags = values.tags.map((item: any) => item.value);
        values.tags = newTags;
        console.log(values);
        showNotification("success", "başarıyla eklendi");
        resetForm();
      } catch (error) {
        showNotification("error", "hata");
      } finally {
        setLoading(false);
      }
    },
  });

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
              onChange={(value: any) => {
                setFieldValue("tags", [...value]);
              }}
              options={options}
              isDisabled={loading}
              value={values.tags}
              styles={{
                menu: (baseStyles) => ({
                  ...baseStyles,
                  top: 40,
                }),
              }}
            />
          ) : null}
        </div>
        <div className={styles.formButton}>
          <Button disabled={isSubmitting} type="submit" text={"Submit"} />
        </div>
      </form>
    </div>
  );
}

"use client";
import Select from "react-select";
import styles from "./edit.module.scss";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button/button";
import { Input } from "@/common/components/ui/input/input";
import { showNotification } from "@/common/configs/notification";
import Link from "next/link";
import { useRouter } from "next/router";
import { useParams, usePathname } from "next/navigation";

export default function Edit() {
  const pathname = usePathname();

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

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
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
        // router.push(`/${id}`);
        showNotification("success", "başarıyla düzeltildi");
      } catch (error) {
        showNotification("error", "hata");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link href={`/user/${pathname.split("/")[2]}`}>
          <Button>Go Back</Button>
        </Link>
        <h1>Edit Post</h1>
      </div>

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
            />
          ) : null}
        </div>
        <div className={styles.formButton}>
          <Button type="submit" text={"Submit Edit"} />
        </div>
      </form>
    </div>
  );
}

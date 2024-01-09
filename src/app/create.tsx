import styles from "@/styles/create.module.scss";
import Select from "react-select";

export default function Create() {
  return (
    <div className={styles.container}>
      <h1>Create Post</h1>
      <form
        //   onSubmit={handleFormSubmit}
        className={styles.form}
      >
        <div className={styles.addImage}>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            id="image"
            // value={}
            // onChange={}
            placeholder="Add an imgur url..."
          />
        </div>
        <div className={styles.addDescription}>
          <label htmlFor="text">Description:</label>
          <textarea
            name="text"
            id="text"
            // value={}
            // onChange={}
            placeholder="Add a description..."
          />
        </div>
        <div className={styles.addTags}>
          <label htmlFor="tags">Tags:</label>
          <Select
            id="tags"
            className={styles.tags}
            isMulti
            placeholder="Choose tags..."
          />
        </div>
        <div className={styles.formButton}>
          <button type="submit">Submit post</button>
        </div>
      </form>
    </div>
  );
}

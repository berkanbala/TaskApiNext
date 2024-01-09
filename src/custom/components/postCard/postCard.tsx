import Image from "next/image";
import styles from "./postCard.module.scss";
import { IPost } from "@/common/models/postData/post";
export default function PostCard(props: IPost) {
  const { text, image } = props;

  return (
    <div>
      {text} {image}
    </div>
  );
}

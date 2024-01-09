import { IPost } from "@/common/models/posts";
import styles from "./postCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }: Props) {
  return (
    <Link href={`post/${post.id}`}>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image src={post.image} alt="user picture" width={125} height={125} />
          <div className={styles.info}>
            <span>{post.text}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface Props {
  post: IPost;
}

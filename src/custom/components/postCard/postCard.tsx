import styles from "./postCard.module.scss";
import Image from "next/image";
import { IPost } from "@/common/models/posts/post";

export default function PostCard({ post }: Props) {
  return (
    // <Link href={`post/${post.id}`}>
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src={post.image} alt="user picture" width={125} height={125} />
        <div className={styles.info}>
          <span>Likes: {post.likes} </span>
          <span>
            &#8594; {post.owner.title} {post.owner.firstName}
            {post.owner.lastName}
          </span>
          <span> &#8594; {post.tags} </span>
          <span> &#8594; {post.text}</span>
        </div>
      </div>
    </div>
    // </Link>
  );
}

interface Props {
  post: IPost;
}

"use client";
import styles from "./postCard.module.scss";
import Image from "next/image";
import { IPost } from "@/common/models/posts/post";
import Link from "next/link";
// import { Button } from "@/common/components/ui/button/button";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function PostCard({ post }: Props) {
  const router = useRouter();
  // const { id } = router.query;

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
        {/* <Link href={`/${post.id}/edit`} className={styles.edit}>
            <Button
              onClick={() => {
                router.push(`/${post.id}`);
              }}
              type="submit"
              text={"Edit post"}
            />
          </Link> */}
      </div>
    </div>
    // </Link>
  );
}

interface Props {
  post: IPost;
}

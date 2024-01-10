import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "../../media/logo/Logo.png";
export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          alt="home icon"
          src={Logo}
          width={32}
          height={32}
          className={styles.logo}
        />
      </Link>
      <ul>
        <li>
          <Link href="/">Users</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/create">Create post</Link>
        </li>
      </ul>
    </div>
  );
}

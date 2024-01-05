import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "../../media/logo/Logo.png";
export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image alt="home icon" src={Logo} width={32} height={32} />
      </Link>
      <ul>
        <Link href="/">home</Link>
        <Link href="/create">create post</Link>
      </ul>
    </div>
  );
}

import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "../../constants/strings";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <p className={styles.sidebar_title}>
        <HiFilter className={styles.icon_display} />
        دسته بندی
      </p>
      <div>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
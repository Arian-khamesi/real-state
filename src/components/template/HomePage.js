const { FiCircle } = require("react-icons/fi");
import { categories, cities, services } from "../../constants/strings";
import styles from "./HomePage.module.css"

function HomePage() {



    return (

        <div>
            <div className={styles.banner}>
                <div className={styles.desc}>
                    <h1>سامانه خرید و اجاره ملک</h1>
                    <ul>
                        {services.map((i) => (
                            <li key={i}>
                                <FiCircle />
                                <span>{i}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage

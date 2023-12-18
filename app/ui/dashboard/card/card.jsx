import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

function Card({ item }) {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.273</span>
                <span className={styles.detail}>
                    <span
                        className={styles.positive}
                        // className={
                        //     item.change > 0 ? styles.positive : styles.negative
                        // }
                    >
                        {/* {item.change}% */}12%
                    </span>{" "}
                    more than previous week
                    {/* {item.change > 0 ? "more" : "less"} than previous week */}
                </span>
            </div>
        </div>
    );
}

export default Card;

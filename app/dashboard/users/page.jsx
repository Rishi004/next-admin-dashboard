import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

function UsersPage() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Jogn Doe
                            </div>
                        </td>
                        <td>john@email.com</td>
                        {/* <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td> */}
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users/`}>
                                    <button
                                        className={`${styles.button} ${styles.view}`}
                                    >
                                        View
                                    </button>
                                </Link>
                                <form>
                                    <input type="hidden" name="id" />
                                    <button
                                        className={`${styles.button} ${styles.delete}`}
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination count={10} />
        </div>
    );
}

export default UsersPage;

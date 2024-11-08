"use client";

import { UserProfile } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import styles from "./user.module.css";

export default function UserManagement({ user }: { user: UserProfile }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  return (
    <div className={styles.user_profile}>
      <div onClick={toggleOpen}>
        <Image
          src={user.picture ?? "/default-user.webp"}
          alt={user.name ?? "Foto de perfil del usuario"}
          width={36}
          height={36}
        />
      </div>

      <div
        className={styles.desplegable}
        style={{ display: open ? "block" : "none" }}
      >
        <ul>
          <li>
            <Link href={"/profile"}>Mi Perfil</Link>
            <hr />
          </li>
          <li>
            <Link href={"/offers"}>Mis Promociones</Link>
            <hr />
          </li>
          <li>
            <Link href={"/orders"}>Mis Pedidos</Link>
            <hr />
          </li>
          <li>
            <Link href={"/support"}>Soporte</Link>
            <hr />
          </li>
          <li>
            <Link href={"/api/auth/logout"}>Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

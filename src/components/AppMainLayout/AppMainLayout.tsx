import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from "./AppMainLayout.module.css";
import Header from "../Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default function AppMainLayout() {
  return (
    <MainLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

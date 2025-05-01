import Image from "next/image";
import styles from "./page.module.css";

import Header from "./_components/header/header";
import ControlBar from "./_components/control-bar/control-bar";
import ExtensionList from "./_components/extension-list/extension-list";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ControlBar />
        <ExtensionList />
      </main>
    </>
  );
}

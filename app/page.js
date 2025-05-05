import Image from "next/image";
import styles from "./page.module.css";

import Header from "./_components/header/header";
import ControlBar from "./_components/control-bar/control-bar";
import ExtensionList from "./_components/extension-list/extension-list";
import ExtensionsProvider from "./_utils/extensions-provider";
import RemoveModal from "./_components/remove-modal/remove-modal";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ExtensionsProvider>
          <ControlBar />
          <ExtensionList />
          <RemoveModal />
        </ExtensionsProvider>
      </main>
    </>
  );
}

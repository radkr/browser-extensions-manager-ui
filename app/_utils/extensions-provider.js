"use client";

import { createContext, useState } from "react";

import extensionsList from "./data.json";

export const ExtensionsContext = createContext({
  extensions: [],
  setFilter: () => {},
  toggleActive: () => {},
});

export default function ExtensionsProvider({ children }) {
  const [extensions, setExtensions] = useState(extensionsList);
  const [currentFilter, setCurrentFilter] = useState("ALL");

  const filteredExtensions = extensions.filter((extension) => {
    switch (currentFilter) {
      case "ALL":
        return true;
      case "ACTIVE":
        return extension.isActive == true;
      case "INACTIVE":
        return extension.isActive == false;
    }
  });

  function setFilter(key) {
    setCurrentFilter(key);
  }

  function toggleActive(extensionName) {
    setExtensions((previous) => {
      const current = previous.map((extension) => {
        const currentExtension = { ...extension };
        if (extension.name === extensionName) {
          currentExtension.isActive = !currentExtension.isActive;
        }
        return currentExtension;
      });
      console.log("New list:", current);
      return current;
    });
  }

  const extensionsValue = {
    extensions: filteredExtensions,
    filter: currentFilter,
    setFilter: setFilter,
    toggleActive: toggleActive,
  };

  return (
    <ExtensionsContext value={extensionsValue}>{children}</ExtensionsContext>
  );
}

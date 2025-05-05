"use client";

import { createContext, useState } from "react";

import extensionsList from "./data.json";

export const ExtensionsContext = createContext({
  extensions: [],
  setFilter: () => {},
  toggleActive: () => {},
  remove: () => {},
  toRemove: () => {},
  cancelRemove: () => {},
  aboutToRemove: null,
});

export default function ExtensionsProvider({ children }) {
  const [extensions, setExtensions] = useState(extensionsList);
  const [aboutToRemove, setAboutToRemove] = useState(null);
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

  function remove(extensionName) {
    console.log(`Remove ${extensionName} extension.`);
    setExtensions((previous) => {
      return previous.filter(
        (extension) => !(extension.name === extensionName)
      );
    });
    setAboutToRemove(null);
  }

  function toRemove(extensionName) {
    setAboutToRemove(extensionName);
  }

  function cancelRemove() {
    setAboutToRemove(null);
  }

  const extensionsValue = {
    extensions: filteredExtensions,
    filter: currentFilter,
    setFilter: setFilter,
    toggleActive: toggleActive,
    remove: remove,
    toRemove: toRemove,
    cancelRemove: cancelRemove,
    aboutToRemove: aboutToRemove,
  };

  return (
    <ExtensionsContext value={extensionsValue}>{children}</ExtensionsContext>
  );
}

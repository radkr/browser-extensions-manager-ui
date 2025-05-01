"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import logoLight from "@/public/images/logo.svg";
import logoDark from "@/public/images/logo-dark.svg";

export default function Logo() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  let src;

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  switch (resolvedTheme) {
    case "light":
      src = logoLight;
      break;
    case "dark":
      src = logoDark;
  }

  return <Image src={src} alt="Extensions logo" />;
}

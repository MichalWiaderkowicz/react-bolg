import { clsx } from "clsx";
import React from "react";

const Footer = () => {
  return (
    <p className={clsx("text-center", "text-muted", "mt-5", "mb-5")}>
      Copyright © BlogApp 2024
    </p>
  );
};

export default Footer;

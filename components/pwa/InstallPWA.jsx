"use client";

import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) return;
    promptInstall.prompt();
  };

  if (!supportsPWA) return null;

  return (
    <button
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
      className="cursor-pointer premium-button emerald-gradient text-white shadow-lg shadow-emerald-500/30 flex items-center gap-2 mx-auto ring-4 ring-emerald-500/10 hover:ring-emerald-500/20"
    >
      <Download size={18} />
      Install NewsBird App
    </button>
  );
};

export default InstallPWA;

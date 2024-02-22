import React, { useState, useEffect } from 'react';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    // Ensure that promptInstall is of type BeforeInstallPromptEvent
    if (promptInstall && promptInstall.prompt) {
      promptInstall.prompt();
    }
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <button
      className="btn btn-primary mb-2"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install App
    </button>
  );
};

export default InstallPWA;

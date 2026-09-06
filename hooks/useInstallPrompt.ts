import {
  useEffect,
  useState,
} from "react";

interface BeforeInstallPromptEvent
  extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

export const useInstallPrompt = () => {
  const [
    installPrompt,
    setInstallPrompt,
  ] =
    useState<BeforeInstallPromptEvent | null>(
      null,
    );
  const [isInstalled, setIsInstalled] =
    useState(false);
  const [isIOS, setIsIOS] =
    useState(false);

  useEffect(() => {
    console.log(
      "[PWA Debug] Hook mounted",
    );

    // Check if iOS
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(
        navigator.userAgent,
      ) && !window.MSStream;
    setIsIOS(isIOSDevice);
    console.log(
      "[PWA Debug] isIOS:",
      isIOSDevice,
    );
    console.log(
      "[PWA Debug] User Agent:",
      navigator.userAgent,
    );

    const handleBeforeInstallPrompt = (
      e: Event,
    ) => {
      console.log(
        "[PWA Debug] beforeinstallprompt event fired!",
        e,
      );
      e.preventDefault();
      setInstallPrompt(
        e as BeforeInstallPromptEvent,
      );
    };

    const handleAppInstalled = () => {
      console.log(
        "[PWA Debug] App installed!",
      );
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt,
    );
    window.addEventListener(
      "appinstalled",
      handleAppInstalled,
    );

    console.log(
      "[PWA Debug] Event listeners added",
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener(
        "appinstalled",
        handleAppInstalled,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    const { outcome } =
      await installPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    setInstallPrompt(null);
  };

  return {
    installPrompt,
    handleInstall,
    isInstalled,
    isIOS,
  };
};

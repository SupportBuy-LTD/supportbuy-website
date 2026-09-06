"use client";

import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import {
  useState,
  useEffect,
} from "react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { IconDownload } from "@tabler/icons-react";

export const InstallButton = () => {
  const {
    installPrompt,
    handleInstall,
    isInstalled,
  } = useInstallPrompt();
  const {
    isOpen,
    onOpen,
    onOpenChange,
  } = useDisclosure();
  const [isMobile, setIsMobile] =
    useState(false);
  const [isAndroid, setIsAndroid] =
    useState(false);
  const [isIOS, setIsIOS] =
    useState(false);
  const [isSafari, setIsSafari] =
    useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;

    // Check if Android
    const isAndroidDevice =
      /Android/i.test(ua);
    setIsAndroid(isAndroidDevice);

    // Check if Safari (iOS)
    const isSafariDevice =
      /Safari/.test(ua) &&
      !/Chrome/.test(ua) &&
      /iPhone|iPad|iPod/.test(ua);
    const isIOSDevice =
      /iPhone|iPad|iPod/.test(ua);
    setIsSafari(isSafariDevice);
    setIsIOS(isIOSDevice);

    // Check if mobile device
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        ua,
      );
    setIsMobile(isMobileDevice);
  }, []);

  // Hide if already installed
  if (isInstalled) {
    return null;
  }

  // Show iOS instructions on Safari
  if (isSafari && isIOS) {
    return (
      <>
        <Button
          onPress={onOpen}
          startContent={
            <IconDownload size={18} />
          }
          //   color="primary"
          //   variant="solid"

          size="sm"
          className="text-xs bg-sb-secondary-300 hover:bg-sb-secondary-400 text-sb-primary"
        >
          Install App
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="md"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Install Support Buy on
                  iOS
                </ModalHeader>
                <ModalBody>
                  <div className="space-y-4">
                    <p className="text-sm">
                      Follow these steps
                      to install Support
                      Buy on your home
                      screen:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-sm">
                      <li>
                        Tap the{" "}
                        <strong>
                          Share
                        </strong>{" "}
                        button (arrow
                        pointing up) at
                        the bottom of
                        Safari
                      </li>
                      <li>
                        Scroll down and
                        tap{" "}
                        <strong>
                          "Add to Home
                          Screen"
                        </strong>
                      </li>
                      <li>
                        Confirm the app
                        name and tap{" "}
                        <strong>
                          Add
                        </strong>
                      </li>
                      <li>
                        The app will now
                        appear on your
                        home screen like
                        a native app!
                      </li>
                    </ol>
                    <p className="text-xs text-gray-500 mt-4">
                      Note: This app
                      works offline and
                      loads faster than
                      using Safari.
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onPress={onClose}
                  >
                    Got it!
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  // Use the native prompt when available; otherwise explain Chrome's manual path.
  if (isAndroid && isMobile) {
    return (
      <>
        <Button
          onPress={
            installPrompt
              ? handleInstall
              : onOpen
          }
          startContent={
            <IconDownload size={18} />
          }
          //   color="primary"
          //   variant="solid"
          size="sm"
          //   className="text-xs"
          className="text-xs bg-sb-secondary-300 hover:bg-sb-secondary-400 text-sb-primary"
        >
          Install App
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="md"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  Install Support Buy
                </ModalHeader>
                <ModalBody>
                  <p className="text-sm">
                    In Chrome, open the
                    menu and choose
                    <strong>
                      {" "}
                      Add to Home
                      screen{" "}
                    </strong>
                    or{" "}
                    <strong>
                      Install app
                    </strong>
                    .
                  </p>
                  <p className="text-xs text-gray-500">
                    The automatic
                    install prompt is
                    unavailable on this
                    development address.
                    It will appear when
                    the site uses HTTPS.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onPress={onClose}
                  >
                    Got it!
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  // Don't show on other devices
  return null;
};

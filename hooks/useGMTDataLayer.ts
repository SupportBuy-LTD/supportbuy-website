import { sendGTMEvent } from "@next/third-parties/google";

export function useGMTDataLayer() {
  const sendEvent = (
    eventName: string,
    eventData: string,
  ) => {
    sendGTMEvent({
      event: eventName,
      value: eventData,
    });
  };

  return { sendEvent };
}

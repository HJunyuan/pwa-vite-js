import { useEffect, useState } from "react";

type IsSupported = "loading" | boolean;

const useLaunchQueue = (
  consumer: (launchParams: LaunchParams) => void
): [isSupported: IsSupported] => {
  const [isSupported, setIsSupported] = useState<IsSupported>("loading");

  useEffect(() => {
    if (window.launchQueue) {
      setIsSupported(true);
      window.launchQueue.setConsumer(async (launchParams) =>
        consumer(launchParams)
      );
    } else {
      setIsSupported(false);
      console.error("File Handling API is not supported!");
    }
  }, []);

  return [isSupported];
};

export { useLaunchQueue };

import { useLaunchQueue } from "./hooks/use-launch-queue";
import { readTextFile } from "./utils/file-reader";

import "./App.css";

function App() {
  const [isSupported] = useLaunchQueue(async (launchParams) => {
    if (launchParams.files && launchParams.files.length > 0) {
      try {
        const file = await launchParams.files[0].getFile();
        const text = await readTextFile(file);

        if (typeof text !== "string") {
          return console.error("Invalid text file");
        }

        const url = new URL(
          "https://www.trustdocs.gov.sg/verify?m=uri-fragment"
        );
        url.hash = encodeURIComponent(text);

        window.location.replace(url);
      } catch (e) {
        console.error(e);
      }
    }
  });

  return (
    <>
      <h1>OpenAttestation</h1>
      <p>File Handling API support: {isSupported === true ? `✅` : `❌`}</p>
    </>
  );
}

export default App;

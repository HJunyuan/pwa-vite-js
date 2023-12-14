/* Manual interface definition as window.launchQueue still missing in TypeScript - still experimental? */

interface Window {
  launchQueue?: {
    setConsumer(consumer: (launchParams: LaunchParams) => void): void;
  };
}

interface LaunchParams {
  files: FileSystemFileHandle[];
  targetURL: string;
}

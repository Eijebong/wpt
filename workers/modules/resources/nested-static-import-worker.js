import * as module from './export-on-static-import-script.js';
self.onmessage = e => {
  const source = e.source ? e.source : e.target;
  source.postMessage(module.importedModules);
};

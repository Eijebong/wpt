import * as module from './export-on-dynamic-import-script.js';

let promises = [];
promises.push(new Promise(resolve => {
  self.onmessage = e => {
    const source = e.source ? e.source : e.target;
    resolve(source);
  };
}));

promises.push(new Promise(resolve => {
  module.ready.then(() => {
    resolve(module.importedModules);
  });
}));

Promise.all(promises).then((results) => {
  results[0].postMessage(results[1]);
});

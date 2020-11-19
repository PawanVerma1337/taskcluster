// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class Object extends Client {
  constructor(options = {}) {
    super({
      serviceName: 'object',
      serviceVersion: 'v1',
      exchangePrefix: '',
      ...options,
    });
    this.ping.entry = {"args":[],"category":"Ping Server","method":"get","name":"ping","query":[],"route":"/ping","stability":"stable","type":"function"}; // eslint-disable-line
    this.uploadObject.entry = {"args":["name"],"category":"Upload","input":true,"method":"post","name":"uploadObject","query":[],"route":"/upload/<name>","scopes":"object:upload:<projectId>:<name>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.downloadObject.entry = {"args":["name"],"category":"Download","input":true,"method":"put","name":"downloadObject","output":true,"query":[],"route":"/download/<name>","scopes":"object:download:<name>","stability":"experimental","type":"function"}; // eslint-disable-line
  }
  /* eslint-disable max-len */
  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  /* eslint-enable max-len */
  ping(...args) {
    this.validate(this.ping.entry, args);

    return this.request(this.ping.entry, args);
  }
  /* eslint-disable max-len */
  // Upload backend data.
  /* eslint-enable max-len */
  uploadObject(...args) {
    this.validate(this.uploadObject.entry, args);

    return this.request(this.uploadObject.entry, args);
  }
  /* eslint-disable max-len */
  // Get information on how to download an object.  Call this endpoint with a list of acceptable
  // download methods, and the server will select a method and return the corresponding payload.
  // Returns a 406 error if none of the given download methods are available.
  // See [Download Methods](https://docs.taskcluster.net/docs/reference/platform/object/upload-download-methods#download-methods) for more detail.
  /* eslint-enable max-len */
  downloadObject(...args) {
    this.validate(this.downloadObject.entry, args);

    return this.request(this.downloadObject.entry, args);
  }
}

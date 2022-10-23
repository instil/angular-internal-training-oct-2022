# Instil TypeScript Course - Examples

This is the example code for the Instil TypeScript course.

## Running this project

Run `npm install`, then `npm run install-check`, then if it works, run `npm run start` and open a browser to http://localhost:3000

Output should look like this:

```
=> examples: npm install
.. (contents of the internet are downloaded) ..

added 512 packages, and audited 513 packages in 3s

76 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

=> examples: npm run install-check

> typescript-examples@1.0.0 install-check
> ts-node ./src/install-check.ts

 Checking That it all works. Looks Good

=> examples: npm run start

> typescript-examples@1.0.0 start
> webpack-dev-server

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.58:3000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:3000/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/ryan/Projects/training-repo/TypeScript/examples/public' directory
<i> [webpack-dev-server] 404s will fallback to 'index.html'
..(snip)..
webpack 5.74.0 compiled successfully in 3874 ms

```

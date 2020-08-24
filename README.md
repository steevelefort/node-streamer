# Node HTTP Streamer

> HTTP-Streaming for Node.js

[![Build Status](https://travis-ci.org/GregoryPevnev/node-streamer.svg?branch=master)](https://travis-ci.org/GregoryPevnev/node-streamer)

#### A simple lightweight Express-Middleware that serves static content by [Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)

## Set Up

### Installation

```sh
$ npm install git@github.com:steevelefort/node-streamer.git
```

### Import

```javascript
const streamer = require("node-http-streamer");
```

## Sample

> Just provide a path to a directory with media files for streaming(Video, Audio, etc).

```javascript
const streamer = require("node-http-streamer");

const streamMiddleware = streamer(pathToVideo);
streamMiddleware(res,req)
```

#### Forked from 
Github: https://github.com/GregoryPevnev/node-streamer
NPM: https://www.npmjs.com/package/node-http-streamer


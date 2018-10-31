# Node HTTP Streamer

> HTTP-Streaming for Node.js

#### A simple lightweight Express-Middleware that serves static content by [Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)

## Set Up

### Installation

```sh
$ npm install node-http-streamer
```

### Import

```javascript
const streamer = require("node-http-streamer");
```

## Sample

> Just provide a path to a directory with media files for streaming(Video, Audio, etc).

```javascript
const express = require("express");
const path = require("path");
const streamer = require("node-http-streamer");

const app = express();

// Stream all contents of directory "video" at path "/stream"
app.use("/stream", streamer(path.join(__dirname, "video")));
```

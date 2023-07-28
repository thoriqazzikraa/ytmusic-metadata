# Youtube Music Metadata
Light version of youtube music metadata using Node-ID3

# Install
`npm i ytmusic-metadata`

# Usage
```
(async () => {
const yt = require("ytmusic-metadata")
const ytmusic = await yt.downloads("bubble tea and cigarattes leap")
console.log(ytmusic)
```

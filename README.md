# Youtube Music Metadata
Light version of youtube music metadata using Node-ID3

# Install
`npm i ytmusic-metadata`

# Search Function
```
(async () => {
const yt = require("ytmusic-metadata")
const ytmusic = await yt.searchTrack(query, type) // Default type is song
console.log(ytmusic)
})
```
# Available Type
`"song"`
`"video"`

# Example Search Function With Type
```
(async () => {
const yt = require("ytmusic-metadata")
const ytmusic = await yt.searchTrack("fire flower", "video") // it will return array
console.log(ytmusic)
})
```

# Downloads Function
```
(async () => {
const yt = require("ytmusic-metadata")
const ytmusic = await yt.downloads(query)
console.log(ytmusic)
})
```

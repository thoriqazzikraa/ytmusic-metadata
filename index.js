const axios = require("axios");
axios.defaults.headers.post["user-agent"] = "PostmanRuntime/7.32.2";
const fetch = require("node-fetch");
const nodeID3 = require("node-id3");
const youtube = require("youtube-music-api");
const yt = new youtube();
const { ytmp3 } = require("@nechlophomeriaa/ytdl");

async function searchTrack(query, type) {
  function _0x36a8(_0x3f21d9, _0x5d073e) {
    const _0x4efc13 = _0x3e68();
    return (
      (_0x36a8 = function (_0x19879a, _0x13cf05) {
        _0x19879a = _0x19879a - (0x7 * -0x57e + 0x1b92 + 0xb84);
        let _0x286cfe = _0x4efc13[_0x19879a];
        return _0x286cfe;
      }),
      _0x36a8(_0x3f21d9, _0x5d073e)
    );
  }
  (function (_0x2d0564, _0x3393c3) {
    const _0x295f56 = _0x36a8,
      _0x5671f5 = _0x2d0564();
    while (!![]) {
      try {
        const _0x1d5ea3 =
          -parseInt(_0x295f56(0xb5)) / (-0x1eeb + -0x1 * 0x65a + 0x2 * 0x12a3) +
          parseInt(_0x295f56(0xae)) / (-0x26bc + 0x1567 + 0x1157 * 0x1) +
          -parseInt(_0x295f56(0xb3)) / (0x1 * 0x24c3 + 0x980 + -0x2e40) +
          (-parseInt(_0x295f56(0xaf)) /
            (-0x1 * -0x1962 + -0x1 * -0x2421 + 0xad * -0x5b)) *
            (-parseInt(_0x295f56(0xa4)) /
              (-0x7 * 0x55b + -0x1af * -0xd + -0x2b * -0x5d)) +
          (parseInt(_0x295f56(0xb4)) / (-0x15e5 + 0x1b89 + -0x59e)) *
            (-parseInt(_0x295f56(0xb7)) /
              (0x1 * -0x16a9 + -0x25 * -0xeb + -0x1 * 0xb47)) +
          -parseInt(_0x295f56(0xa8)) / (-0x1716 + -0x468 * 0x8 + 0xf1 * 0x3e) +
          (parseInt(_0x295f56(0xb0)) / (-0x200d + 0x1ab1 * -0x1 + 0x3ac7)) *
            (parseInt(_0x295f56(0xb2)) / (-0x1 * -0x1 + -0x26a5 + 0x26ae));
        if (_0x1d5ea3 === _0x3393c3) break;
        else _0x5671f5["push"](_0x5671f5["shift"]());
      } catch (_0x4eb0bf) {
        _0x5671f5["push"](_0x5671f5["shift"]());
      }
    }
  })(_0x3e68, -0x8ead1 * -0x1 + -0x192f1d + -0x19d8 * -0x11e);
  return new Promise(async (_0x3f6eb2, _0x2b523e) => {
    const _0x1d9325 = _0x36a8,
      _0x31d76a = {
        mLnxx: _0x1d9325(0xad),
        SRVwV: function (_0x1190b0, _0x1cb5cd) {
          return _0x1190b0(_0x1cb5cd);
        },
        WdJpN: function (_0x59f411, _0x5b1a75) {
          return _0x59f411(_0x5b1a75);
        },
      };
    await yt[_0x1d9325(0xab)]()
      [_0x1d9325(0xb6)](async () => {
        const _0xc713e = _0x1d9325,
          _0x3cf83b = type ? type : _0x31d76a[_0xc713e(0xa7)],
          _0xb4dce7 = await yt[_0xc713e(0xa9)](query, _0x3cf83b);
        _0x31d76a[_0xc713e(0xb1)](_0x3f6eb2, _0xb4dce7[_0xc713e(0xa6)]);
      })
      [_0x1d9325(0xac)]((_0x13ccaa) => {
        const _0x1ae240 = _0x1d9325;
        console[_0x1ae240(0xaa)](_0x13ccaa),
          _0x31d76a[_0x1ae240(0xa5)](_0x2b523e, _0x13ccaa);
      });
  });
  function _0x3e68() {
    const _0x540901 = [
      "1089393UIkzIN",
      "then",
      "62979abEQDL",
      "25WDMwST",
      "WdJpN",
      "content",
      "mLnxx",
      "12276360RijegX",
      "search",
      "log",
      "initalize",
      "catch",
      "song",
      "1708482uegKKV",
      "1253464SJIeDw",
      "23135715rhmVRb",
      "SRVwV",
      "10nFhtsl",
      "198432UuSbwf",
      "984kYuQJo",
    ];
    _0x3e68 = function () {
      return _0x540901;
    };
    return _0x3e68();
  }
}

async function downloads(query) {
function _0x4455(_0x571048,_0xeced3e){const _0x17a982=_0x3dd5();return _0x4455=function(_0x134063,_0x19e2bc){_0x134063=_0x134063-(0x35*0x99+0x2189+-0x40c8);let _0x1dfe8f=_0x17a982[_0x134063];return _0x1dfe8f;},_0x4455(_0x571048,_0xeced3e);}const _0x2ce840=_0x4455;function _0x3dd5(){const _0x3dfaf6=['4290622Cfirvz','thumbnails','63BBrPGS','name','5735090LkUaEl','split','4XMLTPD','videoId','24JgDAot','album','write','utu.be/','451040xNmSZR','log','then','4377oKuTAw','1268VNHbvv','146255TLaDMd','303600mQQYem','Front\x20Cove','https://yo','buffer','11504449hymAaL','duration','artist','url'];_0x3dd5=function(){return _0x3dfaf6;};return _0x3dd5();}(function(_0x3bc041,_0x46fc51){const _0x5dcd65=_0x4455,_0x4d7ab0=_0x3bc041();while(!![]){try{const _0x5833d6=-parseInt(_0x5dcd65(0x6f))/(-0x14eb+0x25db*0x1+0xf*-0x121)*(-parseInt(_0x5dcd65(0x7e))/(-0x85f*0x2+-0x1f*-0x54+-0x694*-0x1))+-parseInt(_0x5dcd65(0x87))/(0x1371+-0x2286+0xf18)*(parseInt(_0x5dcd65(0x6e))/(-0x2*0x841+-0x8e1*0x4+0x1*0x340a))+parseInt(_0x5dcd65(0x84))/(-0x2588+-0x20b9+0x4646)*(parseInt(_0x5dcd65(0x80))/(-0x31a+-0x92c+0xc4c))+-parseInt(_0x5dcd65(0x78))/(0xf3a+-0x1a8a+0xb57)+parseInt(_0x5dcd65(0x70))/(-0x6*-0x25f+-0x642+-0x7f0)*(parseInt(_0x5dcd65(0x7a))/(-0x24b6+-0xc29+0x30e8))+-parseInt(_0x5dcd65(0x7c))/(0x228d+0x955*-0x2+0xfd9*-0x1)+parseInt(_0x5dcd65(0x74))/(-0x1788+-0x73c+0x1ecf);if(_0x5833d6===_0x46fc51)break;else _0x4d7ab0['push'](_0x4d7ab0['shift']());}catch(_0x39852d){_0x4d7ab0['push'](_0x4d7ab0['shift']());}}}(_0x3dd5,-0xc07*-0x29+-0x77425+0x1*0xa58fb));try{const trackOne=await searchTrack(query),y2Search=await ytmp3(_0x2ce840(0x72)+_0x2ce840(0x83)+trackOne[-0x1*0x23c9+-0xe2e+-0x1*-0x31f7][_0x2ce840(0x7f)]),bufferThumb=await fetch(trackOne[-0x1*-0x12fd+-0x234e+0x1051*0x1][_0x2ce840(0x79)][0x1eff+-0x1278+-0xc86][_0x2ce840(0x77)][_0x2ce840(0x7d)]('=')[0x2634+0x2f+-0x2663])[_0x2ce840(0x86)](_0x35edb7=>_0x35edb7[_0x2ce840(0x73)]()),bufferTrack=await fetch(y2Search[_0x2ce840(0x77)])[_0x2ce840(0x86)](_0x46ffae=>_0x46ffae[_0x2ce840(0x73)]()),tags={'title':trackOne[0x1d5*0x5+0x20c2+0x93*-0x49][_0x2ce840(0x7b)],'artist':trackOne[-0x58f*-0x1+-0x9df+0x450][_0x2ce840(0x76)][_0x2ce840(0x7b)],'album':trackOne[-0x1f09+-0xf0a+0x2e13*0x1][_0x2ce840(0x81)][_0x2ce840(0x7b)],'APIC':{'description':_0x2ce840(0x71)+'r','imageBuffer':bufferThumb},'time':trackOne[0xa6e+0xeb7*-0x1+0x449][_0x2ce840(0x75)]},bufferAudio=await nodeID3[_0x2ce840(0x82)](tags,bufferTrack),result={'status':!![],'url':bufferAudio};return console[_0x2ce840(0x85)](result),result;}catch(_0x55a8e7){const result={'status':![],'message':String(_0x55a8e7)};return result;}
}

module.exports = { searchTrack, downloads };

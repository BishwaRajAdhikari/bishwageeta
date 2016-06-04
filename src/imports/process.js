var fs = require('fs');
var path=require('path');
var stream = require('stream');
var util = require('util');
var ss = require('stream-stream');
var _=require('lodash');
var db=[];
/*
var types=[];
var chapters=[
  {id:1,lines:46,groups:[{start:17,end:18},{start:32,end:35},{start:37,end:38}]},
  {id:2,lines:72,groups:[{start:42,end:43}]},
  {id:3,lines:43,groups:[]},
  {id:4,lines:42,groups:[]},
  {id:5,lines:29,groups:[{start:8,end:9},{start:27,end:28}]},
  {id:6,lines:47,groups:[{start:11,end:12},{start:13,end:14},{start:20,end:23}]},
  {id:7,lines:30,groups:[]},
  {id:8,lines:28,groups:[{start:12,end:13}]},
  {id:9,lines:34,groups:[]},
  {id:10,lines:42,groups:[{start:4,end:5},{start:12,end:13}]},
  {id:11,lines:55,groups:[{start:10,end:11},{start:26,end:27},{start:41,end:42}]},
  {id:12,lines:20,groups:[{start:3,end:4},{start:6,end:7},{start:13,end:14},{start:18,end:19}]},
  {id:13,lines:35,groups:[{start:6,end:7},{start:8,end:12}]},
  {id:14,lines:27,groups:[{start:22,end:25}]},
  {id:15,lines:20,groups:[{start:3,end:4}]},
  {id:16,lines:24,groups:[{start:1,end:3},{start:13,end:15}]},
  {id:17,lines:28,groups:[{start:5,end:6},{start:8,end:10}]},
  {id:18,lines:78,groups:[{start:51,end:53}]}
];
var files=function(){
  function zeroFill( number, width ){
    width -= number.toString().length;
    if ( width > 0 )
    {
      return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
    }
    return number.toString(); // always return a string
  }
  var items=[];
  function processChapter(chapter){
        var versions=['TextNepali','TextSanskrit'];
        _.each(versions,processVersion);
        function processVersion(version){
          return _.times(chapter.lines, processLine);
          function processLine(lineIndex){
            var line=lineIndex+1;
            var groupedInfo=lineGrouped();
            var filename;
            if(groupedInfo.found && groupedInfo.isrepresentative===false) return;
            items.push({
              version:version,
              chapter:chapter.id,
              lines:groupedInfo.lines==undefined?[line]:groupedInfo.lines,
              path: path.join(
                path.resolve(__dirname),
                version,
                zeroFill(chapter.id,2)+' Chapter',
                getFilename()
              )
            });
            function lineGrouped(){
              var found=_.find(chapter.groups, function(group){
                return line>=group.start && line<=group.end;
              });
              if(found==undefined) return {found:false};
              return {
                found:true,isrepresentative:line==found.start,
                file:zeroFill(found.start,2)+'-'+zeroFill(found.end,2)+'.txt',
                lines:_.range(found.start,found.end+1)
              };
          }
          function getFilename(){
            if(groupedInfo.found==false){
              return zeroFill(line,2)+'.txt';
            }
            else if(groupedInfo.found) {
              return groupedInfo.file;
            };
          }
        }
      }
  }
  _.each(chapters,processChapter);
  return items;
}();
//console.log("items",files);


var readerStream=function(filename,version,chapter,lines){
   //return fs.createReadStream(path.join(basePath,'TextNepali','01 Chapter',filename));
   var filecontent=fs.readFileSync(filename,{encoding:'utf-8'});
   var rs=new stream.Readable({objectMode:true});
   rs.push(JSON.stringify({version:version,chapter:chapter,lines:lines,text:filecontent}));
   rs.push(null);
   return rs;
}
function Sanitizer(){
    stream.Transform.call(this,{encoding:'utf-8',objectMode:true});
    this._readableState.objectMode = true;
    this._writableState.objectMode = true;
}
util.inherits(Sanitizer, stream.Transform);
Sanitizer.prototype._transform = function(obj, encoding, cb){
    this.push(obj);
    this.push(',');
    cb();
};
var writerStream = fs.createWriteStream('raw.txt',{encoding:'utf-8'});

var strms = ss();
files.forEach(function(file) {
    strms.write(readerStream(file.path,file.version,file.chapter,file.lines));
});
strms.end();

strms
  .pipe(new Sanitizer())
  .pipe(writerStream);

*/
/*
  (function(){
      var filecontent=fs.readFileSync('raw.txt',{encoding:'utf-8'});
      if(filecontent.substring(filecontent.length-1)==','){
        filecontent=filecontent.substring(0,filecontent.length-1);
      }
      fs.writeFileSync('raw.json','['+filecontent+']');
  })();
*/

(function(){
    function zeroFill( number, width ){
      width -= number.toString().length;
      if ( width > 0 )
      {
        return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
      }
      return number.toString(); // always return a string
    }
    function getAudio(lines){
      return lines.length>1
                      ? zeroFill(lines[0],2)+'-'+zeroFill(lines[lines.length-1])+'.mp4'
                      : zeroFill(lines[0],2)+'.mp4';
    }
    var raw=JSON.parse(fs.readFileSync('raw.json',{encoding:'utf-8'}));
    function byLines(item){
      return item.lines[0];
    }
    function toChapters(result,value,key){
      //console.log('\n------\nresult',result);
      //console.log('value',value);
      //console.log('key',key);
      //(result[value.chapter] || (result[value.chapter]=[])).push({chapter:value.chapter,text:value.text});
      // if(result['chapter'+value.chapter]==undefined){
      //   result['chapter'+value.chapter]={chapter:value.chapter,texts:[]};
      // }
      var chapter=_.find(result,{id:value.chapter});
      if(chapter==undefined){
          chapter={id:value.chapter,texts:[]};
          result.push(chapter);
      }
      var texts=_.find(chapter.texts,{lines:value.lines});
      if(texts==undefined){
        texts={lines:value.lines};
        chapter.texts.push(texts);
      }
      texts[value.version]=value.text;
      texts['audio']=getAudio(value.lines);
      return result;
    }
    var output=_.chain(raw)
                    .sortBy('chapter','version',byLines)
                    .reduce(toChapters,[])
                    .value();
    fs.writeFileSync('processed.json',JSON.stringify(output));
})();

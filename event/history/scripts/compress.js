//js jquery/event/history/compress.js

load("jmvc/compress/compress.js")
var compress = new Steal.Compress(['jquery/event/history/history.html',
                                   'jquery/event/history']);
compress.init();
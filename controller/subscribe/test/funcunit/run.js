//load("jquery/controller/subscribe/test/funcunit/run.js")


//load global selenium settings, change if you want something different
load('settings/selenium.js')

load('jmvc/rhino/loader.js');
rhinoLoader(function(){
    include.plugins('jquery/controller/subscribe/test/funcunit');  // load tests
}, true);
module("ejs")


test("ejs testing works", function(){

        S.open("file:/c:/Development/jmvc/jquery/view/ejs/ejs.html");
		S.wait(10, function(){
			ok(true, "things working");
		})

})
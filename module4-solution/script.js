(function ass (){
        var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

        
        for (name in names) {
                 
                  var firstLetter =names[name].toLowerCase().charAt(0);

                  if (firstLetter == "j" ) {
                    byeSpeaker.speak(names[name]);
                  } else {
                    helloSpeaker.speak(names[name]);
                  }
        }
})()
function pageLoad(){ //mnden ezen belül

  let myObject = {
    key1: "this is a text", //vessző
    key2: 2,
    key3: false,
    key4: ["alma", "cseresznye", "citrom"],
    key5: function () {
      return "This is a function";
    },
    key6: {
      key6obj1: "This is another text",
      key6obj2: 3
    }

  }; //object: curly braces

  console.log(myObject);

}

window.addEventListener("load", pageLoad);
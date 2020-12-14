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
    },
    key7: function () {
      /*return 7;*/
      console.log(7);
    },
    key8: function (param1, param2) {

      console.log(param1);

      for (let index = 0; index < param2.length; index++) {
        console.log(param2[index]);
      }
    },
    key9: function (name) {
      return `
        <h1>Greetings my beloved ${name}!</h1>
      ` /* itt nem kellett újra létrehozni a name paramétert, simán így hivatkozunk rá, nem szabad változónévként használni a függvényen belül, többi függvény nem látja a függvény paraméterét, cak azon belül létezik amúgy*/
    } // utolsó után nem kell zárójel

  }; //object: curly braces

  console.log(myObject.key5()); // i
  myObject.key7(); // függvény esetében kell a ()
  myObject.key8("Show this text.", [1, 5, 7, 10]); /* ITT KÜLDESZ BEFELE INFORMÁCIÓT A FÜGGVÉNYBE (lehet több paraméter és többféle típus is) */
  document.getElementById("root").insertAdjacentHTML("beforeend", myObject.key9("Blabla")); // kell key9() mert function
  //insertAdjacentHTML() egy függvény, kap két argumentumot (első: hova illessze be, második: mit)
  // ctrl + hover az insertesre: mutatja, hogy mi micsoda benne
}

window.addEventListener("load", pageLoad);

// összes eseményfigyelő visszatér egy paraméterrel (e, stb.)
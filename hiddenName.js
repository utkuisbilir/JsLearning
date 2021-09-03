let name = "Utku";

let surName = "İşbilir";

let first2CharacterOfName = name.slice(0, 2);

let first2CharacterOfSurName = surName.slice(0, 2);

let hiddenName = first2CharacterOfName.padEnd(name.length, "*") + " " + first2CharacterOfSurName.padEnd(surName.length, "*");


console.log(hiddenName);

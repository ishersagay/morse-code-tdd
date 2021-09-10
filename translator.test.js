import {arrToMorse, translate} from "./translator";
import {stringConvert} from "./translator";

test("Object works", () => {
    expect(translate("f")).toBe(".._.")
    expect(translate("v")).toBe("..._")
    expect(translate("H")).toBe("....")
})

test("Turns string into Char", () => {
    expect(stringConvert("Hello World")).toStrictEqual(['h',"e","l","l","o","w","o","r","l","d"])
    expect(stringConvert("Isher   Sagay")).toStrictEqual(["i","s","h","e","r","s","a","g","a","y"])
    expect(stringConvert("I")).toStrictEqual(["I"])
})

test('Turns char into Morse', () => {
    expect(arrToMorse("H")).toBe("....");
    expect(arrToMorse("p")).toBe(".__.");
    expect(arrToMorse("Hello")).toBe("....,.,._..,._..,___");
});
const extractJson=async (text) => {
    if(!text){
        return
    }
    const cleaned=text.replace(/```json/gi,"")
    .replace(/```/g,"")
    .trim();

    const firsBracket=cleaned.indexOf("{");
    const closeBracket=cleaned.lastIndexOf("}");
    if(firsBracket===-1 || closeBracket===-1)return null
    const jsonString=cleaned.slice(firsBracket,closeBracket+1);
    return JSON.parse(jsonString);

}
export default extractJson
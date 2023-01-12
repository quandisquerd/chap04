import menu from "./header";
import footer  from "./footer";
const block = ()=>{
    return `
        ${menu()}
        <div class="container">
        <h1> Vũ Đình Quân<h1></h1>
        </div>${footer()}
    `
}
export default block;
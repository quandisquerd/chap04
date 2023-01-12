import Navigo from "navigo";
const out = new Navigo("/", {linksSelector: "a",hash:true});
const inp = (component, container)=>{
    container.innerHTML = component();

}
export {out,inp};
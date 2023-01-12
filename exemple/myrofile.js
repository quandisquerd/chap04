import { project } from "./profile";
import menu from "./header";
import footer from "./footer";

const myprofile = () => {
    return `${menu()}
    </div >
    <div class="Allprofile">
        <div class="tittle">
        <h1><i class="fa-sharp fa-solid fa-user"></i>   MYPROFILE</h1></h1>
        <a href="/" class="exit"><i  class="fa-solid fa-xmark" ></i></a></div>
        <div class="profile">
            <div class="image">
                <img src="${project.profile.image}" alt="">
            </div>
            <div class="name">
                <b>Name</b>: <span>${project.profile.myname}</span><br>
                <b>Address</b>: <span>${project.profile.address}</span><br>
                <b>Birthday</b>: <span>${project.profile.age}</span><br>
                <b>Major</b>: <span>${project.profile.major}</span>
            </div>
        </div>
    </div>
    ${footer()}`
};
export { myprofile };
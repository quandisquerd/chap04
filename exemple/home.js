import { project } from "./profile"
import footer from "./footer";
import menu from "./header";
const image = () => {

   return `${menu()}
  
   <div class="allpro">
      <div class="pro1 mr">
      <div class="proimg">
       <img src="${project.profile.image}" alt=""></div>
       <div class="proicon">
       <a href="https://www.facebook.com/vudinhquan.31102002"><i class="fa-brands fa-facebook"></i></a>
       <a href=""><i class="fa-brands fa-github"></i></a>
       <a href=""><i class="fa-brands fa-telegram"></i></a>
       <a href=""><i class="fa-brands fa-instagram"></i></a></div>
         <a href="/myprofile"><button>view profile</button></a>
      </div>
      <div class="pro1 mr">
         <div class="proimg">
       <img src="${project.profile.image}" alt=""></div>
       <div class="proicon">
       <a href="https://www.facebook.com/vudinhquan.31102002"><i class="fa-brands fa-facebook"></i></a>
       <a href=""><i class="fa-brands fa-github"></i></a>
       <a href=""><i class="fa-brands fa-telegram"></i></a>
       <a href=""><i class="fa-brands fa-instagram"></i></a></div>
         <a href="/myprofile"><button>view profile</button></a>
      </div>
      <div class="pro1">
         <div class="proimg">
       <img src="${project.profile.image}" alt=""></div>
       <div class="proicon">
       <a href="https://www.facebook.com/vudinhquan.31102002"><i class="fa-brands fa-facebook"></i></a>
       <a href=""><i class="fa-brands fa-github"></i></a>
       <a href=""><i class="fa-brands fa-telegram"></i></a>
       <a href=""><i class="fa-brands fa-instagram"></i></a></div>
         <a href="/myprofile"><button>view profile</button></a>
      </div>

   </div>

   ${footer()}`


}
export { image };
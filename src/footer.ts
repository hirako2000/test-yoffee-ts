
import {html} from 'yoffee';

export async function addFooter() {

    const ele =  html()`

    <footer class="p-10 padding footer bg-base-200 text-base-content">
        <div>
            <span class="footer-title">Stuff</span> 
            <a class="link link-hover">Abc</a> 
            <a class="link link-hover">Poiu</a> 
        </div> 
        <div>
            <span class="footer-title">Other</span> 
            <a class="link link-hover">Stack</a> 
            <a class="link link-hover">Blip</a> 
            <a class="link link-hover">Sock</a>
        </div> 

    </footer> 
    `
    document.getElementById("footer")?.appendChild(ele);  
};             

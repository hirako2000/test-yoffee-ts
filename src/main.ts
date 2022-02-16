
import {html} from 'yoffee';

export async function addMain(state: any) {

    const ele =  html(state)`

    <div class="rounded-lg shadow bg-base-200 drawer h-16">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
        <div class="flex flex-col drawer-content">
            <div class="w-full py-0 px-2 navbar bg-base-300">

                <div class="flex-1 px-2 mx-2 padding">
                    <a href="/"> Name: ${() => state.name}</a>
                </div> 

                <div class="flex-1 px-2 mx-2 padding">
                <a href="/"> Age: ${() => state.age}</a>
                 </div> 

                <ul class="menu horizontal">
                    <li class="m-2">
                        <div class="m-2 eee" id="eee"></div>
                    </li> 
                    <li class="m-2">
                    <a class="rounded-btn" onclick=${() => {
                        reset();
                    }}>Reset</a>
                    </li>
                </ul>
                </div>
            </div>
        </div> 
    </div>
    `
    document.getElementById("main")?.appendChild(ele);
    function reset() {
        state.age = Math.floor(Math.random() * 90);
    }
    
};             

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar(){


const pathname = usePathname();

const [open,setOpen] = useState(false);



const menu = [

{
name:"Home",
link:"/"
},

{
name:"About",
link:"/about"
},

{
name:"Research",
link:"/research"
},

{
name:"Publications",
link:"/publications"
},

{
name:"Certificates",
link:"/certificates"
},

{
name:"Skills",
link:"/skills"
},

{
name:"Contact",
link:"/contact"
}

];




return (


<nav

className="
fixed
top-4
left-1/2
-translate-x-1/2
z-50
w-[92%]
max-w-7xl
rounded-2xl
bg-white/80
backdrop-blur-xl
shadow-xl
border
border-white/50
"

>


<div

className="
flex
items-center
justify-between
px-6
py-4
"

>


{/* LOGO */}


<Link

href="/"

className="
font-bold
text-2xl
text-slate-900
"

>

MH

<span className="text-cyan-500">
.
</span>


</Link>







{/* DESKTOP MENU */}


<div

className="
hidden
md:flex
items-center
gap-7
"

>


{


menu.map((item)=>(


<Link

key={item.name}

href={item.link}

className={`
relative
text-sm
font-semibold
transition
duration-300

${
pathname===item.link
?
"text-cyan-600"
:
"text-slate-700 hover:text-cyan-600"
}

`}

>


{item.name}



{


pathname===item.link &&

<span

className="
absolute
left-0
right-0
bottom-[-10px]
h-[2px]
bg-cyan-500
rounded-full
"

/>


}



</Link>


))


}



</div>









{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}


className="
md:hidden
text-xl
text-slate-700
"

>


{

open

?

<FaTimes />

:

<FaBars />

}


</button>




</div>










{/* MOBILE MENU */}



{


open &&


<div

className="
md:hidden
px-6
pb-6
"

>


<div

className="
flex
flex-col
gap-4
"

>


{


menu.map((item)=>(


<Link


key={item.name}


href={item.link}


onClick={()=>setOpen(false)}


className={`

text-sm
font-semibold
transition


${
pathname===item.link

?

"text-cyan-600"

:

"text-slate-700"

}

`}


>


{item.name}


</Link>


))


}



</div>


</div>


}



</nav>


);


}
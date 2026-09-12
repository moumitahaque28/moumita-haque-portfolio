"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar(){

const pathname = usePathname();


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

<nav className="
fixed
top-5
left-1/2
-translate-x-1/2
z-50
w-[90%]
max-w-6xl
rounded-2xl
bg-white/70
backdrop-blur-xl
shadow-lg
border
border-white/50
">


<div className="
flex
items-center
justify-between
px-6
py-4
">


{/* Logo */}

<Link
href="/"
className="
font-bold
text-xl
text-slate-900
"
>

MH

<span className="text-cyan-500">
.
</span>

</Link>





{/* Menu */}

<div className="
hidden
md:flex
gap-6
">


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
pathname===item.link && (

<span className="
absolute
left-0
-right-0
bottom-[-8px]
h-[2px]
bg-cyan-500
rounded-full
"/>

)

}


</Link>


))
}


</div>



{/* Mobile placeholder */}

<div className="
md:hidden
text-slate-700
font-bold
">

☰

</div>



</div>


</nav>


)

}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Background from "@/components/Background";


export default function Contact(){



const contacts = [


{
title:"Email",
value:"moumitahaque28@gmail.com",
icon:"✉️",
link:"mailto:moumitahaque28@gmail.com"
},



{
title:"LinkedIn",
value:"linkedin.com/in/moumita",
icon:"💼",
link:"#"
},



{
title:"GitHub",
value:"https://github.com/moumitahaque28",
icon:"💻",
link:"https://github.com/moumitahaque28"
},



{
title:"Location",
value:"Bangladesh",
icon:"📍",
link:"#"
}



];





return (


<main className="
min-h-screen
text-slate-900
">


<Background />

<Navbar />




<div className="
pt-32
px-6
max-w-6xl
mx-auto
">





<Link

href="/"

className="
text-cyan-600
font-semibold
hover:underline
"

>

← Back to Home

</Link>








{/* Header */}



<motion.div


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:0.7
}}



className="
mt-8
bg-white/80
backdrop-blur-xl
rounded-3xl
shadow-xl
border
border-white
p-10
"

>


<h1 className="
text-5xl
font-bold
text-slate-900
">

Contact

</h1>





<p className="
mt-6
text-lg
text-slate-600
leading-relaxed
">

I am open to research collaborations,
academic discussions, and opportunities
related to Artificial Intelligence,
Deep Learning, Computer Vision and
intelligent systems.

</p>




</motion.div>









{/* Contact Cards */}



<div className="
mt-12
grid
md:grid-cols-2
gap-8
">





{


contacts.map((item,index)=>(



<motion.a


key={item.title}


href={item.link}



initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}



transition={{
delay:index*0.1
}}



whileHover={{
y:-8
}}



className="
bg-white/80
backdrop-blur-xl
rounded-3xl
shadow-xl
border
border-white
p-8
"

>



<div className="
flex
items-center
gap-5
">



<div className="
text-4xl
">

{item.icon}

</div>




<div>


<h2 className="
text-2xl
font-bold
text-slate-900
">

{item.title}

</h2>




<p className="
mt-2
text-cyan-600
font-medium
">

{item.value}

</p>



</div>



</div>




</motion.a>



))


}



</div>









{/* Collaboration Section */}



<motion.div


initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}



className="
mt-14
mb-20
rounded-3xl
bg-gradient-to-r
from-cyan-50
to-blue-50
p-10
border
border-white
"

>


<h2 className="
text-3xl
font-bold
text-slate-900
">

Research Collaboration

</h2>




<p className="
mt-5
text-lg
text-slate-600
leading-relaxed
">

Interested in collaborating on Artificial Intelligence,
Deep Learning, Computer Vision, Biomedical AI,
or related research projects?

Feel free to connect for academic discussions,
research collaboration and knowledge exchange.

</p>




<a

href="mailto:your.email@gmail.com"

className="
inline-block
mt-7
px-8
py-3
rounded-full
bg-cyan-600
text-white
font-semibold
hover:bg-cyan-700
transition
"

>

Send Email

</a>



</motion.div>







</div>


</main>


);


}
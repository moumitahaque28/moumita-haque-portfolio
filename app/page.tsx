"use client";

import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Background from "@/components/Background";

import { motion } from "framer-motion";


export default function Home() {


const highlights = [

{
title:"Artificial Intelligence",
text:"Developing intelligent systems using machine learning and deep learning approaches for real-world applications."
},

{
title:"Computer Vision",
text:"Research in image analysis, visual intelligence and advanced computer vision-based solutions."
},

{
title:"Biomedical AI",
text:"Applying artificial intelligence techniques for medical imaging, healthcare analytics and decision support systems."
},

{
title:"Signal Processing",
text:"Exploring intelligent signal analysis and data-driven approaches for complex engineering problems."
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
pt-28
px-6
max-w-7xl
mx-auto
">



<div className="
grid
lg:grid-cols-3
gap-10
items-start
">



{/* LEFT PROFILE */}

<div className="
lg:sticky
lg:top-28
">

<ProfileCard />

</div>







{/* RIGHT CONTENT */}

<section className="
lg:col-span-2
">



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
duration:0.8
}}



className="
bg-white/75
backdrop-blur-xl
rounded-3xl
p-10
shadow-xl
border
border-white
"


>


<h1 className="
text-4xl
font-bold
text-slate-900
">

Research Philosophy

</h1>




<p className="
mt-6
text-lg
text-slate-600
leading-relaxed
">

My research journey lies at the intersection of{" "}

<strong>
Artificial Intelligence, Deep Learning, Computer Vision,
Biomedical Imaging, and Explainable AI.
</strong>

</p>





<p className="
mt-5
text-lg
text-slate-600
leading-relaxed
">

I focus on developing reliable, interpretable, and trustworthy
machine learning models that address real-world challenges
in healthcare and intelligent systems.

</p>





<p className="
mt-5
text-lg
text-slate-600
leading-relaxed
">

Through my research contributions, I aim to bridge the gap
between advanced AI algorithms and practical applications
with meaningful impact.

</p>






{/* Research Metrics */}


<div className="
mt-10
grid
grid-cols-2
md:grid-cols-4
gap-5
">



<div className="
rounded-2xl
bg-cyan-50
p-5
border
border-cyan-100
">

<h3 className="
text-3xl
font-bold
text-cyan-600
">
6+
</h3>

<p className="
mt-2
text-sm
text-slate-600
">
Research
Publications
</p>

</div>





<div className="
rounded-2xl
bg-blue-50
p-5
border
border-blue-100
">

<h3 className="
text-3xl
font-bold
text-blue-600
">
IEEE
</h3>

<p className="
mt-2
text-sm
text-slate-600
">
International
Conferences
</p>

</div>





<div className="
rounded-2xl
bg-purple-50
p-5
border
border-purple-100
">

<h3 className="
text-3xl
font-bold
text-purple-600
">
Springer
</h3>

<p className="
mt-2
text-sm
text-slate-600
">
Book Chapter
Publication
</p>

</div>






<div className="
rounded-2xl
bg-yellow-50
p-5
border
border-yellow-100
">

<h3 className="
text-3xl
font-bold
text-yellow-600
">
5+
</h3>

<p className="
mt-2
text-sm
text-slate-600
">
Research
Areas
</p>

</div>



</div>



</motion.div>







{/* Research Highlights */}



<div className="
mt-10
grid
md:grid-cols-2
gap-6
">



{

highlights.map((item,index)=>(



<motion.div


key={item.title}



initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}



transition={{
delay:index*0.15,
duration:0.5
}}



viewport={{
once:true
}}



className="
bg-white/75
backdrop-blur-xl
rounded-2xl
p-7
shadow-lg
border
border-white
hover:-translate-y-2
transition
duration-300
"

>


<h2 className="
text-xl
font-bold
text-cyan-600
">

{item.title}

</h2>




<p className="
mt-3
text-slate-600
leading-relaxed
">

{item.text}

</p>




</motion.div>



))


}



</div>





</section>


</div>


</div>


</main>


);


}
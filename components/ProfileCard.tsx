"use client";

import Image from "next/image";

import {
  FaGithub,
  FaLinkedin,
  FaFilePdf
} from "react-icons/fa";


export default function ProfileCard(){


return (


<div

className="
w-full
h-full
rounded-3xl
bg-white/70
backdrop-blur-xl
shadow-2xl
p-6
text-center
border
border-white/50
flex
flex-col
items-center
justify-start
"


>





{/* PROFILE IMAGE */}


<div

className="
flex
justify-center
"

>


<Image

src="/Profile.jpg"

width={160}

height={160}

alt="Moumita Haque Mohona"

priority

className="
rounded-full
border-4
border-cyan-400
shadow-lg
object-cover
"

 />


</div>









{/* NAME */}



<h1

className="
mt-5
text-xl
md:text-2xl
font-bold
text-slate-900
"

>

Moumita Haque Mohona

</h1>







{/* TITLE */}



<p

className="
mt-2
text-cyan-600
font-semibold
text-sm
md:text-base
"

>

AI Researcher | Deep Learning

</p>









{/* EDUCATION */}



<p

className="
mt-4
text-sm
leading-relaxed
text-slate-600
"

>

B.Sc. (Engineering)

<br/>

Information and Communication Engineering

<br/>

Pabna University of Science and Technology

</p>









{/* ACHIEVEMENTS */}



<div

className="
mt-6
space-y-3
text-sm
text-slate-700
"

>


<div>

🏆 <b>Class Rank:</b> 1st Position

</div>


<div>

🎓 <b>CGPA:</b> 3.90 / 4.00

</div>



<div>

📚 <b>Publications:</b> IEEE & Springer

</div>



</div>









{/* SOCIAL LINKS */}



<div

className="
flex
justify-center
gap-6
mt-7
text-2xl
text-slate-700
"

>


<a

href="https://github.com/"

target="_blank"

className="
hover:text-cyan-500
transition
"

>

<FaGithub />

</a>





<a

href="https://linkedin.com/"

target="_blank"

className="
hover:text-cyan-500
transition
"

>

<FaLinkedin />

</a>





<a

href="/CV.pdf"

target="_blank"

className="
hover:text-cyan-500
transition
"

>

<FaFilePdf />

</a>



</div>









{/* DOWNLOAD CV BUTTON */}



<a


href="/CV.pdf"

download


className="
mt-6
px-6
py-3
rounded-full
border
border-cyan-400
text-slate-800
font-semibold
hover:bg-cyan-400
hover:text-black
transition
duration-300
"


>


Download CV


</a>





</div>


);


}
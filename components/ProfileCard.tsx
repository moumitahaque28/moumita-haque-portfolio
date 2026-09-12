"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf
} from "react-icons/fa";


export default function ProfileCard(){

return (

<div className="
w-full
max-w-sm
rounded-3xl
bg-white/70
backdrop-blur-xl
shadow-2xl
p-8
text-center
border
border-white/50
">


{/* Profile Image */}

<div className="
flex
justify-center
">

<Image

src="/Profile.jpg"

width={170}

height={170}

alt="Moumita Haque Mohona"

className="
rounded-full
border-4
border-cyan-400
shadow-lg
object-cover
"

/>

</div>



<h1 className="
mt-6
text-2xl
font-bold
text-slate-900
">

Moumita Haque Mohona

</h1>



<p className="
mt-2
text-cyan-600
font-semibold
">

AI Researcher | Deep Learning

</p>




<p className="
mt-4
text-sm
leading-relaxed
text-slate-600
">

B.Sc. (Engineering)

Information and Communication Engineering

<br/>

Pabna University of Science and Technology

</p>




<div className="
mt-6
space-y-3
text-sm
text-slate-700
">


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





<div className="
flex
justify-center
gap-6
mt-7
text-2xl
text-slate-700
">


<FaGithub className="
hover:text-cyan-500
cursor-pointer
transition
"/>


<FaLinkedin className="
hover:text-cyan-500
cursor-pointer
transition
"/>


<FaFilePdf className="
hover:text-cyan-500
cursor-pointer
transition
"/>


</div>




<a

href="/CV.pdf"

download

className="
px-5
py-3
rounded-full
border
border-cyan-400
hover:bg-cyan-400
hover:text-black
transition
inline-block
"

>

Download CV

</a>



</div>

);

}
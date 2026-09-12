"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function About() {


const interests = [
"Artificial Intelligence",
"Deep Learning",
"Computer Vision",
"Biomedical Imaging",
"Explainable AI",
"Signal Processing"
];


return (

<main className="
min-h-screen
pt-32
px-6
bg-gradient-to-br
from-slate-50
via-white
to-cyan-50
">


<div className="
max-w-6xl
mx-auto
">


{/* Back Button */}

<Link
href="/"
className="
inline-flex
items-center
gap-2
mb-8
text-cyan-600
font-semibold
hover:text-cyan-800
transition
"
>

← Back to Home

</Link>





<motion.div

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{duration:0.7}}

className="
bg-white/80
backdrop-blur-xl
rounded-3xl
shadow-2xl
border
border-white
p-10
"

>


{/* Profile Section */}

<div className="
grid
md:grid-cols-3
gap-10
items-center
">


<div className="
flex
justify-center
">


<Image

src="/Profile.jpg"

width={240}

height={240}

alt="Moumita Haque Mohona"

className="
rounded-full
border-4
border-cyan-400
shadow-xl
"

 />


</div>





<div className="
md:col-span-2
">


<h1 className="
text-5xl
font-bold
text-slate-900
">

About Me

</h1>



<h2 className="
mt-4
text-xl
text-cyan-600
font-semibold
">

Researcher | B.Sc. Engineer in Information and Communication Engineering

</h2>




<p className="
mt-6
text-lg
leading-relaxed
text-slate-600
">

Moumita Haque Mohona is a B.Sc. (Engineering)
graduate in Information and Communication Engineering
from Pabna University of Science and Technology (PUST),
with strong research experience in Artificial Intelligence
and Deep Learning.

</p>



<p className="
mt-4
text-lg
leading-relaxed
text-slate-600
">

Her research interests include intelligent systems,
Computer Vision, Biomedical Imaging, Signal Processing,
and Explainable AI, with published research works in
IEEE and Springer platforms.

</p>


</div>


</div>







{/* Profile Cards */}


<div className="
mt-12
grid
md:grid-cols-3
gap-6
">



<div className="
rounded-2xl
bg-cyan-50
p-6
border
border-cyan-100
">


<h3 className="
font-bold
text-cyan-700
text-lg
">

🎓 Academic Profile

</h3>


<p className="
mt-3
text-slate-600
leading-relaxed
">

B.Sc. Engineering<br/>
Information and Communication Engineering<br/>
Pabna University of Science and Technology

</p>


</div>







<div className="
rounded-2xl
bg-purple-50
p-6
border
border-purple-100
">


<h3 className="
font-bold
text-purple-700
text-lg
">

🏆 Academic Excellence

</h3>


<p className="
mt-3
text-slate-600
leading-relaxed
">

CGPA: 3.90/4.00<br/>
Class Rank: 1st Position

</p>


</div>







<div className="
rounded-2xl
bg-yellow-50
p-6
border
border-yellow-100
">


<h3 className="
font-bold
text-yellow-700
text-lg
">

📚 Research Output

</h3>


<p className="
mt-3
text-slate-600
leading-relaxed
">

IEEE & Springer Published Research Works

</p>


</div>


</div>









{/* Academic Recognition */}


<div className="
mt-16
grid
md:grid-cols-2
gap-10
items-center
">



<motion.div

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.6}}

className="
overflow-hidden
rounded-3xl
shadow-xl
border
bg-white
"

>


<Image

src="/Award.png"

width={700}

height={500}

alt="Academic Award Ceremony"

className="
w-full
h-auto
object-cover
hover:scale-105
transition
duration-500
"

/>


</motion.div>







<div>


<h2 className="
text-3xl
font-bold
text-slate-900
">

Academic Recognition

</h2>




<p className="
mt-5
text-lg
text-slate-600
leading-relaxed
">

Received an academic recognition award from{" "}

<strong>
Pabna University of Science and Technology (PUST)
</strong>.

</p>




<p className="
mt-4
text-lg
text-slate-600
leading-relaxed
">

The award was presented by{" "}

<strong>
Prof. Dr. Abul Hasnat Md. Shamim
</strong>,{" "}

Honorable Vice-Chancellor of PUST,{" "}

along with{" "}

<strong>
Prof. Dr. Md. Anwar Hossain
</strong>,{" "}

Chairman, Department of Information and Communication Engineering.

</p>


</div>


</div>









{/* Research Interests */}


<div className="
mt-14
">


<h2 className="
text-3xl
font-bold
text-slate-900
mb-6
">

Research Interests

</h2>




<div className="
flex
flex-wrap
gap-4
">


{
interests.map((item)=>(


<span

key={item}

className="
px-5
py-3
rounded-full
border
border-cyan-200
bg-cyan-50
text-cyan-700
font-medium
hover:bg-cyan-100
transition
"

>

{item}

</span>


))
}


</div>


</div>





</motion.div>



</div>


</main>


);

}
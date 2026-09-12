"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Background from "@/components/Background";


export default function Skills(){



const skillCategories = [


{
title:
"Artificial Intelligence",

icon:
"🤖",

skills:[
"Machine Learning",
"Deep Learning",
"Neural Networks",
"Artificial Intelligence Applications",
"Model Optimization"
]

},



{
title:
"Computer Vision",

skills:[
"Image Classification",
"Object Detection",
"YOLO Framework",
"Image & Video Understanding",
"Visual Recognition"
]

},




{
title:
"Deep Learning Frameworks",

icon:
"🧠",

skills:[
"PyTorch",
"TensorFlow",
"Keras",
"Transfer Learning",
"Convolutional Neural Networks"
]

},




{
title:
"Programming Languages",

icon:
"💻",

skills:[
"Python",
"MATLAB",
"C/C++",
"SQL",
"Scientific Computing"
]

},




{
title:
"Data Science & Analysis",

icon:
"📊",

skills:[
"NumPy",
"Pandas",
"Data Processing",
"Data Visualization",
"Statistical Analysis"
]

},




{
title:
"Explainable & Multimodal AI",

icon:
"🔍",

skills:[
"Explainable AI (XAI)",
"Multimodal Learning",
"Attention Mechanism",
"Feature Fusion",
"Natural Language Processing"
]

},




{
title:
"Signal Processing",

icon:
"📡",

skills:[
"Digital Signal Processing",
"Biomedical Signal Analysis",
"Feature Extraction",
"Signal Classification"
]

},




{
title:
"Research Tools & Platforms",

icon:
"🛠️",

skills:[
"Git & GitHub",
"Google Colab",
"Jupyter Notebook",
"LaTeX",
"Linux Environment"
]

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
max-w-7xl
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

Technical Skills

</h1>





<p className="
mt-6
text-lg
text-slate-600
leading-relaxed
">

A comprehensive overview of my technical expertise
in Artificial Intelligence, Deep Learning, Computer Vision,
Signal Processing and research-oriented computational tools.

</p>




</motion.div>









{/* Skills Cards */}



<div className="
mt-12
grid
md:grid-cols-2
gap-8
">



{


skillCategories.map((category,index)=>(



<motion.div



key={category.title}



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
gap-4
">


<div className="
text-4xl
">

{category.icon}

</div>



<h2 className="
text-2xl
font-bold
text-slate-900
">

{category.title}

</h2>



</div>








<div className="
mt-6
flex
flex-wrap
gap-3
">


{


category.skills.map((skill)=>(



<span

key={skill}

className="
px-4
py-2
rounded-full
bg-cyan-50
border
border-cyan-100
text-cyan-700
font-medium
text-sm
"

>

{skill}

</span>



))


}



</div>






</motion.div>



))


}



</div>









{/* Research Profile */}



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
mt-16
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

Research & Development Focus

</h2>





<p className="
mt-5
text-lg
text-slate-600
leading-relaxed
">

My technical interests focus on developing intelligent,
reliable and interpretable AI systems by combining
deep learning, computer vision, signal processing and
data-driven computational approaches.

</p>



</motion.div>








</div>


</main>


);


}
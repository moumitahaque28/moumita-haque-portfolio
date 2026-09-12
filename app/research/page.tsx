"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Research(){


const areas = [

{
title:"Artificial Intelligence",
text:"Developing intelligent systems using machine learning and deep learning approaches for solving real-world problems."
},


{
title:"Deep Learning",
text:"Designing neural network based models for complex pattern recognition and intelligent decision-making."
},


{
title:"Computer Vision",
text:"Research on image understanding, object detection, visual recognition and multimodal intelligence."
},


{
title:"Biomedical AI",
text:"Applying artificial intelligence techniques for healthcare analytics and medical image-based applications."
},


{
title:"Explainable AI",
text:"Developing interpretable AI models to improve transparency, reliability and trust in machine learning systems."
},


{
title:"Signal Processing",
text:"Exploring intelligent computational methods for analysis and interpretation of complex signals."
}

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
text-cyan-600
font-semibold
hover:underline
"

>

← Back to Home

</Link>









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









{/* Research Introduction */}



<h1 className="
text-5xl
font-bold
text-slate-900
">

Research

</h1>





<p className="
mt-6
text-lg
leading-relaxed
text-slate-600
">

My research focuses on developing intelligent and
data-driven solutions using Artificial Intelligence,
Deep Learning, Computer Vision, Biomedical AI,
and advanced computational techniques.

</p>





<p className="
mt-5
text-lg
leading-relaxed
text-slate-600
">

I aim to design reliable machine learning systems
that can understand complex visual information,
extract meaningful patterns, and solve real-world
engineering challenges.

</p>









{/* Research Areas */}



<h2 className="
mt-14
text-3xl
font-bold
text-slate-900
">

Research Areas

</h2>





<div className="
mt-7
grid
md:grid-cols-2
gap-6
">



{

areas.map((area,index)=>(



<motion.div


key={area.title}


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.1
}}



viewport={{
once:true
}}



whileHover={{
scale:1.03
}}



className="
rounded-2xl
bg-cyan-50
p-6
border
border-cyan-100
"

>


<h3 className="
text-xl
font-bold
text-cyan-700
">

{area.title}

</h3>




<p className="
mt-3
text-slate-600
leading-relaxed
">

{area.text}

</p>



</motion.div>



))

}


</div>













{/* Thesis Section */}



<div className="
mt-16
rounded-3xl
bg-slate-900
p-10
text-white
">





<h2 className="
text-3xl
font-bold
">

Undergraduate Thesis

</h2>





<h3 className="
mt-6
text-xl
font-semibold
text-cyan-300
leading-relaxed
">

EmoVisionCap-BN: A YOLO-Comparative Multimodal Framework
for Object, Emotion, and Activity-Aware Bilingual Image and
Video Captioning

</h3>







<p className="
mt-5
text-slate-300
text-lg
leading-relaxed
">

This research presents a multimodal deep learning framework
that integrates object detection, facial emotion recognition,
activity understanding, and bilingual image-video caption
generation within a unified intelligent system.

</p>







<p className="
mt-4
text-slate-300
text-lg
leading-relaxed
">

The framework combines computer vision and natural language
processing techniques to improve visual understanding and
generate meaningful context-aware descriptions from images
and videos.

</p>









{/* Methodology */}



<h3 className="
mt-10
text-xl
font-bold
">

Research Methodology

</h3>





<div className="
mt-5
flex
flex-wrap
gap-3
">



{

[

"YOLO-based Object Detection",

"ResNet50 Feature Extraction",

"FER2013 Emotion Recognition",

"Multimodal Feature Fusion",

"Attention-based LSTM Decoder",

"English-Bangla Translation"

].map((item)=>(



<span

key={item}

className="
px-4
py-2
rounded-full
bg-white/10
border
border-white/20
text-cyan-300
text-sm
"

>

{item}

</span>



))


}



</div>









{/* Contributions */}



<h3 className="
mt-10
text-xl
font-bold
">

Key Research Contributions

</h3>





<div className="
mt-5
grid
md:grid-cols-2
gap-5
">





<div className="
rounded-xl
bg-white/10
p-5
border
border-white/20
">


<h4 className="
font-bold
text-cyan-300
">

YOLO Comparative Analysis

</h4>


<p className="
mt-2
text-slate-300
">

Comparative evaluation of multiple YOLO generations
for object-aware visual understanding.

</p>


</div>








<div className="
rounded-xl
bg-white/10
p-5
border
border-white/20
">


<h4 className="
font-bold
text-cyan-300
">

Multimodal Feature Fusion

</h4>


<p className="
mt-2
text-slate-300
">

Integration of visual, object-level and emotion-aware
features into a unified representation.

</p>


</div>








<div className="
rounded-xl
bg-white/10
p-5
border
border-white/20
">


<h4 className="
font-bold
text-cyan-300
">

Emotion & Activity Understanding

</h4>


<p className="
mt-2
text-slate-300
">

Combining facial expression recognition and temporal
analysis for enhanced scene understanding.

</p>


</div>








<div className="
rounded-xl
bg-white/10
p-5
border
border-white/20
">


<h4 className="
font-bold
text-cyan-300
">

Bilingual Caption Generation

</h4>


<p className="
mt-2
text-slate-300
">

Generating English captions with multilingual translation
for bilingual visual description.

</p>


</div>





</div>




</div>












{/* Research Vision */}



<div className="
mt-16
rounded-3xl
bg-gradient-to-r
from-cyan-50
to-blue-50
p-10
">


<h2 className="
text-3xl
font-bold
text-slate-900
">

Research Vision

</h2>





<p className="
mt-5
text-lg
text-slate-600
leading-relaxed
">

My long-term research goal is to develop intelligent,
explainable, and human-centered AI systems that can
contribute to healthcare, automation, and real-world
decision-making applications.

</p>



</div>








</motion.div>


</div>


</main>


);


}
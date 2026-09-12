"use client";

import Link from "next/link";
import { motion } from "framer-motion";


type Publication = {

title:string;
publisher:string;
type:string;
year:string;
doi?:string;
doiLink?:string;
article?:string;

};



export default function Publications(){


const publications:Publication[] = [


{
title:
"Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",

publisher:
"2025 28th International Conference on Computer and Information Technology (ICCIT), IEEE",

type:
"IEEE Publication",

year:
"2026",

doi:
"DOI:10.1109/ICCIT68739.2025.11491546",

doiLink:"https://ui.adsabs.harvard.edu/link_gateway/2025cit..conf91546M/doi:10.1109/ICCIT68739.2025.11491546"

},



{
title:
"Machine Learning-Based Hepatitis C Detection Using Ensemble Boosting",

publisher:
"Lecture Notes in Networks and Systems (LNNS), Springer Nature",

type:
"Springer Publication",

year:
"2026",

doi:
"DOI: 10.1007/978-3-032-15764-5_50",

doiLink:"https://doi.org/10.1007/978-3-032-15764-5_50"

},



{
title:
"Machine Learning-Based Prediction of Nightmares in Children: A Pediatric Psychological Integration",

publisher:
"2025 IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS)",

type:
"IEEE Publication",

year:
"2026",

doi:
"DOI: 10.1109/COMPAS67506.2025.11381639",

doiLink:"https://doi.org/10.1109/COMPAS67506.2025.11381639"

},



{
title:
"GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",

publisher:
"2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",

type:
"IEEE Publication",

year:
"2026",

doi:
"DOI: 10.1109/PECCII70991.2026.11661873",

doiLink:"https://doi.org/10.1109/PECCII70991.2026.11661873"

},



{
title:
"A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",

publisher:
"2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",

type:
"IEEE Publication",

year:
"2026",

doi:
"DOI: 10.1109/PECCII70991.2026.11662017",

doiLink:"https://doi.org/10.1109/PECCII70991.2026.11662017"

},

{
title:
"A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",

publisher:
"2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",

type:
"IEEE Publication",

year:
"2026",

doi:
"DOI: 10.1109/QPAIN69676.2026.11545784",

doiLink:"https://doi.org/10.1109/QPAIN69676.2026.11545784"

}


];





const submitted:Publication[]=[


{
title:
"Transfer Learning Optimization for Mango Fruit Disease Classification using a Bangladeshi Novel Dataset",

publisher:
"Annals of Emerging Technologies in Computing (AETiC)",

type:
"Journal Submission (Under Review)",

year:
"Pending",

article:
"Article ID: 1215",

doi:
"DOI: Pending",

doiLink:""

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

Publications

</h1>


<p className="
mt-6
text-lg
text-slate-600
leading-relaxed
">

My research contributions focus on Artificial Intelligence,
Deep Learning, Computer Vision, Biomedical Imaging,
Signal Processing and intelligent systems, with research
works published through IEEE and Springer platforms.

</p>



<div className="
mt-10
grid
md:grid-cols-3
gap-5
">


<div className="
bg-cyan-50
rounded-2xl
p-6
border
border-cyan-100
">

<h2 className="
text-3xl
font-bold
text-cyan-600
">
6+
</h2>

<p className="
text-slate-600
">
Research Publications
</p>

</div>



<div className="
bg-blue-50
rounded-2xl
p-6
border
border-blue-100
">

<h2 className="
text-3xl
font-bold
text-blue-600
">
IEEE
</h2>

<p className="
text-slate-600
">
International Conferences
</p>

</div>



<div className="
bg-purple-50
rounded-2xl
p-6
border
border-purple-100
">

<h2 className="
text-3xl
font-bold
text-purple-600
">
Springer
</h2>

<p className="
text-slate-600
">
LNNS Publication
</p>

</div>


</div>


</motion.div>




<h2 className="
mt-16
text-3xl
font-bold
text-slate-900
">

Published Research Works

</h2>



<div className="
mt-8
space-y-6
">


{
publications.map((paper,index)=>(


<motion.div

key={paper.title}

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.08
}}

className="
bg-white/80
backdrop-blur-xl
rounded-2xl
p-7
shadow-lg
border
border-white
hover:-translate-y-2
transition
"

>


<div className="
flex
justify-between
gap-5
items-start
">


<h3 className="
text-xl
font-bold
text-slate-900
leading-relaxed
">

{paper.title}

</h3>


<span className="
px-3
py-1
rounded-full
bg-cyan-50
text-cyan-700
text-sm
">

{paper.year}

</span>


</div>



<p className="
mt-4
text-cyan-600
font-semibold
">

{paper.type}

</p>


<p className="
mt-2
text-slate-600
leading-relaxed
">

{paper.publisher}

</p>


{
paper.doiLink ?

<a
href={paper.doiLink}
target="_blank"
rel="noopener noreferrer"
className="
mt-3
block
text-sm
text-cyan-600
font-medium
hover:underline
"
>
🔗 {paper.doi}
</a>

:

<p className="
mt-3
text-sm
text-slate-500
">
{paper.doi}
</p>

}


</motion.div>


))
}


</div>

{/* Submitted Manuscript */}


<h2 className="
mt-16
text-3xl
font-bold
text-slate-900
">

Submitted Manuscript

</h2>




<div className="
mt-8
">



{
submitted.map((paper)=>(



<motion.div


key={paper.title}


initial={{

opacity:0,

y:20

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}



className="

bg-white/80

backdrop-blur-xl

rounded-2xl

p-8

shadow-lg

border

border-yellow-200

"

>





<div className="

flex

justify-between

gap-5

items-start

">



<h3 className="

text-xl

font-bold

text-slate-900

leading-relaxed

">

{paper.title}

</h3>




<span className="

px-4

py-2

rounded-full

bg-yellow-100

text-yellow-700

text-sm

font-semibold

">

Under Review

</span>



</div>







<p className="

mt-5

text-yellow-600

font-semibold

">

{paper.type}

</p>






<p className="

mt-2

text-cyan-600

font-semibold

">

{paper.publisher}

</p>






<p className="

mt-3

text-slate-600

">

{paper.article}

</p>






{

paper.doiLink ?


<a

href={paper.doiLink}

target="_blank"

rel="noopener noreferrer"

className="

mt-3

block

text-sm

text-cyan-600

font-medium

hover:underline

"

>

🔗 {paper.doi}

</a>



:


<p className="

mt-3

text-sm

text-slate-500

">

{paper.doi}

</p>



}







<div className="

mt-6

flex

flex-wrap

gap-3

">



<span className="

px-4

py-2

rounded-full

bg-cyan-50

text-cyan-700

text-sm

">

Deep Learning

</span>




<span className="

px-4

py-2

rounded-full

bg-blue-50

text-blue-700

text-sm

">

Transfer Learning

</span>





<span className="

px-4

py-2

rounded-full

bg-green-50

text-green-700

text-sm

">

Agricultural AI

</span>





<span className="

px-4

py-2

rounded-full

bg-purple-50

text-purple-700

text-sm

">

Computer Vision

</span>



</div>







</motion.div>



))

}



</div>








</div>


</main>


);


}
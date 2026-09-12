"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Background from "@/components/Background";



export default function Certificates(){



const certificates = [


{
title:
"Academic Excellence Award-2025",

organization:
"Pabna University of Science and Technology (PUST)",

category:
"Academic Recognition",

description:
"Recognized for outstanding academic performance, dedication and commitment to academic excellence during the academic year 2024.",

image:
"/certificates/academic-award.jpg"

},



{
title:
"Reviewer Certificate - IEEE RAAICON 2025",

organization:
"IEEE International Conference on Robotics, Automation, Artificial Intelligence and Internet-of-Things",

category:
"Research Contribution",

description:
"Recognized for significant contribution as a reviewer at the 4th IEEE RAAICON 2025.",

image:
"/certificates/raaicon.jpg"

},




{
title:
"Paper Presentation Certificate - ICCIT 2025",

organization:
"28th International Conference on Computer and Information Technology (ICCIT 2025), IEEE",

category:
"Conference Presentation",

description:
"Presented research paper: Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices.",

image:
"/certificates/iccit.jpg"

},




{
title:
"Paper Presentation Certificate - Big Data, IoT and Machine Learning 2025",

organization:
"International Conference on Big Data, IoT and Machine Learning",

category:
"Conference Presentation",

description:
"Presented research work: Machine Learning-Based Hepatitis C Detection Using Ensemble Boosting.",

image:
"/certificates/hepatitis.jpg"

},




{
title:
"Paper Presentation Certificate - COMPAS 2025",

organization:
"IEEE 2nd International Conference on Computing, Applications and Systems",

category:
"Conference Presentation",

description:
"Presented research paper: Machine Learning-Based Prediction of Nightmares in Children: A Pediatric Psychological Integration.",

image:
"/certificates/Certificate-5.jpg"

},




{
title:
"Paper Presentation Certificate - PECCII 2026",

organization:
"International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure",

category:
"Research Presentation",

description:
"Presented research work: GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics.",

image:
"/certificates/Certificate-6.jpg"

},




{
title:
"Paper Presentation Certificate - QPAIN 2026",

organization:
"IEEE International Conference on Quantum Photonics, Artificial Intelligence and Networking",

category:
"Research Presentation",

description:
"Presented research work: A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images.",

image:
"/certificates/Certificate-7.jpeg"

},




{
title:
"Paper Presentation Certificate - PECCII 2026",

organization:
"International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure",

category:
"Research Presentation",

description:
"Successfully presented the research paper titled 'Comparative Evaluation of Deep Learning Architectures for Deepfake Detection under Image Degradation' at PECCII 2026. The work explores comparative analysis of deep learning architectures for robust deepfake detection under challenging image degradation conditions.",

image:
"/certificates/Certificate-8.jpg"

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

Certificates

</h1>




<p className="
mt-6
text-lg
text-slate-600
leading-relaxed
">

A collection of academic achievements, research contributions,
conference presentations and professional recognitions.

</p>





{/* Certificate Statistics */}



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

<h2 className="
text-3xl
font-bold
text-cyan-600
">

8+

</h2>

<p className="
mt-2
text-sm
text-slate-600
">

Certificates

</p>

</div>







<div className="
rounded-2xl
bg-blue-50
p-5
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
mt-2
text-sm
text-slate-600
">

Conference Recognition

</p>

</div>







<div className="
rounded-2xl
bg-purple-50
p-5
border
border-purple-100
">

<h2 className="
text-3xl
font-bold
text-purple-600
">

6+

</h2>

<p className="
mt-2
text-sm
text-slate-600
">

Research Presentations

</p>

</div>







<div className="
rounded-2xl
bg-yellow-50
p-5
border
border-yellow-100
">

<h2 className="
text-3xl
font-bold
text-yellow-600
">

PUST

</h2>

<p className="
mt-2
text-sm
text-slate-600
">

Academic Recognition

</p>

</div>




</div>



</motion.div>









{/* Certificate Cards */}



<div className="
mt-12
grid
md:grid-cols-2
gap-8
">



{

certificates.map((certificate,index)=>(



<motion.div


key={certificate.title}



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
overflow-hidden
"

>



{/* Certificate Image */}


<div className="
relative
aspect-[4/3]
bg-slate-100
flex
items-center
justify-center
p-4
">


<Image

src={certificate.image}

alt={certificate.title}

fill

className="
object-contain
hover:scale-105
transition
duration-500
"

/>


</div>









{/* Details */}



<div className="
p-7
">





<span className="
inline-block
px-4
py-1
rounded-full
bg-cyan-50
text-cyan-700
text-sm
font-semibold
">

{certificate.category}

</span>






<h2 className="
mt-4
text-xl
font-bold
text-slate-900
leading-relaxed
">

{certificate.title}

</h2>







<p className="
mt-3
text-cyan-600
font-semibold
leading-relaxed
">

{certificate.organization}

</p>







<p className="
mt-4
text-slate-600
leading-relaxed
">

{certificate.description}

</p>







<a

href={certificate.image}

target="_blank"

className="
inline-flex
mt-6
px-6
py-3
rounded-full
bg-cyan-600
text-white
font-semibold
hover:bg-cyan-700
transition
"

>

View Certificate

</a>





</div>





</motion.div>



))


}



</div>








</div>


</main>


);


}
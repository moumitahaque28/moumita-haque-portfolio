export default function Background(){

  return (

    <div className="
    fixed
    inset-0
    -z-10
    overflow-hidden
    bg-slate-50
    ">


      {/* Cyan Gradient Blob */}

      <div
      className="
      absolute
      top-20
      left-20
      w-96
      h-96
      rounded-full
      bg-cyan-300/40
      blur-3xl
      animate-pulse
      "
      />



      {/* Purple Gradient Blob */}

      <div
      className="
      absolute
      bottom-20
      right-20
      w-[500px]
      h-[500px]
      rounded-full
      bg-purple-300/40
      blur-3xl
      animate-pulse
      "
      />



      {/* Blue Gradient */}

      <div
      className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-72
      h-72
      rounded-full
      bg-blue-300/30
      blur-3xl
      "
      />


    </div>

  );

}
import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-[200px] flex justify-center">
      <div className="hidden lg:block">
        <Image
          src="/testimonial.gif"
          alt="Testimonials"
          width={1240}
          height={697}
        />
      </div>
      <div className="lg:hidden">
        <Image
          src="/testimonial_mobile.gif"
          alt="Testimonials"
          width={522}
          height={522}
        />
      </div>
    </div>
  );
};

export default Testimonials;

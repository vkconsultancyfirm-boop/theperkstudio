import React from "react";
import Image from "next/image";
import { BarChartBigIcon, Dot, Globe } from "lucide-react";
import Link from "next/link";

const Pepsico = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">Pepsico</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Web Development
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          PepsiCo, Inc. is an American multinational food, snack, and beverage
          corporation headquartered in Harrison, New York, in the hamlet of
          Purchase. PepsiCo's business encompasses all aspects of the food and
          beverage market. In this project we developed a complete experience of
          Career Handbook for Pepsico Employees.
        </div>

        <div>Techstack / Tools</div>
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              width={35}
              height={35}
              alt="HTML"
            />
          </div>
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              width={35}
              height={35}
              alt="CSS"
            />
          </div>
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              width={35}
              height={35}
              alt="JavaScript"
            />
          </div>
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              width={35}
              height={35}
              alt="Bootstrap"
            />
          </div>
          <BarChartBigIcon className="text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default Pepsico;

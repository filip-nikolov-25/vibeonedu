import Image from "next/image"
import { Step1 } from "@/components/Register/Step1"
import { Step2 } from "@/components/Register/Step2"
import { Step3 } from "@/components/Register/Step3"
import { Step4 } from "@/components/Register/Step4"
import { Step5 } from "@/components/Register/Step5"
import { Step6 } from "@/components/Register/Step6"


const Register = () => {
     return (
          <div className="h-screen flex items-center justify-center bg-customBlue">
               {/* <Step1 /> */}
               {/* <Step2 /> */}
               {/* <Step3 /> */}
               {/* <Step4 /> */}
               {/* <Step5 /> */}
               <Step6 />
          </div>

     )
}

export default Register
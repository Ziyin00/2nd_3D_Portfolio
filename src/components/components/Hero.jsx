import { motion } from "framer-motion"
import { styles } from "../../styles"
// import ComputersCanvas from "./canvas/Computers"
// import profile from '../../assets/assets/profile2.png'
// import { HomeEarthCanvas } from "./canvas"
// import  {EarthCanvas} from './canvas'
// import { slideIn } from "../../utils/motion"
import { gif } from "../../assets/assets"
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Hero = () => {


  return (
    <section className="relative w-full xs:h-screen h-[80vh]  mx-auto">
      <div
               className={`${styles.paddingX} absolute inset-0 sm:top-[120px] top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>


        <div className="flex lg:flex-row flex-col  justify-between">
          <div >

            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&#39;m <span className="text-[#915eff]"> Ziyin</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 `}>I am a passionate MERN stack developer <br className="xl:block hidden" />  with strong work ethics and bold technical skills. </p>
            <div className="flex flex-row py-2">
              <a href="https://www.instagram.com/ziyin_ab" className="hover:text-[#915eff]  transform transition duration-100">

                    <FaInstagram   className="my-3 mr-3 scale-150"/>
              </a>
              <a href="http://t.me/ziyin07" className="hover:text-[#915eff]  transform transition duration-100">

                    <FaTelegram  className="m-3 scale-150"/>
              </a>
              <a href="https://www.linkedin.com/in/ziyin00" className="hover:text-[#915eff]  transform transition duration-100">

                      <FaLinkedin  className="m-3 scale-150"/>
              </a>
              <a href="https://github.com/Ziyin00" className="hover:text-[#915eff]  transform transition duration-100">
                
                      <FaGithub className="m-3 scale-150" />
              </a>
              
            </div>

          </div>
          
          <img src={gif} alt="home_gif"  className="lg:w-[50%] lg:h-[70%] scale-x-125 scale-y-125   lg:mt-0  mt-10    mix-blend-saturation" />
        </div>


        {/* <div className="-mt-10 -mr-16">
          <img src={profile} alt="profile-pic" className=" hidden lg:flex w-[500px] h-[500px] -mt-10 opacity-30 rounded-full" />
        </div> */}
   
        {/* <HomeEarthCanvas /> */}
        {/* <EarthCanvas/> */}
              
      </div>
      
      <div className="absolute xs:-bottom-14 bottom-2 w-full flex justify-center items-center cursor-pointer">
        <a href="#about">
          <div className="p-2 w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start ">
            <motion.div
              animate={{
                y: [5, 35, 5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero
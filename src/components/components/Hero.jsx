import { motion } from "framer-motion"
import { styles } from "../../styles"
import ComputersCanvas from "./canvas/Computers"
import profile from '../../assets/assets/profile2.png'

const Hero = () => {


  return (
    <section className="relative w-full xs:h-screen h-[80vh]  mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 sm:top-[120px] top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>
        <div>
          <div>

            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&#39;m <span className="text-[#915eff]"> Ziyin</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 `}>I am a passionate MERN stack developer <br className="xl:block hidden" />  with strong work ethics and bold technical skills. </p>
          </div>
        </div>
        <div className="-mt-10 -mr-16">
          <img src={profile} alt="profile-pic" className=" hidden lg:flex w-[500px] h-[500px] -mt-10 opacity-30 rounded-full" />
        </div>


      </div>
      <ComputersCanvas />
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
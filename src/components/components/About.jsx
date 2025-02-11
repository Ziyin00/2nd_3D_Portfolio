import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../../styles"
import { services } from "../../constants"
import { fadeIn, textVariant } from '../../utils/motion'
import { SectionWrapper } from "../../hoc"

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col transform transition duration-200 "
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>


      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <div id="about">

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate MERN stack developer with strong work ethics, bold technical skills, and hands-on experience in building practical, high-performance web applications. I specialize in developing dynamic, responsive, and scalable solutions, leveraging modern technologies to create seamless user experiences.

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}  {...service} icon={service.icon} />


        ))}
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
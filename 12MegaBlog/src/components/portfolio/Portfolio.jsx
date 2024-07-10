import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring} from "framer-motion"

const items =[
    {
        id:1,
        title:"React Commerce",
        img: "../../public/Hero.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro est esse corporis nobis ex voluptates quibusdam suscipit doloremque! Harum totam corporis ipsam? Molestiae magni assumenda amet? Dolores, fuga. Cumque. ",
    },

    {
        id:2,
        title:"Next.js",
        img: "../../public/Hero.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro est esse corporis nobis ex voluptates quibusdam suscipit doloremque! Harum totam corporis ipsam? Molestiae magni assumenda amet? Dolores, fuga. Cumque. ",
    },

    {
        id:3,
        title:"vanilla Js App",
        img: "../../public/Hero.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro est esse corporis nobis ex voluptates quibusdam suscipit doloremque! Harum totam corporis ipsam? Molestiae magni assumenda amet? Dolores, fuga. Cumque. ",
    },

    {
        id:4,
        title:"Music App",
        img: "../../public/Hero.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro est esse corporis nobis ex voluptates quibusdam suscipit doloremque! Harum totam corporis ipsam? Molestiae magni assumenda amet? Dolores, fuga. Cumque. ",
    },
]

const Single = ({item}) =>{
    const ref = useRef()
    return(
        <section ref={ref}>
            <div className="container">
            <img src={item.img} />
            <div className='textcontainer'>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo </button>
            </div>
            </div> 
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:['end end', 'start start' ]})

    const scaleX = useSpring(
        scrollYProgress, 
        {
            stifness: 100,
            damping:30,
        })
        
    return(
        <div className="portfolio"ref={ref}> 
        <div className="progress">
            <h1>featured Works</h1>
            <motion.div style={{scaleX}} className="progressbar">

            </motion.div>
        </div>
        {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Portfolio
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { articles } from '../constants';


const ArticleCard = ({index, source, articleLink, title}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{title}</p>
    {/* </div> */}
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className="text-white font-medium text-[16px]">
            <a href={articleLink} target="_blank" rel="noopener noreferrer"> <span className='blue-text-gradient'> read on </span> {source} </a>
          </p>
          {/* <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p> */}
        </div>
      </div>
    </div>
  </motion.div>
)


const Articles = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <a href="https://medium.com/@melawlah" target="_blank" rel="noopener noreferrer" className={styles.sectionSubText}> Discover My Writing on <span className='blue-text-gradient'> Medium </span>  </a>
          <h2 className={styles.sectionHeadText}>Articles.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {articles.map((item, index) => (
          <ArticleCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Articles, "");
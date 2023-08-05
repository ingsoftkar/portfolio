import React from 'react'
import {motion} from 'framer-motion'

const SkillItem = ({percent,label}) => {
  return (
    <motion.div 
      className="item-skills" 
      initial={{ width: 0 }}
      animate={{ width: `${100*percent}%` }}
      >
        {label}
    </motion.div>
  )
}

export default SkillItem
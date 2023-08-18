import React from 'react'
import ItemSkill from './SkillItem'

const Skills = () => {
  return (
    <>
{/* <h2 className="font-bold text-8xl mt-32 w-full text-center">Skills</h2> */}
<div className="w-full relative flex items-center justify-center pt-8">


          <div className="box w-full">
            <div className="skills">
              <div className="skills-legend">
                <div className="legend-left legend text-center">Beginner<br/></div>
                <div className="legend-left legend text-center xs:hidden sm:inline-block">
                  <span>Intermediate<br/></span>
                </div>
                <div className="legend-left legend text-center xs:hidden sm:inline-block">
                  <span>Advanced<br /></span>
                </div>
                <div className="legend-left legend text-center xs:ml-36">Expert<br /></div>
              </div>

              <div className="item-stack mt-8" data-percent="1">Backend</div>
              <ItemSkill percent="0.9" label='API Development' />
              <ItemSkill percent="0.9" label='PHP' />
              <ItemSkill percent="0.9" label='Laravel' />
              <ItemSkill percent="0.8" label='Symfony' />
              <ItemSkill percent="0.9" label='NodeJs' />

              <div className="item-stack" data-percent="1">Databases</div>              
              <ItemSkill percent="0.90" label='MySQL' />
              <ItemSkill percent="0.80" label='PostgreSQL' />
              <ItemSkill percent="0.70" label='MongoDB' />

              <div className="item-stack" data-percent="1">UI/UX & Styles</div>
              <ItemSkill percent="0.90" label='Html Css' />
              <ItemSkill percent="0.90" label='Responsive design' />
              <ItemSkill percent="0.90" label='Bootstrap' />
              <ItemSkill percent="0.80" label='Tailwind' />
              <ItemSkill percent="0.70" label='Figma' />
              
              {/* <!-- front end skills --> */}
              <div className="item-stack" data-percent="1">Frontend</div>
              <ItemSkill percent="0.90" label='Javascript Jquery' />
              <ItemSkill percent="0.80" label='ReactJS' />
              <ItemSkill percent="0.70" label='VueJS' />

              {/* <!-- Mobile skills --> */}
              <div className="item-stack" data-percent="1">Mobile</div>
              <ItemSkill percent="0.80" label='React Native' />
              <ItemSkill percent="0.70" label='Android' />
              <ItemSkill percent="0.60" label='Flutter' />
             
             
              {/* <!-- team skills--> */}
              <div className="item-stack" data-percent="1">Team Work</div>
              <ItemSkill percent="0.90" label='Version Control' />
              <ItemSkill percent="0.90" label='Kanban' />
              <ItemSkill percent="0.80" label='Scrum' />
              <ItemSkill percent="0.70" label='Docker' />
              <ItemSkill percent="0.60" label='AWS' />

              <div className="skills-legend-bottom">
                <div className="legend-left legend-bottom text-center">Beginner<br/></div>
                <div className="legend-left legend-bottom text-center xs:hidden sm:inline-block">
                  <span>Intermediate<br/></span>
                </div>
                <div className="legend-left legend-bottom text-center xs:hidden sm:inline-block">
                  <span>Advanced<br /></span>
                </div>
                <div className="legend-left legend-bottom text-center xs:ml-36">Expert<br /></div>
              </div>

              {/* e="item-skills" data-percent="0.80">Git Github Gitlab</div> --> */}
            </div>
          </div>

</div>

    </>
  )
}

export default Skills
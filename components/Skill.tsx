import React from 'react'

type Props = {
    skill: any,
    directionLeft?: boolean
}

const Skill = (props: Props) => {
  return (
    <div>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">
                    {props.skill.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill
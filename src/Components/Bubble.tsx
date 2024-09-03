import { useState } from 'react'

const Bubble = () => {

  const [level, setLevel] = useState(0)
  const [levelColor, setLevelColor] = useState('bg-grey-start')

  const handleClick = () => {
    if(level < 4){
      setLevel(prev => {
        const newLevel = prev + 1
        setLevelColor(`bg-green-${newLevel}`)
        return newLevel
      }
      )
    }
  }

  return ( <>
  <div onClick={handleClick} className={`size-2.5 ${levelColor} rounded-sm m-0.5`} />
  </> );
}

export default Bubble ;
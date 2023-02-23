import React,{useState} from 'react'
import { OurstoryDropdown } from '../../Navitems'
import { Link } from 'react-router-dom'
import './StoryDropdown.css'

const StoryDropdown = () => {
    const [dropdown,setDropdown] = useState(false)
  return (
      <>
          <ul className={dropdown ? "Our_story-Submenu_Clicked" : "Our_story-Submenu"}
              onClick={() => {
              setDropdown(!dropdown)
          }}>
              {OurstoryDropdown.map(item => {
                  return (
                      <li key={item.id}>
                          <Link to={item.path} className={item.Cname}>
                             {item.title}
                          </Link>
                      </li>
                  )
              })}
          </ul>
      </>
  )
}

export default StoryDropdown
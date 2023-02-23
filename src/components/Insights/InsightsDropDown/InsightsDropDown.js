import React,{useState} from 'react'
import { InsightsDropdown } from '../../Navitems'
import { Link } from 'react-router-dom'
import './InsightsDropDown.css'

const InsightsDropDown = () => {
    const [dropdown,setDropdown] = useState(false)
  return (
      <>
          <ul className={dropdown ? "Insights-Submenu_Clicked" : "Insights-Submenu"}
              onClick={() => {
              setDropdown(!dropdown)
          }}>
              {InsightsDropdown.map(item => {
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

export default InsightsDropDown
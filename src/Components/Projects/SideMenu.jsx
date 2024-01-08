import {ButtonBase} from "@mui/material";
import { SkillList } from "../../Information";
import { useNavigate } from "react-router-dom";

function SideMenu(props) {

  // console.log(props.skill)

  const navigate=useNavigate()

  const buttonStyle = {
    fontSize:'1rem', 
    textAlign:{xs:'center', md:'left'},  
    lineHeight:'1.4', 
    paddingTop:2, 
    paddingBottom:2, 
    wordSpacing:1.2, 
    width:'80%', 
    margin:'10px 10%',
    borderRadius:'10px', 
    transition:'background-color 0.1s linear', 
    '&:hover' : {background:'#28262f'}
  }

  return <div style={{justifyContent:'center'}}>
    <br/>
  
    <ButtonBase sx={{...buttonStyle, background:props.skill===undefined ? '#554e76' : ''}}
    onClick={() => navigate(`/projects/`)}>
      All
    </ButtonBase>
    <hr style={{width:'85%', borderColor:'grey'}}/>
    {SkillList.map(skill => <div>
      <ButtonBase sx={{...buttonStyle, background:props.skill===skill ? '#554e76' : ''}}
      onClick={() => navigate(`/projects/${skill}`)}>
        {skill}
      </ButtonBase>
    </div>)}
  </div>
}

export default SideMenu;
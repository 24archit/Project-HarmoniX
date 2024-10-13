import "../assets/styles/SectionName.css";
import { Skeleton } from "@mui/material";
export function SectionName({
  iconClass="",
  iconId="",
  name="",
  button="true"
}) {
  return (
    <div className="section-name">
      <li>
        <i className={iconClass} id={iconId}></i>
         {name}
      </li>
      {button == true ? <button className="more-btn-home">See All</button> : <></>}
    </div>
  );
}
export function SectionNameLoad() {
  return (
    
     
      <Skeleton
                variant="Rectangular"
                width={700}
                height={30}
                sx={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    bgcolor: 'rgba(71, 164, 211, 0.261)',
                    borderRadius: '1rem'
                    

                }}
            />
      
    
  );
}

import '../assets/styles/SideBarBtn.css'
export default function SideBarBtn(props) {
    return (
        <button className="sidebar-btn">
        <i className={props.iconClass} id={props.iconId}></i>&nbsp;
        <span>{props.btnName}</span>
      </button>
    ); 
}

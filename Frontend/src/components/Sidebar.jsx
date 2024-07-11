import '../assets/styles/Sidebar.css';
import SideBarBtn from './SideBarBtn';


export default function Sidebar() {
    return (
        <nav className="sidebar">
            <SideBarBtn iconClass='fa-solid fa-house' iconId ='home-icon' btnName =' Home'/>
            <SideBarBtn iconClass='fa-solid fa-wand-magic-sparkles' iconId ='AI-icon' btnName =' Create Using AI'/>
            <SideBarBtn iconClass='' iconId ='' btnName ='Artists Feed'/>
            <SideBarBtn iconClass='' iconId ='' btnName ='For You'/>
            <SideBarBtn iconClass='' iconId ='' btnName ='Virtual Concerts'/>
            <SideBarBtn iconClass='' iconId ='' btnName ='About'/>
</nav>
    );
}

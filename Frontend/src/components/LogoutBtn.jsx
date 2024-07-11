import '../assets/styles/LogoutBtn.css';

export default function LogoutBtn() {
    return (
        <>
            <div className="nav-left-btns">
            <button id="logout-btn" className="log-in-out-btns"><i className="fa-solid fa-right-from-bracket"
                id="logout-icon"></i>&nbsp;Logout</button>         
            </div>
        </>
    );
}

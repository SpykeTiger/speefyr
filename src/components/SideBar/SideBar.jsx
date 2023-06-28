import styles from './SideBar.scss' 
export default function SideBar(){
    return(
        <div class="container_SideBar">
            <nav>
                <div class="navbar">
                    <div class="logo">
                    <img src="/pic/logo.jpg" alt=""></img>
                    <h1>jobs</h1>
                    </div>
                    <ul>
                    <li><a href="#">
                        <i class="fas fa-user"></i>
                        <span class="nav-item">Dashboard</span>
                    </a>
                    </li>
                    <li><a href="#">
                        <i class="fas fa-chart-bar"></i>
                        <span class="nav-item">Analytics</span>
                    </a>
                    </li>
                    <li><a href="#">
                        <i class="fas fa-tasks"></i>
                        <span class="nav-item">Jobs Board</span>
                    </a>
                    </li>
                    <li><a href="#">
                        <i class="fab fa-dochub"></i>
                        <span class="nav-item">Documnents</span>
                    </a>
                    </li>
                    <li><a href="#">
                        <i class="fas fa-cog"></i>
                        <span class="nav-item">Setting</span>
                    </a>
                    </li>
                    <li><a href="#">
                        <i class="fas fa-question-circle"></i>
                        <span class="nav-item">Help</span>
                    </a>
                    </li>
                    <li><a href="#" class="logout">
                        <i class="fas fa-sign-out-alt"></i>
                        <span class="nav-item">Logout</span>
                    </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
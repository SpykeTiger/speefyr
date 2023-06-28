import styles from './SideBar.scss' 
export default function SideBar(){
    return(
        <>
        <div class="container_SideBar">
            <nav>
                <div class="navbar">
                    <div class="logo">
                        <img src='../assets/Logo.Png' alt=""></img>
                        <h1>Speefyr</h1>
                    </div>
                    <ul>
                        <li><a href="#">
                            <i class="fas fa-user"></i>
                            <span class="nav-item">Conta</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i class="fas fa-chart-bar"></i>
                            <span class="nav-item">Estatística</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i class="fas fa-cog"></i>
                            <span class="nav-item">Configurações</span>
                        </a>
                        </li>
                        <li><a href="#">
                            <i class="fas fa-question-circle"></i>
                            <span class="nav-item">Ajuda</span>
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
        </>
    )
}
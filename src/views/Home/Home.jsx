import SideBar from '../../components/SideBar/SideBar.jsx';
import GridHome from '../../components/GridHome/GridHome.jsx';

import styles from './Home.scss';
export default function Home() {
    return(
        <>
            <div className='PagHome'>
                <div className='Home'>
                    <SideBar/>
                    <GridHome/>
                </div>
            </div>
        </>
    )
}
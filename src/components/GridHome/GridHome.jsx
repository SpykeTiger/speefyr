import styles from './GridHome.scss'
export default function GridHome(){
    const rappers = [
        "Eminem",
        "Tupac Shakur",
        "Jay-Z",
        "Kanye West",
        "Kendrick Lamar",
        "Lil Wayne",
        "Drake",
        "Notorious B.I.G.",
        "Snoop Dogg",
        "Nas",
      ];
    
      return (
        <div className="container_GridHome">
          {rappers.map((rapper, index) => (
            <div key={index} className="container_ItemGridHome">
              {rapper}
            </div>
          ))}
        </div>
      );
};

// Aufgabe 3 - Props: Übergib Daten von der Parent- (App) an die Child-Komponente (Profile) und verwende sie dort. Thema: Props
// so sind React Components wiederverwendbar, brauch nicht neue Component für anderes Profil
function Profile(props){
  
  return(
      <div>
        <p>{props.name}</p>
        <p>I study {props.study}.</p>
        <p>Current year: {props.year}</p>
        <p>Next year: {props.year + 1}</p>
      </div>
  )
}

export default Profile;
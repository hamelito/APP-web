import './StyleEstima.css';

export default function TableauEstimationCombles() {
  return (
    <table className="table">
      <thead>
        <th>Poste</th>
        <th>Prix</th>
      </thead>
      <tbody>
        <tr>
          <td data-label="Poste">Isolation de la toiture</td>
          <td data-label="Prix">20 à 75 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Isolation des murs </td>
          <td data-label="Prix">20 à 70 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Remplacement de tuiles</td>
          <td data-label="Prix">20 à 75 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Menuiseries</td>
          <td data-label="Prix">200 à 800 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation d’un chauffage bois</td>
          <td data-label="Prix">1.500 à 5.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation d’un chauffage gaz</td>
          <td data-label="Prix">2.000 à 6.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation d’un chauffage électrique</td>
          <td data-label="Prix">2.000 à 5.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation chauffage à pompe à chaleur</td>
          <td data-label="Prix">4.000 à 10.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation de la production d’eau chaude</td>
          <td data-label="Prix">500 à 2.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Isolation des combles</td>
          <td data-label="Prix">25 à 80 € le m²</td>
        </tr>
      </tbody>
    </table>
  );
}

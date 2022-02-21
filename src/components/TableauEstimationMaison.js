import './StyleEstima.css';

export default function TableauEstimationMaison() {
  return (
    <table className="table">
      <thead>
        <th>Poste</th>
        <th>Prix</th>
      </thead>
      <tbody>
        <tr>
          <td data-label="Poste">Assainissement</td>
          <td data-label="Prix">1.000 à 7.000 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation d’une charpente</td>
          <td data-label="Prix">10.000 à 20.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Remplacement de tuiles</td>
          <td data-label="Prix">30 à 120 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Façade</td>
          <td data-label="Prix">30 à 100 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Chape</td>
          <td data-label="Prix">15 à 25 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation des sols</td>
          <td data-label="Prix">15 à 100 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation des murs</td>
          <td data-label="Prix">10 à 100 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Rénovation des plafonds</td>
          <td data-label="Prix">15 à 200 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Cloisons</td>
          <td data-label="Prix">5 à 25 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Tableau électrique</td>
          <td data-label="Prix">500 à 1.200 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Remise aux normes électrique</td>
          <td data-label="Prix">40 à 100 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Plomberie</td>
          <td data-label="Prix">1.000 à 3.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Création d’une salle de bains</td>
          <td data-label="Prix">2.000 à 5.000 €</td>
        </tr>
        <tr>
          <td data-label="Poste">Aménagement de combles</td>
          <td data-label="Prix">500 à 2.000 € le m²</td>
        </tr>
        <tr>
          <td data-label="Poste">Extension</td>
          <td data-label="Prix">750 à 2.000 € le m²</td>
        </tr>
      </tbody>
    </table>
  );
}

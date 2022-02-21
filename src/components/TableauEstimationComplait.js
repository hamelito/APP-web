import './StyleEstima.css';

export default function TableauEstimationComplait() {
  return (
    <table className="table">
      <thead>
        <th>Type de rénovation</th>
        <th>Prix(TTC par m²)</th>
      </thead>
      <tbody>
        <tr>
          <td data-label="Type de rénovation">Lourde</td>
          <td data-label="Prix(TTC par m²)">1.000 à 1.200 €</td>
        </tr>
        <tr>
          <td data-label="Type de rénovation">Classique</td>
          <td data-label="Prix(TTC par m²)">500 à 900 €</td>
        </tr>
        <tr>
          <td data-label="Type de rénovation">Rafraîchissements</td>
          <td data-label="Prix(TTC par m²)">100 à 300 €</td>
        </tr>
      </tbody>
    </table>
  );
}

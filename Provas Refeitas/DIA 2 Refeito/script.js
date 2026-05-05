let alternado = false;

function add() {
    const container = document.getElementById("containerGrupos");

    if (!alternado) {
        container.innerHTML = `
            <div class="card-grupo">
                <h2>🅳 Grupo D</h2>
                <h5>Seleções</h5>
                <ul>
                    <li>Estados Unidos</li>
                    <li>Paraguai</li>
                    <li>Austrália</li>
                    <li>Turquia</li>
                </ul>
                <details>
                    <summary>Saiba Mais</summary>
                    <p>Os EUA jogam em casa, vantagem histórica em Copas.</p>
                    <p>Austrália enfrenta frequentemente seleções sul-americanas.</p>
                </details>
            </div>

            <div class="card-grupo">
                <h2>🅴 Grupo E</h2>
                <h5>Seleções</h5>
                <ul>
                    <li>Alemanha</li>
                    <li>Equador</li>
                    <li>Costa do Marfim</li>
                    <li>Curaçao</li>
                </ul>
                <details>
                    <summary>Saiba Mais</summary>
                    <p>Alemanha costuma dominar fases de grupos.</p>
                    <p>Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
                </details>
            </div>

            <div class="card-grupo">
                <h2>🅵 Grupo F</h2>
                <h5>Seleções</h5>
                <ul>
                    <li>Holanda</li>
                    <li>Japão</li>
                    <li>Tunísia</li>
                    <li>Suécia</li>
                </ul>
                <details>
                    <summary>Saiba Mais</summary>
                    <p>Grupo com seleções de estilos variados.</p>
                    <p>Confrontos equilibrados historicamente.</p>
                </details>
            </div>
        `;
        alternado = true;
    } else {
        location.reload();
    }
}
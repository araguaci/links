// Carregar JSON e montar favoritos
async function carregarFavoritos() {
  try {
    const response = await fetch('data/favoritos.json');
    const data = await response.json();

    // Atualizar título e descrição
    document.getElementById('titulo').textContent = data.titulo;
    document.getElementById('descricao').textContent = data.descricao;

    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    let totalLinks = 0;

    data.categorias.forEach(categoria => {
      const card = document.createElement('div');
      card.className = 'card';

      let linksHTML = '';
      categoria.links.forEach(link => {
        totalLinks++;
        linksHTML += `
          <a href="${link.url}" class="link-item" target="_blank" rel="noopener">
            <div class="link-header">
              <span class="link-icon"><i class="${link.icone}" style="color:${link.cor}"></i></span>
              <span class="link-name">${link.nome}</span>
            </div>
            <div class="link-desc">${link.descricao}</div>
            <div class="link-url">${link.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</div>
          </a>
        `;
      });

      card.innerHTML = `
        <div class="card-header">
          <i class="${categoria.icone}"></i> ${categoria.tema}
        </div>
        <div class="card-body">
          ${linksHTML}
        </div>
      `;

      container.appendChild(card);
    });

    // Atualizar contadores
    document.getElementById('total-links').textContent = totalLinks;
    document.getElementById('total-categories').textContent = data.categorias.length;

    // Busca
    document.getElementById('search-input').addEventListener('input', function() {
      const term = this.value.toLowerCase();
      document.querySelectorAll('.link-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'block' : 'none';
      });
    });

  } catch (error) {
    console.error('Erro ao carregar favoritos:', error);
    document.body.innerHTML = '<h1 style="color: red; text-align: center;">Erro ao carregar dados</h1>';
  }
}

// Carregar ao iniciar
document.addEventListener('DOMContentLoaded', carregarFavoritos);
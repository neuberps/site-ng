import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  criarServico(): void {
    // Crie um novo elemento div para o card
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.width = '20rem';

    // Crie o conteúdo do card
    cardDiv.innerHTML = `

        <div class="card-body" style="width: 20rem; height: 15rem; text-align: center; ">
          <h5 class="card-title">Título do Serviço</h5>
          <h6 class="card-subtitle mb-2 text-muted">Categoria do Serviço</h6>
          <p class="card-text">Um exemplo de texto rápido para preencher o conteúdo do card.Um exemplo de texto rápido para preencher o conteúdo do card.</p>
          <button class="card-link btn btn-outline-primary">Adicionar Serviço</button>
        </div>

    `;

    // Adicione o card à página (você pode anexá-lo a um contêiner específico)
    //document.body.appendChild(cardDiv);

    // Encontre o contêiner específico (por ID) e anexe o card a ele
    const meuContainer = document.getElementById('meuContainer');
    if (meuContainer) {
      meuContainer.appendChild(cardDiv);
    }
  }
}

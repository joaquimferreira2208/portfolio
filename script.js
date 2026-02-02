/* =========================
   MODAL DE PROJETOS COM CARROSSEL
========================= */

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalImg = document.getElementById("carousel-img");
const btnClose = document.querySelector(".modal-close");
const btnsModal = document.querySelectorAll(".btn-vermais");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let imagensAtuais = [];
let indexAtual = 0;

/* =========================
   DADOS DOS PROJETOS
========================= */
const detalhesProjetos = {
    projeto1: {
        titulo: "Loja Online",
        descricao: "Protótipo funcional de loja online focado em experiência de utilizador e interface moderna.",
        imagens: [
            "imagens/logo.png",
            "imagens/item.png",
            "imagens/carrinho.png"
        ]
    },
    projeto2: {
        titulo: "Biblioteca Online",
        descricao: "Aplicação Full-stack para gestão de leituras com sistema de alertas e base de dados.",
        imagens: [
            "imagens/homepage.png",
            "imagens/arquivopessoal.png",
            "imagens/register.png"
        ]
    },
    projeto_hospital: {
        titulo: "Portal de Prescrição Médica (React)",
        descricao: "Projeto colaborativo desenvolvido com React, focado na criação de uma interface dinâmica para gestão de exames médicos e prescrições.",
        imagens: [
            "imagens/saudeviva.png",
            "imagens/saudeviva2.png",
            "imagens/saudeviva3.png"
        ]
    }
};

/* =========================
   ATUALIZAR IMAGEM DO CARROSSEL
========================= */
function atualizarImagem() {
    modalImg.src = imagensAtuais[indexAtual];
}

/* =========================
   ABRIR MODAL
========================= */
btnsModal.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.projeto;
        const projeto = detalhesProjetos[id];
        if (!projeto) return;

        imagensAtuais = projeto.imagens;
        indexAtual = 0;

        modalTitulo.textContent = projeto.titulo;
        modalImg.src = imagensAtuais[0];

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

/* =========================
   CONTROLOS DO CARROSSEL
========================= */
btnNext.addEventListener("click", () => {
    indexAtual = (indexAtual + 1) % imagensAtuais.length;
    atualizarImagem();
});

btnPrev.addEventListener("click", () => {
    indexAtual = (indexAtual - 1 + imagensAtuais.length) % imagensAtuais.length;
    atualizarImagem();
});

/* =========================
   FECHAR MODAL
========================= */
function fecharModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

btnClose.addEventListener("click", fecharModal);

modal.addEventListener("click", e => {
    if (e.target === modal) fecharModal();
});

/* =========================
   HEADER COM SCROLL
========================= */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
    }
});

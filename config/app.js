/* ==========================================================
   app.js — Portabilidade na Prática 2.0
   Toda a lógica da landing page.
   O pagamento é gerado pelo backend (server.js na VPS).
   NÃO inclua credenciais aqui.
   ========================================================== */

'use strict';

// ----------------------------------------------------------
// ENDPOINT DO BACKEND (VPS)
// ----------------------------------------------------------
const API_URL = 'https://agilizza-chat-backend-agilizza-evento-backend.xoduag.easypanel.host/api/checkout';

// ----------------------------------------------------------
// DADOS
// ----------------------------------------------------------
const BENEFITS = [
  { icon: '📈', title: 'Domine a Portabilidade de Crédito',   desc: 'Estratégias avançadas para turbinar suas vendas com portabilidade e sair na frente da concorrência.' },
  { icon: '🔄', title: 'Compra de Dívida na Prática',         desc: 'Técnicas reais para capturar e converter operações de compra de dívida com mais eficiência e margem.' },
  { icon: '🏛️', title: 'Crescimento em SIAPE e INSS',         desc: 'Estratégias específicas para servidores públicos e aposentados — o segmento mais lucrativo do consignado.' },
  { icon: '💡', title: 'Conteúdo 100% Prático',               desc: 'Sem teoria vaga. Tudo que for apresentado é aplicável desde o primeiro dia de trabalho.' },
  { icon: '🤝', title: 'Networking de Alto Nível',             desc: 'Esteja na mesma sala que os maiores players do mercado de crédito consignado do sul do Brasil.' },
  { icon: '🚀', title: 'Vantagem Competitiva Real',            desc: 'Quem estiver nesse evento vai sair na frente. Simples assim. O mercado não espera e as vagas tampouco.' },
];

const SPEAKERS = [
  { 
    image: 'style/anacarla_foto.png', 
    name: 'Ana Carla Almeida', 
    company: 'Sócia do Grupo Real', 
    city: 'Florianópolis - SC', 
    desc: 'Especialista em gestão, liderança e vendas. Responsável por estruturar empresas que saem do caos para crescimento previsível. Já contribuiu para mais de R$ 1 BILHÃO em vendas.<br><br><strong>Assunto da palestra:</strong> Bater meta não é sorte. É método.' 
  },
  { 
    image: 'style/neverson.png', 
    name: 'Neverson Knies', 
    company: 'Fundador da Gaúcha Cred', 
    city: 'Florianópolis - SC', 
    desc: 'Especialista em vendas por telefone e performance sob pressão. Construiu um time com mais de 50 vendedores ativos e já treinou mais de 200 profissionais do zero à alta performance.<br><br>Vivência prática em metas agressivas: seu maior vendedor já atingiu R$ 1.000.000,00 em vendas de cartão consignado num único mês.' 
  },
  {
    image: 'style/fernando_foto.png',
    name: 'Fernando Koneski',
    company: '',
    city: 'Florianópolis - SC',
    desc: 'Especialista em vendas e estratégias no mercado financeiro, com foco em crédito consignado e desenvolvimento de equipes de alta performance.<br><br>Responsável por estruturar operações comerciais com foco em previsibilidade e escala. Já impulsionou resultados por meio de método, disciplina e gestão eficiente.'
  },
  { 
    initials: 'FO', 
    name: 'Felipe Oliveira', 
    company: 'SIAPE Experts',       
    city: 'Brasília - DF',      
    desc: 'Autoridade em crédito SIAPE e estratégias para servidores públicos. Criador de metodologias de conversão aplicadas por grandes redes.' 
  }
];

const AUDIENCE = [
  'Correspondentes Bancários (Corbans)',
  'Promotoras de Crédito',
  'Equipes Comerciais de Consignado',
  'Vendedores INSS e SIAPE',
  'Gestores de Produção',
  'Empresários do Setor Financeiro',
  'Consultores de Crédito',
  'Representantes de Bancos',
];

const FAQS = [
  { q: 'O evento é presencial?',                        a: 'Sim, o evento é 100% presencial no Majestic Palace Hotel, em Florianópolis - SC. Não haverá transmissão online.' },
  { q: 'O que está incluso no ingresso?',                a: 'Acesso ao evento completo, coffee break, material de apoio digital e certificado de participação.' },
  { q: 'Como funciona o ingresso de Parceiro Agilizza?', a: 'O valor diferenciado é exclusivo para parceiros Agilizza com produção ativa. Após a inscrição, nossa equipe fará a validação. Em caso de inelegibilidade, você será notificado.' },
  { q: 'Quantas vagas restam disponíveis?',              a: 'O evento tem capacidade máxima de 120 pessoas. As vagas são limitadas e não haverá venda na porta.' },
  { q: 'Posso transferir meu ingresso?',                 a: 'Sim, mediante solicitação até 7 dias antes do evento e análise da equipe Agilizza.' },
  { q: 'Qual a política de cancelamento?',               a: 'Cancelamentos com até 15 dias de antecedência têm reembolso integral. Dentro desse prazo, o valor é revertido em crédito para próximos eventos.' },
];

function renderBenefits() {
  const grid = document.getElementById('benefits-list'); // ID atualizado
  if (!grid) return;
  grid.innerHTML = BENEFITS.map((b, i) => `
    <div class="benefit-item reveal" style="transition-delay:${i * 0.08}s">
      <div class="benefit-icon-wrap">${b.icon}</div>
      <div class="benefit-content">
        <div class="benefit-title">${b.title}</div>
        <div class="benefit-desc">${b.desc}</div>
      </div>
    </div>
  `).join('');
}

function renderSpeakers() {
  const grid = document.getElementById('speakers-grid');
  if (!grid) return;
  grid.innerHTML = SPEAKERS.map((s, i) => {
    
    // Verifica se o palestrante tem foto ou iniciais
    const avatarHTML = s.image 
      ? `<img src="${s.image}" alt="${s.name}" class="speaker-avatar" style="object-fit: cover; background: none;">` 
      : `<div class="speaker-avatar">${s.initials}</div>`;

    // Verifica se tem cidade cadastrada (para evitar erro de layout)
    const locationHTML = s.city 
      ? `<div class="speaker-location">📍 ${s.city}</div>` 
      : '';

    return `
      <div class="speaker-card reveal" style="transition-delay:${i * 0.1}s">
        ${avatarHTML}
        <div class="speaker-name">${s.name}</div>
        <div class="speaker-title">${s.company}</div>
        ${locationHTML}
        <div class="speaker-bio">${s.desc}</div>
      </div>
    `;
  }).join('');
}

function renderAudience() {
  const grid = document.getElementById('audience-grid');
  if (!grid) return;
  grid.innerHTML = AUDIENCE.map((a, i) => `
    <div class="audience-item reveal" style="transition-delay:${i * 0.07}s">
      <div class="audience-icon">✓</div>
      <span class="audience-label">${a}</span>
    </div>
  `).join('');
}

// ----------------------------------------------------------
// RENDER — FAQ
// ----------------------------------------------------------
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item reveal" style="transition-delay:${i * 0.07}s">
      <button class="faq-q" onclick="toggleFAQ(${i})">
        ${f.q}
        <span class="faq-chevron" id="faq-icon-${i}">+</span>
      </button>
      <div class="faq-a" id="faq-answer-${i}">
        <div class="faq-a-inner">${f.a}</div>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const answer = document.getElementById('faq-answer-' + i);
  const item   = answer.closest('.faq-item'); // O CSS novo usa .open no .faq-item pai também
  const isOpen = answer.classList.contains('open');
  
  document.querySelectorAll('.faq-a').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  
  if (!isOpen) {
    answer.classList.add('open');
    item.classList.add('open');
  }
}
// ----------------------------------------------------------
// COUNTDOWN
// ----------------------------------------------------------
function startCountdown() {
  const target = new Date('2026-05-30T09:00:00').getTime();

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      ['days', 'hours', 'minutes', 'seconds'].forEach(function(u) {
        var el = document.getElementById('cd-' + u);
        if (el) el.textContent = '00';
      });
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    var elD = document.getElementById('cd-days');
    var elH = document.getElementById('cd-hours');
    var elM = document.getElementById('cd-minutes');
    var elS = document.getElementById('cd-seconds');

    if (elD) elD.textContent = String(d).padStart(2, '0');
    if (elH) elH.textContent = String(h).padStart(2, '0');
    if (elM) elM.textContent = String(m).padStart(2, '0');
    if (elS) elS.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function animateSpots() {
  var fill = document.getElementById('spots-fill');
  var countText = document.querySelector('.spots-count');
  if (!fill) return;

  fetch('https://agilizza-chat-backend-agilizza-evento-backend.xoduag.easypanel.host/api/vagas')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var vendas = data.garantidas; 
      var total = data.total || 120;
      var restantes = total - vendas;

      if (restantes < 0) restantes = 0; 
      var porcentagem = (vendas / total) * 100;

      // Atualiza o texto das vagas garantidas na nova estrutura
      if (countText) {
        countText.innerHTML = `<strong>${vendas} vagas</strong> já garantidas`;
      }

      // Anima a barra
      setTimeout(function() { fill.style.width = porcentagem + '%'; }, 400);
    })
    .catch(function(err) {
      console.error('Erro ao buscar vagas do servidor:', err);
      setTimeout(function() { fill.style.width = '65%'; }, 400);
    });
}
function initReveal() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });
}

// ----------------------------------------------------------
// HELPERS DE NAVEGAÇÃO
// ----------------------------------------------------------
function scrollToForm() {
  var el = document.getElementById('inscricao');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function selectTicket(type) {
  selectTicketRadio(type);
  scrollToForm();
}

// ----------------------------------------------------------
// SELEÇÃO DE INGRESSO NO FORMULÁRIO
// ----------------------------------------------------------
// ----------------------------------------------------------
// SELEÇÃO DE INGRESSO NO FORMULÁRIO
// ----------------------------------------------------------
function selectTicketRadio(type) {
  ['geral', 'parceiro'].forEach(function(t) {
    var radio = document.getElementById('opt-' + t);
    var dot   = document.getElementById('dot-' + t);
    if (radio) radio.classList.toggle('selected', t === type);
    if (dot)   dot.classList.toggle('on', t === type);
  });
  var input = document.getElementById('selected-ticket');
  if (input) input.value = type;

  var wrap = document.getElementById('partner-code-wrap');
  if (wrap) wrap.style.display = (type === 'parceiro') ? 'block' : 'none';

  var codeInput = document.getElementById('f-code');
  if (codeInput) codeInput.value = '';
}
// ----------------------------------------------------------
// TICKER ANIMADO
// ----------------------------------------------------------
function initTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  
  const tickerItems = [
    'Vagas limitadas', 'Sem transmissão online', '<strong>Florianópolis</strong>', '30 de Maio', 
    'Networking VIP', 'Portabilidade', 'Compra de Dívida', 'Agilizza Promotora'
  ];

  const html = tickerItems.map(item => `
    <div class="ticker-item"><div class="ticker-dot"></div>${item}</div>
  `).join('');

  // Duplica o conteúdo para fazer o loop perfeito no CSS
  track.innerHTML = html + html + html + html; 
}
// ----------------------------------------------------------
// INICIALIZAÇÃO GERAL + SUBMIT DO FORMULÁRIO
// (um único DOMContentLoaded agrupa tudo)
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {

  // ---- Renderiza seções dinâmicas ----
  renderBenefits();
  renderSpeakers();
  renderAudience();
  renderFAQ();
  startCountdown();
  initTicker();
  animateSpots();
  setTimeout(initReveal, 150);

  // Estado inicial: ingresso parceiro selecionado
  selectTicketRadio('parceiro');

  // ---- Formulário de compra ----
  var form = document.getElementById('purchase-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var btn     = document.getElementById('submit-btn');
    var errorEl = document.getElementById('form-error');
    errorEl.style.display = 'none';

    // Coleta dados
    var name        = document.getElementById('f-name').value.trim();
    var whatsapp    = document.getElementById('f-whatsapp').value.trim();
    var email       = document.getElementById('f-email').value.trim();
    var company     = document.getElementById('f-company').value.trim();
    var city        = document.getElementById('f-city').value.trim();
    var cpf         = document.getElementById('f-cpf').value.trim();
    var ticket      = document.getElementById('selected-ticket').value;
    var codeEl      = document.getElementById('f-code');
    var partnerCode = codeEl ? codeEl.value.trim() : '';
    var isPartner   = (ticket === 'parceiro');

    // Validação básica
    if (!name || !whatsapp || !email || !company || !city || !cpf) {
      errorEl.textContent   = 'Por favor, preencha todos os campos obrigatórios.';
      errorEl.style.display = 'block';
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      errorEl.textContent   = 'E-mail inválido.';
      errorEl.style.display = 'block';
      return;
    }
    
    // Validação do código de parceiro no frontend
    if (ticket === 'parceiro' && !partnerCode) {
      errorEl.textContent   = 'Por favor, insira seu Código Exclusivo de parceiro.';
      errorEl.style.display = 'block';
      return;
    }

    btn.disabled    = true;
    btn.textContent = '⏳ Processando...';

    // POST para a VPS (server.js) — credenciais ficam apenas no .env da VPS
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        whatsapp: whatsapp,
        email: email,
        company: company,
        city: city,
        cpf: cpf,
        ticket: ticket,
        isPartner: isPartner,
        partnerCode: partnerCode
      })
    })
    .then(function(res) {
      return res.json().then(function(data) {
        if (!res.ok) throw new Error(data.message || 'Erro ao processar inscrição.');
        return data;
      });
    })
    .then(function(data) {
      // Redireciona para link de pagamento Asaas
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
        return;
      }
      // Fallback: tela de sucesso
      document.getElementById('form-area').style.display   = 'none';
      document.getElementById('success-area').style.display = 'block';
    })
    .catch(function(err) {
      errorEl.textContent   = err.message || 'Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.';
      errorEl.style.display = 'block';
      btn.disabled    = false;
      btn.textContent = '🎟️ Confirmar Inscrição';
    });

  }); // fim form.addEventListener

}); // fim DOMContentLoaded
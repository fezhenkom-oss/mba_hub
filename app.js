// ─────────────────────────────────────────────────────────────
// State Management
// ─────────────────────────────────────────────────────────────
const state = {
    view: 'HOOK', // HOOK, QUIZ, GATE, REVEAL
    questions: [
        {
            id: 'bg',
            text: 'Qual o seu background profissional atual?',
            options: [
                { id: 'tech', label: 'Já trabalho com desenvolvimento ou engenharia de software' },
                { id: 'data', label: 'Trabalho com dados ou análise técnica' },
                { id: 'business', label: 'Sou de negócios/operações (Marketing, Finanças, RH, etc)' }
            ]
        },
        {
            id: 'goal',
            text: 'Qual é o seu principal objetivo com a IA?',
            options: [
                { id: 'automate', label: 'Automatizar processos e tomar decisões estratégicas' },
                { id: 'build', label: 'Construir sistemas do zero (LLMs, Agents, MLOps)' },
                { id: 'predict', label: 'Criar modelos preditivos e análises profundas' }
            ]
        },
        {
            id: 'exp',
            text: 'Você tem experiência com programação?',
            options: [
                { id: 'none', label: 'Nenhuma, nunca escrevi código' },
                { id: 'basic', label: 'Básica, consigo rodar scripts ou faço consultas SQL' },
                { id: 'adv', label: 'Avançada, programo regularmente no meu trabalho' }
            ]
        }
    ],
    currentQuestionIndex: 0,
    answers: {}
};

// ─────────────────────────────────────────────────────────────
// Product Data — Full content for each MBA reveal page
// Source: marketing briefs, sales playbook, syllabi (April 2026)
// ─────────────────────────────────────────────────────────────
const PRODUCT_DATA = {

    APPAI: {
        badge: 'MBA Inteligência Artificial Aplicada',
        theme: 'theme-appai',
        persona: 'O Profissional Potencializado.',
        subtitle: 'IA não é só para quem programa. É para quem quer produzir mais, decidir melhor e se tornar a referência em IA na sua organização — sem abandonar a carreira que você já tem. Em 10 meses, 8 horas por semana, 100% sem código.',
        stats: [
            { value: '10 meses', label: 'Duração' },
            { value: '400h', label: 'Carga Horária' },
            { value: '11 projetos', label: 'Portfólio Real' },
            { value: '100% sem código', label: 'Pré-requisito' }
        ],
        features: [
            { emoji: '⚡', title: '100% Sem Código', desc: 'Do Sprint 1 ao projeto final. Feito para profissionais de negócio, sem pré-requisito técnico de nenhum tipo.' },
            { emoji: '🤖', title: 'Construa AI Agents Reais', desc: 'Make, n8n, Zapier + OpenAI Assistants + Claude Projects. Agentes que tomam decisões e executam tarefas sozinhos.' },
            { emoji: '🏛', title: 'Diploma MEC + ASU + AWS', desc: 'Diploma MEC (Faculdade Sirius nota 5) + Arizona State University + AWS GenAI Foundations no currículo.' },
            { emoji: '🏆', title: 'Torne-se o AI Champion', desc: 'Sprint 11 exclusivo: estruture o papel de AI Champion, gerencie mudança organizacional e treine sua equipe em IA.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'AI & Automation Specialist', salary: 'R$ 4.800 – 7.500' },
            { level: 'Pleno', role: 'AI & Business Analyst', salary: 'R$ 8.000 – 14.000' },
            { level: 'Sênior', role: 'AI Champion / Innovation Manager', salary: 'R$ 15.000 – 28.000+' }
        ],
        marketStats: [
            { value: '56%', label: 'de prêmio salarial para profissionais com IA — PwC 2025' },
            { value: '81%', label: 'dos líderes esperam agentes de IA integrados em 12–18 meses — Microsoft 2025' },
            { value: '4×', label: 'crescimento nas vagas de IA no Brasil de 2021 a 2024 — PwC 2025' }
        ],
        modules: [
            {
                number: 'Sprints 1–4',
                title: 'Fundamentos de IA Aplicada',
                desc: 'ChatGPT, Claude, Gemini — domine engenharia de prompts, análise de dados com IA e mapeamento estratégico de oportunidades para a sua organização. Sem código do início ao fim.',
                build: '🗺️ Mapa de oportunidades de IA + roadmap para apresentar à diretoria'
            },
            {
                number: 'Sprints 5–8',
                title: 'Automação, Integrações & Agentes',
                desc: 'Automações com Make, n8n e Zapier. Conexões via API e Webhook (low-code). Construção de AI agents com memória persistente e ferramentas externas conectadas — tudo sem código.',
                build: '🤖 AI Agent avançado com memória persistente + ferramentas externas conectadas'
            },
            {
                number: 'Sprints 9–12 + ASU + AWS',
                title: 'Dados, Governança & Estratégia de IA',
                desc: 'SQL assistido por IA, política de governança (LGPD + Marco Legal IA), papel de AI Champion e projeto final apresentado para banca avaliadora. Módulos internacionais ASU e AWS GenAI Foundations.',
                build: '🎓 Política de uso de IA da empresa + plano de AI Champion + projeto final (defesa para banca)'
            }
        ],
        trustItems: ['Nebius · Nasdaq', 'Faculdade Sirius · MEC nota 5', 'Arizona State University', 'AWS GenAI Foundations'],
        hasGuarantee: false,
        guaranteeText: 'Profissionais com skills de IA ganham 56% a mais — PwC AI Jobs Barometer 2025. Você vai usar o que aprender na semana que vem.'
    },

    DA: {
        badge: 'MBA Data Analytics & AI',
        theme: 'theme-da',
        persona: 'O Executor de Negócios.',
        subtitle: 'Toda empresa precisa de profissionais que transformem dados em decisões e IA em eficiência operacional. 18 projetos com marcas reais, analytics aplicada, automação com RPA e garantia de emprego — em 9 meses.',
        stats: [
            { value: '9 meses', label: 'Duração' },
            { value: '680h', label: 'Carga Horária' },
            { value: '18 projetos', label: 'Portfólio Real' },
            { value: 'Python incluído', label: 'Stack técnico' }
        ],
        features: [
            { emoji: '📊', title: 'Analytics + IA + RPA', desc: 'O único MBA que cobre analytics aplicada, AI agents e automação com Zapier e RPA com UiPath — ponta a ponta.' },
            { emoji: '💼', title: '18 Projetos com Marcas Reais', desc: 'Walmart, MercadoLivre, Andes Capital, RappiPlus no portfólio. Prova de execução que convence RHs e líderes técnicos.' },
            { emoji: '🏛', title: 'Diploma MEC + AWS + ASU', desc: 'MEC (Faculdade Sirius nota 5) + AWS Academy + Arizona State University. A credencial completa que o mercado reconhece.' },
            { emoji: '🎯', title: 'Garantia de Emprego 100%', desc: 'Se não conseguir emprego em 6 meses após se formar, devolvemos 100% do investimento. Nenhum MBA no Brasil oferece isso.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Applied Analytics / BI Junior', salary: 'R$ 7.300' },
            { level: 'Pleno', role: 'Applied Analytics / BI Pleno', salary: 'R$ 10.250' },
            { level: 'Sênior', role: 'BI Specialist / AI Specialist', salary: 'R$ 18.100' }
        ],
        marketStats: [
            { value: '56%', label: 'de prêmio salarial para profissionais com IA — PwC 2025' },
            { value: '680h', label: 'vs FGV 432h e USP 385h — mais horas, 18 projetos e garantia de emprego' },
            { value: '~4 meses', label: 'de salário júnior para recuperar o investimento no MBA' }
        ],
        modules: [
            {
                number: 'Sprints 1–6',
                title: 'Analytics Foundations',
                desc: 'Começa com IA e prompt engineering — sem código. Avança para SQL, limpeza de dados, KPIs, análise de funil de conversão e cohort de retenção com dados reais do MercadoLivre e Walmart.',
                build: '🛒 Funil e retenção MercadoLivre · Relatório executivo de vendas Walmart'
            },
            {
                number: 'Sprints 7–13',
                title: 'Profundidade Analítica',
                desc: 'Python com Pandas, estatística aplicada, testes de hipótese. Power BI e Tableau — dashboards executivos e analíticos para diferentes audiências. Projeto estratégico integrador completo.',
                build: '📊 Dashboard comercial Power BI · Diagnóstico estratégico RappiPlus'
            },
            {
                number: 'Sprints 14–18 + ASU + AWS',
                title: 'Automação com IA & Projeto Final',
                desc: 'AI agents autônomos, Webhooks, APIs com Zapier e RPA com UiPath — as skills que nenhum outro MBA de analytics ensina. Encerra com módulos internacionais ASU e AWS Academy.',
                build: '🦾 Bot RPA com UiPath · Solução de IA ponta a ponta (projeto final)'
            }
        ],
        trustItems: ['Nebius · Nasdaq', 'Faculdade Sirius · MEC nota 5', 'Arizona State University', 'AWS Academy'],
        hasGuarantee: true,
        guaranteeText: 'Se não conseguir emprego em 6 meses após se formar, devolvemos 100% do investimento. Nenhum MBA no Brasil oferece isso.'
    },

    DSAI: {
        badge: 'MBA Data Science & Inteligência Artificial',
        theme: 'theme-dsai',
        persona: 'O Arquiteto Técnico.',
        subtitle: 'Para quem quer CONSTRUIR os sistemas de IA — não apenas usá-los. Do Python ao Machine Learning. Do NLP às LLMs. 19 projetos reais no GitHub, certificação AWS em Machine Learning e garantia de emprego — em 10 meses.',
        stats: [
            { value: '10 meses', label: 'Duração' },
            { value: '~720h', label: 'Carga Horária' },
            { value: '19 projetos', label: 'Portfólio de ML' },
            { value: 'Python Sprint 1', label: 'Stack técnico' }
        ],
        features: [
            { emoji: '🧪', title: 'ML Completo — Do Básico ao LLM', desc: 'Supervised, unsupervised, feature engineering, NLP, Computer Vision e LLMs com LangChain + OpenAI API. A jornada técnica completa.' },
            { emoji: '☁️', title: 'AWS Machine Learning Cert.', desc: 'A mesma credencial das empresas que vão te contratar — inclusa no MBA, sem custo adicional.' },
            { emoji: '🏛', title: 'Diploma MEC + ASU + Garantia', desc: 'MEC (Faculdade Sirius nota 5) + Arizona State University + garantia de devolução de 100% se não conseguir emprego.' },
            { emoji: '📁', title: '19 Projetos de ML no GitHub', desc: 'Do primeiro modelo ao projeto final end-to-end. Portfólio técnico que recrutadores e líderes de engenharia pedem para ver.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Data Scientist Júnior', salary: 'R$ 8.500 – 11.000' },
            { level: 'Pleno', role: 'Data Scientist / ML Engineer', salary: 'R$ 13.000 – 17.000' },
            { level: 'Sênior', role: 'Staff Data Scientist / ML Lead', salary: 'R$ 20.000 – 30.000' }
        ],
        marketStats: [
            { value: '56%', label: 'de prêmio salarial para profissionais com IA — PwC 2025' },
            { value: '4×', label: 'crescimento nas vagas de IA no Brasil de 2021 a 2024 (19k → 73k) — PwC 2025' },
            { value: '~4 meses', label: 'de salário júnior de DS para recuperar o investimento no MBA' }
        ],
        modules: [
            {
                number: 'Sprints 1–7',
                title: 'Fundamentos Técnicos',
                desc: 'Python do zero ao profissional, manipulação de dados com Pandas, SQL + Python integrados, Git e GitHub desde o início, estatística aplicada e álgebra linear — a base que todo cientista de dados precisa.',
                build: '🐍 Pipeline de dados + análise estatística + projeto integrador completo (Sprint 7)'
            },
            {
                number: 'Sprints 8–13',
                title: 'Machine Learning Core',
                desc: 'Primeiro modelo com Scikit-learn, supervised e unsupervised learning, feature engineering, gradient boosting, SHAP e LIME para explicabilidade. Métricas de negócio e testes A/B reais.',
                build: '🤖 Modelos de classificação, regressão, clustering e otimização — portfólio no GitHub'
            },
            {
                number: 'Sprints 14–19 + ASU + AWS',
                title: 'Especializações + GenAI + Projeto Final',
                desc: 'Séries temporais, NLP (sentimento, classificação de texto), Computer Vision (redes convolucionais), LLMs com LangChain e OpenAI API + AWS Bedrock. Módulos ASU e AWS ML Foundations.',
                build: '🧠 Modelos NLP e CV · Aplicação LLM com LangChain · Projeto final DS ponta a ponta'
            }
        ],
        trustItems: ['Nebius · Nasdaq', 'Faculdade Sirius · MEC nota 5', 'Arizona State University', 'AWS ML Foundations'],
        hasGuarantee: true,
        guaranteeText: 'Se não conseguir emprego em 6 meses após se formar, devolvemos 100% do investimento. Nenhum MBA de Data Science no Brasil oferece isso.'
    }
};

// ─────────────────────────────────────────────────────────────
// DOM
// ─────────────────────────────────────────────────────────────
const appContainer = document.getElementById('app-container');

// ─────────────────────────────────────────────────────────────
// Core Engine
// ─────────────────────────────────────────────────────────────
function initializeApp() {
    renderView();
}

function calculateMatch() {
    const { bg, goal, exp } = state.answers;

    // Applied AI: non-technical professionals — the no-code track
    // Sales playbook: "NÃO quer programar + mesmo cargo = MBA Applied AI"
    if (bg === 'business' || exp === 'none') {
        return 'APPAI';
    }

    // DS & AI: technical builders who want to build models and ML systems
    // Sales playbook: "QUER PROGRAMAR + ML/modelos = MBA DS&AI"
    if (goal === 'build' || (bg === 'tech' && exp === 'adv') || (goal === 'predict' && bg === 'tech')) {
        return 'DSAI';
    }

    // DA & AI: analytical profiles, career switchers, BI/dashboard focus
    // Sales playbook: "QUER MUDAR + analytics/dashboards/automação = MBA DA&AI"
    return 'DA';
}

// ─────────────────────────────────────────────────────────────
// Reveal Page Renderer — shared across all 3 products
// ─────────────────────────────────────────────────────────────
function renderRevealPage(match) {
    const p = PRODUCT_DATA[match];

    // Stat pills
    const statPillsHtml = p.stats.map(s => `
        <div class="stat-pill">
            <span class="stat-pill-value">${s.value}</span>
            <span class="stat-pill-label">${s.label}</span>
        </div>
    `).join('');

    // Feature grid
    const featuresHtml = p.features.map(f => `
        <div class="feature-card">
            <span class="feature-emoji">${f.emoji}</span>
            <div class="feature-text">
                <strong>${f.title}</strong>
                <p>${f.desc}</p>
            </div>
        </div>
    `).join('');

    // Salary rows
    const salaryHtml = p.salaryRows.map((r, i) => `
        <div class="salary-row ${i === 2 ? 'salary-row--top' : ''}">
            <div class="salary-level">${r.level}</div>
            <div class="salary-role">${r.role}</div>
            <div class="salary-value">${r.salary}</div>
        </div>
    `).join('');

    // Market stat badges
    const marketStatsHtml = p.marketStats.map(s => `
        <div class="market-stat">
            <span class="market-stat-value">${s.value}</span>
            <span class="market-stat-label">${s.label}</span>
        </div>
    `).join('');

    // Module cards
    const modulesHtml = p.modules.map(m => `
        <div class="module-card">
            <div class="module-number">${m.number}</div>
            <h4 class="module-title">${m.title}</h4>
            <p class="module-desc">${m.desc}</p>
            <div class="module-build">${m.build}</div>
        </div>
    `).join('');

    // Trust strip
    const trustHtml = p.trustItems.map(t => `<span class="trust-badge">${t}</span>`).join('');

    // Guarantee / social proof bottom
    const guaranteeHtml = p.hasGuarantee
        ? `<div class="guarantee-line"><span class="guarantee-icon">🎯</span><div><strong>Garantia de Emprego:</strong> ${p.guaranteeText}</div></div>`
        : `<div class="guarantee-line"><span class="guarantee-icon">📈</span><div>${p.guaranteeText}</div></div>`;

    return `
        <div class="reveal-page ${p.theme}">

            <!-- ① HERO -->
            <div class="reveal-hero">
                <span class="badge">${p.badge}</span>
                <h1 class="reveal-h1">Seu match ideal: <br><span class="highlight">${p.persona}</span></h1>
                <p class="reveal-subtitle">${p.subtitle}</p>
                <div class="stat-pills">${statPillsHtml}</div>
            </div>

            <!-- ② WHY THIS MBA -->
            <div class="reveal-section">
                <h2 class="section-title">Por que este MBA?</h2>
                <div class="features-grid">${featuresHtml}</div>
            </div>

            <!-- ③ CAREER PROSPECTS -->
            <div class="reveal-section">
                <h2 class="section-title">Perspectivas de Carreira</h2>
                <p class="section-subtitle">Fonte: Robert Half Guia de Salários 2026 · Brasil</p>
                <div class="salary-table">${salaryHtml}</div>
                <div class="market-stats">${marketStatsHtml}</div>
            </div>

            <!-- ④ CURRICULUM -->
            <div class="reveal-section">
                <h2 class="section-title">O que você vai aprender</h2>
                <div class="modules-grid">${modulesHtml}</div>
            </div>

            <!-- ⑤ TRUST STRIP -->
            <div class="reveal-section trust-section">
                <div class="trust-badges">${trustHtml}</div>
                ${guaranteeHtml}
            </div>

            <!-- ⑥ CONTACT FORM -->
            <div class="reveal-section contact-section">
                <h2 class="section-title">Fale com uma consultora de admissão</h2>
                <p class="section-subtitle">Tire suas dúvidas, receba o syllabus completo e entenda se este é o momento certo para você — sem compromisso.</p>
                <form id="contact-form" onsubmit="handleContactSubmit(event, '${match}')">
                    <div class="contact-grid">
                        <div class="form-group">
                            <label>Seu Nome</label>
                            <input type="text" id="cname" required placeholder="Nome completo">
                        </div>
                        <div class="form-group">
                            <label>WhatsApp</label>
                            <input type="tel" id="cphone" required placeholder="(11) 99999-9999">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>E-mail principal</label>
                        <input type="email" id="cemail" required placeholder="seu@email.com">
                    </div>
                    <div class="form-group">
                        <label>Conta um pouco sobre você <span class="optional-label">(opcional)</span></label>
                        <textarea id="cmessage" placeholder="Área de atuação, objetivo com o MBA, dúvidas..." rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn-cta">
                        Quero minha consultoria gratuita →
                    </button>
                    <p class="form-fine-print">Sem spam. Nossa consultora vai estudar seu perfil antes da conversa.</p>
                </form>
            </div>

        </div>
    `;
}

// ─────────────────────────────────────────────────────────────
// Views
// ─────────────────────────────────────────────────────────────
function renderView() {
    appContainer.innerHTML = '';
    appContainer.classList.remove('reveal-mode');

    const wrapper = document.createElement('div');
    wrapper.className = 'view-state';

    switch (state.view) {

        case 'HOOK':
            wrapper.innerHTML = `
                <span class="badge" style="border: 1px solid var(--glass-border); margin-bottom: 2rem;">TripleTen MBA Hub</span>
                <h1>Três MBAs em IA e Dados. Um para cada objetivo de carreira.</h1>
                <p class="subtitle">Descubra qual deles foi feito para onde você quer chegar. Formações práticas com <strong>Diploma MEC</strong> e <strong>Garantia de Emprego</strong>.</p>
                <div class="cards-grid">
                    <div class="intent-card" onclick="handleIntentClick('business')">
                        <span class="emoji">📊</span>
                        <h3>Quero usar IA para negócios</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Automatizar processos, painéis executivos e alavancar resultados (Não precisa programar).</p>
                    </div>
                    <div class="intent-card" onclick="handleIntentClick('engineer')">
                        <span class="emoji">🤖</span>
                        <h3>Quero construir e programar IA</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Treinar modelos, criar sistemas de ML e colocar soluções de IA em produção com código.</p>
                    </div>
                    <div class="intent-card" onclick="handleIntentClick('science')">
                        <span class="emoji">🔬</span>
                        <h3>Quero ser Cientista de Dados</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Usar estatística e machine learning para prever o futuro em grandes bases de dados.</p>
                    </div>
                </div>
            `;
            break;

        case 'QUIZ':
            const q = state.questions[state.currentQuestionIndex];
            const progressPct = (state.currentQuestionIndex / state.questions.length) * 100;

            let optionsHtml = '';
            q.options.forEach(opt => {
                optionsHtml += `<button class="answer-btn" onclick="handleAnswer('${q.id}', '${opt.id}')">${opt.label}</button>`;
            });

            wrapper.innerHTML = `
                <div class="quiz-container">
                    <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">Mapeando sua trilha (${state.currentQuestionIndex + 1}/${state.questions.length})...</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPct}%"></div>
                    </div>
                    <h2 class="question-text">${q.text}</h2>
                    <div class="answers-grid">
                        ${optionsHtml}
                    </div>
                </div>
            `;
            break;

        case 'GATE':
            wrapper.innerHTML = `
                <div class="quiz-container" style="text-align: center;">
                    <span class="emoji" style="font-size: 3rem; display: block; margin-bottom: 1rem;">✅</span>
                    <h2 class="question-text">Análise concluída.</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Encontramos o MBA perfeito para o seu objetivo. Insira seus dados para receber o <strong>Syllabus Completo</strong> e liberar o resultado na tela.</p>
                    <form id="lead-form" onsubmit="handleGateSubmit(event)">
                        <div class="form-group">
                            <label>Seu Nome</label>
                            <input type="text" id="fname" required placeholder="Nome completo">
                        </div>
                        <div class="form-group">
                            <label>Seu WhatsApp</label>
                            <input type="tel" id="fphone" required placeholder="(11) 99999-9999">
                        </div>
                        <div class="form-group">
                            <label>Seu E-mail principal</label>
                            <input type="email" id="femail" required placeholder="seu@email.com">
                        </div>
                        <button type="submit" class="btn-submit">Revelar Meu MBA</button>
                    </form>
                    <p style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 1rem;">Sem spam. Apenas conteúdo de carreira que transforma.</p>
                </div>
            `;
            break;

        case 'REVEAL':
            const match = calculateMatch();
            const themeMap = { 'DA': 'theme-da', 'DSAI': 'theme-dsai', 'APPAI': 'theme-appai' };
            document.body.className = themeMap[match] || 'theme-da';
            appContainer.classList.add('reveal-mode');
            wrapper.innerHTML = renderRevealPage(match);
            break;
    }

    appContainer.appendChild(wrapper);
}

// ─────────────────────────────────────────────────────────────
// Handlers
// ─────────────────────────────────────────────────────────────
window.handleIntentClick = function(intent) {
    state.view = 'QUIZ';
    state.currentQuestionIndex = 0;
    renderView();
};

window.handleAnswer = function(questionId, answerId) {
    state.answers[questionId] = answerId;

    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        renderView();
    } else {
        state.view = 'GATE';
        renderView();
    }
};

window.handleGateSubmit = function(e) {
    e.preventDefault();
    state.view = 'REVEAL';
    renderView();
};

window.handleContactSubmit = function(e, match) {
    e.preventDefault();
    const name = document.getElementById('cname').value;
    const product = PRODUCT_DATA[match].badge;
    alert(`Obrigada, ${name}! 🎉\n\nNossa consultora vai entrar em contato em até 24h para falar sobre o ${product}.\n\nAté logo!`);
};

// ─────────────────────────────────────────────────────────────
// Start
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initializeApp);

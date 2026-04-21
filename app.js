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
                { id: 'tech', label: 'Já programo ou atuo na área técnica' },
                { id: 'data', label: 'Analiso dados ou trabalho com ferramentas de BI' },
                { id: 'business', label: 'Sou de negócios (Vendas, Marketing, Logística, RH)' }
            ]
        },
        {
            id: 'goal',
            text: 'Mais estabilidade e impacto. Como a IA vai te levar lá?',
            options: [
                { id: 'automate', label: 'Quero automatizar tarefas chatas e ganhar mais tempo livre' },
                { id: 'build', label: 'Quero construir produtos de IA e ser referência técnica' },
                { id: 'predict', label: 'Quero usar dados para antecipar o mercado e liderar decisões' }
            ]
        },
        {
            id: 'exp',
            text: 'Podemos ser honestos? O quão confortável você é com código?',
            options: [
                { id: 'none', label: 'Zero. Nunca programei na vida — e tá tudo bem!' },
                { id: 'basic', label: 'Arranho um pouco de SQL ou scripts básicos' },
                { id: 'adv', label: 'Sou nível avançado, escrevo código com facilidade' }
            ]
        }
    ],
    currentQuestionIndex: 0,
    answers: {}
};

// ─────────────────────────────────────────────────────────────
// Product Data — Empathetic, conversion-focused (US brand adjusted)
// ─────────────────────────────────────────────────────────────
const PRODUCT_DATA = {

    APPAI: {
        badge: 'MBA Inteligência Artificial Aplicada',
        theme: 'theme-appai',
        persona: 'Potencialize sua carreira atual.',
        subtitle: 'Sabemos que a rotina pesa e o mercado muda rápido. Você não precisa aprender a programar para ter as skills mais valorizadas e garantir seu emprego no futuro. A IA trabalha para você.',
        stats: [
            { value: '10 meses', label: 'Flexível (Meio período)' },
            { value: '100% Sem Código', label: 'Para iniciantes' },
            { value: '4.8/5 Estrelas', label: 'CourseReport, TrustPilot' }
        ],
        features: [
            { emoji: '⚡', title: 'O jeito de trabalhar mudou', desc: 'Esqueça o medo da IA substituir pessoas. Aprenda a usar a IA para fazer o trabalho chato por você e ganhe tempo de volta.' },
            { emoji: '🤖', title: 'Agentes Virtuais (Sem Código)', desc: 'Crie assistentes que preenchem relatórios, leem e-mails e organizam projetos num piscar de olhos.' },
            { emoji: '🤝', title: 'Nós pegamos na sua mão', desc: '80% dos nossos alunos nunca trabalharam com tecnologia antes. Você terá mentoria focada e coaches que se importam com seu sucesso.' },
            { emoji: '🎓', title: 'Certificação de Peso', desc: 'Diploma do MEC, certificado internacional da Arizona State University e AWS, tudo no seu currículo.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Especialista em Automação (IA)', salary: 'R$ 4.800 – 7.500' },
            { level: 'Pleno', role: 'Analista de Negócios (IA)', salary: 'R$ 8.000 – 14.000' },
            { level: 'Sênior', role: 'Líder / AI Champion', salary: 'R$ 15.000 – 28.000+' }
        ],
        marketStats: [
            { value: '56%', label: 'de prêmio salarial para quem domina IA (PwC 2025)' },
            { value: '80%', label: 'dos nossos alunos vêm de áreas não técnicas' }
        ],
        modules: [
            {
                number: 'Módulo 1',
                title: 'Trabalhando COM a IA (Zero Código)',
                desc: 'Você vai dominar as melhores ferramentas do mercado para escrever, analisar dados e planejar sem precisar ser programador.',
                build: '✨ Mapa de oportunidades para a sua carreira'
            },
            {
                number: 'Módulo 2',
                title: 'Chega de Tarefas Repetitivas',
                desc: 'Vamos te mostrar como integrar sistemas. Faça planilhas conversarem com seu WhatsApp e automatize tudo enquanto você toma um café.',
                build: '🤖 Seus primeiros bots autônomos no Zapier'
            },
            {
                number: 'Módulo 3',
                title: 'Transformando sua Empresa',
                desc: 'Torne-se o "AI Champion", a pessoa insubstituível que entende como implantar IA com governança e visão de negócios.',
                build: '🎯 Plano diretor prático + Certificados Internacionais'
            }
        ],
        trustItems: ['Nebius · Nasdaq', 'MEC nota 5', 'ASU', 'Forbes', 'AWS'],
        hasGuarantee: false,
        guaranteeText: 'Você começará a aplicar ferramentas de IA e ganhar horas livres na mesma semana que começar as aulas.'
    },

    DA: {
        badge: 'MBA Data Analytics & AI',
        theme: 'theme-da',
        persona: 'O mundo é feito de Dados.',
        subtitle: 'Você quer um trabalho mais estratégico e menos mecânico. Não é fácil transicionar de carreira, mas os dados trazem a maior estabilidade. Estaremos do seu lado até sua contratação.',
        stats: [
            { value: '9 meses', label: 'Flexível e Dinâmico' },
            { value: '18 Projetos', label: 'Portfólio Real (Walmart, etc)' },
            { value: '4.8/5 Estrelas', label: 'CourseReport, TrustPilot' }
        ],
        features: [
            { emoji: '📊', title: 'Mais do que Dashboards', desc: 'Juntamos Análise de Dados com IA para você não ser apenas o "fazedor" de gráficos, mas o cérebro das decisões de negócio.' },
            { emoji: '💼', title: 'Experiência para seu primeiro Job', desc: 'Através de Nossos Code Jams, você lidará com projetos do mundo real que garantem portfólio para conseguir entrevistas.' },
            { emoji: '🎯', title: 'Suporte de Carreira Dedicado', desc: 'Você vai ser apoiado por um time focadíssimo em mudar sua mentalidade e preparar você para arrebentar nas entrevistas.' },
            { emoji: '💸', title: 'Pagamento flexível', desc: 'Você tem a opção de cancelar nos primeiros 14 dias com devolução integral do dinheiro. Totalmente focado no que é melhor para você.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Analista de BI / Dados', salary: 'R$ 7.300' },
            { level: 'Pleno', role: 'Analista de BI / Dados', salary: 'R$ 10.250' },
            { level: 'Sênior', role: 'Especialista em BI / IA', salary: 'R$ 18.100' }
        ],
        marketStats: [
            { value: '80%', label: 'dos nossos formandos vêm de fora da área técnica' },
            { value: '56%', label: 'aumento esperado em salários pós-IA (PwC 2025)' }
        ],
        modules: [
            {
                number: 'Módulo 1',
                title: 'Data Foundations & Python',
                desc: 'Nós te ensinamos o essencial desde o dia um. Aprenda a programar de forma leve e entenda os conceitos sem sentir que é grego.',
                build: '🛒 Análise de E-commerce com Dados Reais'
            },
            {
                number: 'Módulo 2',
                title: 'Tornando o Complexo, Simples',
                desc: 'Aprenda a criar painéis visuais lindos que contam histórias. Seus diretores vão entender tendências em 5 segundos.',
                build: '📊 Seu primeiro Dashboard Profissional'
            },
            {
                number: 'Módulo 3',
                title: 'A IA para Automação',
                desc: 'Vá além. Use machine learning para sugerir o que vai acontecer, e RPA para automatizar a leitura dos relatórios. Exclusivo.',
                build: '🦾 Integração Completa de Análise + IA'
            }
        ],
        trustItems: ['Nebius · Nasdaq', 'MEC nota 5', 'ASU', 'CourseReport', 'BBC'],
        hasGuarantee: true,
        guaranteeText: 'Se você se qualificar e não conseguir um emprego de tecnologia em 10 meses após a graduação, nós reembolsamos 100% da sua mensalidade.'
    },

    DSAI: {
        badge: 'MBA Data Science & Inteligência Artificial',
        theme: 'theme-dsai',
        persona: 'Seja o arquiteto do futuro.',
        subtitle: 'Você já entende de tecnologia e quer dar um salto salarial liderando a mudança. A construção de sistemas de IA (Machine Learning e NLP) é onde a maior oportunidade financeira e projetos gratificantes estão.',
        stats: [
            { value: '10 meses', label: 'Mentoria Técnica' },
            { value: 'Certificado AWS', label: 'Machine Learning Foundations' },
            { value: '4.8/5 Estrelas', label: 'Avaliação dos Alunos (TrustPilot)' }
        ],
        features: [
            { emoji: '🧠', title: 'IA e Modelos Reais', desc: 'Não vamos ficar na teoria chata. Aqui você vai modelar e lançar sistemas que aprendem sozinhos. NLP, Visão Computacional, LLMs.' },
            { emoji: '🌎', title: 'Portfólio Global', desc: 'Projetos integrados no GitHub (19 no total). Da exploração do dataset até deploy, algo que recrutadores Tech exigem ver.' },
            { emoji: '🤝', title: 'Comunidade & Empregabilidade', desc: 'Grupos de apoio, quadros exclusivos de vagas abertas e treinamento para passar nas dolorosas entrevistas técnicas.' },
            { emoji: '💻', title: 'Diploma e Certificação Tripla', desc: 'MEC Faculdade Sirius, Arizona State University e credencial oficial da AWS. O passaporte completo.' }
        ],
        salaryRows: [
            { level: 'Júnior', role: 'Data Scientist', salary: 'R$ 8.500 – 11.000' },
            { level: 'Pleno', role: 'Machine Learning Engineer', salary: 'R$ 13.000 – 17.000' },
            { level: 'Sênior', role: 'Tech Lead / Staff DS', salary: 'R$ 20.000 – 30.000' }
        ],
        marketStats: [
            { value: '4×', label: 'mais vagas em IA no mercado brasileiro (2021-2024)' },
            { value: 'R$ 68K', label: 'Salário médio em dólar se conseguir trabalho exterior (US)' }
        ],
        modules: [
            {
                number: 'Módulo 1',
                title: 'O Núcleo da Ciência de Dados',
                desc: 'Vamos solidificar algoritmos, álgebra linear sem sustos e os princípios centrais do Python e SQL para lidar com massas críticas.',
                build: '🐍 Pipeline Seguro de Processamento'
            },
            {
                number: 'Módulo 2',
                title: 'Machine Learning Na Prática',
                desc: 'Treine algoritmos supervisionados e não-supervisionados que otimizam, classificam e regressam — e o melhor, compreenda os "porquês".',
                build: '🤖 Sistema Real de Predição'
            },
            {
                number: 'Módulo 3',
                title: 'Linguagem Natural (NLP) e LLMs',
                desc: 'Construa com a mesma tecnologia por trás do ChatGPT. Aplicações de LangChain e integração com AWS Bedrock.',
                build: '🧠 Engenharia Avançada e TCC Aplicado'
            }
        ],
        trustItems: ['MEC nota 5', 'ASU', 'AWS ML Foundations', 'Forbes', 'New York Post'],
        hasGuarantee: true,
        guaranteeText: 'Se você se qualificar e não conseguir um emprego de tecnologia em 10 meses após a graduação, nós reembolsamos 100% da sua mensalidade.'
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
    // Business or no coding experience goes to no-code Applied AI
    if (bg === 'business' || exp === 'none') return 'APPAI';
    // Tech + building goes to deep Data Science & AI
    if (goal === 'build' || (bg === 'tech' && exp === 'adv') || (goal === 'predict' && bg === 'tech')) return 'DSAI';
    // Career switchers focusing on analytics / dashboards
    return 'DA';
}

function getComplianceText() {
    return `
        <div class="compliance-text">
            I consent to marketing calls and text messages, including those made with an autodialed or artificial voice messages. Message and data rates may apply. Unsubscribe anytime per our Privacy Policy. Consent is not a condition of purchase.
            <br><br>
            By clicking ’Continue’, you agree to TripleTen's 
            <a href="https://docs.tripleten.com/legal/confidential.html?_gl=1*1ckvn72*_gcl_au*MTUzNjQ4NTU4OS4xNzU1NTMwNjgz*_ga*MTQwODU2ODE4Ni4xNzU1NTMwNjgz*_ga_0S9V7R9M47*czE3NTYzODc3NzAkbzE3JGcwJHQxNzU2Mzg5NDU1JGo2MCRsMCRoMA.." target="_blank">Privacy Policy</a> and 
            <a href="https://docs.tripleten.com/legal/terms_of_use.html?_gl=1*uiehqz*_gcl_au*MTUzNjQ4NTU4OS4xNzU1NTMwNjgz*_ga*MTQwODU2ODE4Ni4xNzU1NTMwNjgz*_ga_0S9V7R9M47*czE3NTYzODc3NzAkbzE3JGcwJHQxNzU2Mzg5NDU1JGo2MCRsMCRoMA.." target="_blank">Terms Of Use</a>.
            <br><br>
            <a href="https://docs.tripleten.com/support/employment.html?_gl=1*1nwoc0d*_gcl_au*MTUzNjQ4NTU4OS4xNzU1NTMwNjgz*_ga*MTQwODU2ODE4Ni4xNzU1NTMwNjgz*_ga_0S9V7R9M47*czE3NTYzODc3NzAkbzE3JGcwJHQxNzU2Mzg5NDU1JGo2MCRsMCRoMA.." target="_blank">Refund terms and Employment eligibility</a> based on Outcome highlights.
        </div>
    `;
}

// ─────────────────────────────────────────────────────────────
// Views
// ─────────────────────────────────────────────────────────────
function renderView() {
    appContainer.innerHTML = '';
    appContainer.className = ''; // remove reveal-mode in all states except REVEAL

    const wrapper = document.createElement('div');
    wrapper.className = 'view-state';

    switch (state.view) {
        case 'HOOK':
            wrapper.innerHTML = `
                <span class="badge">Sua Vida Tech. Do seu jeito.</span>
                <h1>Sabemos que você quer mais da sua carreira. E nós vamos ajudar.</h1>
                <p class="subtitle" style="margin-bottom: 24px;">Construir o futuro não significa ter estresse e horas loucas de estudo. Com turmas de 20h/semana e mentoria com pessoas que se importam com seu aprendizado, levamos você lá.</p>
                <div class="rating-pill">
                    <span class="stars">★★★★★</span> 4.8/5 (2,500+ estudantes e graduados)
                </div>
                <div class="cards-grid">
                    <div class="intent-card" onclick="handleIntentClick('business')">
                        <span class="emoji">🌱</span>
                        <h3>Eu quero mais tempo</h3>
                        <p>Aprender IA para o dia a dia e fugir de funções repetitivas, sem programar.</p>
                    </div>
                    <div class="intent-card" onclick="handleIntentClick('analyst')">
                        <span class="emoji">📈</span>
                        <h3>Eu quero visão de futuro</h3>
                        <p>Descobrir o que os dados querem dizer e ajudar empresas a não errarem com dinheiro.</p>
                    </div>
                    <div class="intent-card" onclick="handleIntentClick('builder')">
                        <span class="emoji">🏗️</span>
                        <h3>Eu quero construir sistemas</h3>
                        <p>Sujar as mãos de código, treinar modelos de Machine Learning e criar produtos.</p>
                    </div>
                </div>
            `;
            break;

        case 'QUIZ': {
            const q = state.questions[state.currentQuestionIndex];
            const progressPct = (state.currentQuestionIndex / state.questions.length) * 100;
            let optionsHtml = q.options.map(opt => `<button class="answer-btn" onclick="handleAnswer('${q.id}', '${opt.id}')">${opt.label}</button>`).join('');

            wrapper.innerHTML = `
                <div class="quiz-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPct}%"></div>
                    </div>
                    <p style="color: var(--text-secondary); margin-bottom: 12px; font-weight: 500; font-size: 14px;">Passo ${state.currentQuestionIndex + 1} de ${state.questions.length}</p>
                    <h2 class="question-text">${q.text}</h2>
                    <div class="answers-grid">${optionsHtml}</div>
                </div>
            `;
            break;

        case 'GATE':
            wrapper.innerHTML = `
                <div class="quiz-container" style="text-align: left;">
                    <span class="emoji" style="font-size: 40px; display: block; margin-bottom: 16px;">✨</span>
                    <h2 class="question-text">Uau! A gente amou o seu perfil.</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 32px; line-height: 1.6;">Nós temos a jornada exata para o que você está buscando, totalmente adaptada para te trazer segurança, tempo e sucesso financeiro. Coloque seu contato e vamos te mostrar todo o plano.</p>
                    
                    <form id="lead-form" onsubmit="handleGateSubmit(event)">
                        <div class="form-group">
                            <label>Primeiro Nome</label>
                            <input type="text" id="fname" required placeholder="Como podemos te chamar?">
                        </div>
                        <div class="form-group">
                            <label>WhatsApp Principal</label>
                            <input type="tel" id="fphone" required placeholder="(11) 90000-0000">
                        </div>
                        <div class="form-group">
                            <label>E-mail Preferido</label>
                            <input type="email" id="femail" required placeholder="seu.email@exemplo.com">
                        </div>
                        <button type="submit" class="btn-submit">Continue & View Master Plan</button>
                    </form>
                    ${getComplianceText()}
                </div>
            `;
            break;
        }

        case 'REVEAL': {
            const match = calculateMatch();
            appContainer.classList.add('reveal-mode');
            document.body.className = PRODUCT_DATA[match].theme;
            wrapper.innerHTML = renderRevealPage(match);
            break;
        }
    }

    appContainer.appendChild(wrapper);
}

// ─────────────────────────────────────────────────────────────
// Reveal Template (Max 6 Scrolls Desktop)
// ─────────────────────────────────────────────────────────────
function renderRevealPage(match) {
    const p = PRODUCT_DATA[match];

    const stats = p.stats.map(s => `<div class="stat-pill"><span class="stat-pill-value">${s.value}</span><span class="stat-pill-label">${s.label}</span></div>`).join('');
    const features = p.features.map(f => `<div class="feature-card"><span class="feature-emoji">${f.emoji}</span><div class="feature-text"><strong>${f.title}</strong><p>${f.desc}</p></div></div>`).join('');
    const salaries = p.salaryRows.map(r => `<div class="salary-row"><div class="salary-level">${r.level}</div><div class="salary-role">${r.role}</div><div class="salary-value">${r.salary}</div></div>`).join('');
    const mkt = p.marketStats.map(s => `<div class="market-stat"><span class="market-stat-value">${s.value}</span><span class="market-stat-label">${s.label}</span></div>`).join('');
    const modules = p.modules.map(m => `<div class="module-card"><div class="module-number">${m.number}</div><h4 class="module-title">${m.title}</h4><p class="module-desc">${m.desc}</p><div class="module-build">${m.build}</div></div>`).join('');
    const trust = p.trustItems.map(t => `<span class="trust-badge">${t}</span>`).join('');
    
    // Friendly Guarantee Box
    const guaranteeHtml = `
        <div class="guarantee-line">
            <span class="guarantee-icon">🛡️</span>
            <div><strong>O nosso compromisso com você:</strong> ${p.guaranteeText}</div>
        </div>
    `;

    return `
        <div class="reveal-page">
            
            <!-- HERO -->
            <div class="reveal-hero">
                <span class="badge" style="border: 1px solid var(--primary-black); color: var(--primary-black); background: transparent;">${p.badge}</span>
                <h1 class="reveal-h1">${p.persona}</h1>
                <p class="subtitle" style="max-width: 700px; font-size: 18px;">${p.subtitle}</p>
                <div class="stat-pills">${stats}</div>
            </div>

            <!-- CARING FEATURES -->
            <div class="reveal-section">
                <h2 class="section-title">Por que essa mudança faz sentido</h2>
                <div class="features-grid">${features}</div>
            </div>

            <!-- OUTCOMES -->
            <div class="reveal-section">
                <h2 class="section-title">Resultados que trazem paz e estabilidade</h2>
                <div class="market-stats">${mkt}</div>
                <div class="salary-table">${salaries}</div>
            </div>

            <!-- ACTION PLAN -->
            <div class="reveal-section">
                <h2 class="section-title">A sua jornada passo a passo</h2>
                <div class="modules-grid">${modules}</div>
            </div>

            <!-- TRUST -->
            <div class="reveal-section trust-section">
                <h2 class="section-title">Quem endossa a TripleTen</h2>
                <div class="trust-badges">${trust}</div>
                ${guaranteeHtml}
            </div>

            <!-- FORM -->
            <div class="reveal-section" style="background: white; padding: 60px 24px; border-radius: 12px; margin: 40px auto; max-width: 800px; border: 1px solid var(--border-color); box-shadow: 0 4px 16px rgba(0,0,0,0.05);">
                <h2 class="section-title">E aí, qual o próximo passo?</h2>
                <p class="subtitle" style="margin-bottom: 32px;">Nós temos uma equipe de consultores (humanos, amáveis e experientes) esperando para tirar todas as suas dúvidas reais, sem fazer jogo de vendas difícil. É só bater um papo.</p>
                <form id="contact-form" onsubmit="handleContactSubmit(event, '${match}')">
                    <div class="contact-grid">
                        <div class="form-group">
                            <label>Como gostaria de ser chamado?</label>
                            <input type="text" id="cname" required placeholder="Seu nome">
                        </div>
                        <div class="form-group">
                            <label>Seu WhatsApp</label>
                            <input type="tel" id="cphone" required placeholder="(11) 90000-0000">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>E-mail oficial</label>
                        <input type="email" id="cemail" required placeholder="email@exemplo.com">
                    </div>
                    <div class="form-group">
                        <label>Conta um pouco do seu momento <span style="font-weight: 400; color: var(--text-secondary);">(Opcional)</span></label>
                        <textarea id="cmessage" placeholder="Quais são suas inseguranças hoje? Qual seu tempo livre para as aulas?" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn-cta">Continue & Claim Consult</button>
                </form>
                ${getComplianceText()}
            </div>
            
        </div>
    `;
}

// ─────────────────────────────────────────────────────────────
// App Flow Handlers
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
    alert(\`Hey \${name}! Nossa equipe recebeu seus dados e entra em contato via WhatsApp em breve. Estamos super animados para começar a mudar isso.\`);
};

// ─────────────────────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initializeApp);

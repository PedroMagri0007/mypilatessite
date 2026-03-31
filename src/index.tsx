import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { navbar, footer, pageHero } from './components'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use(renderer)

// ── HOME ──────────────────────────────────────────────────────────────────────
app.get('/', (c) => {
  return c.render(
    <>
      {navbar('home')}
      <div class="promo-banner">
        <p><strong>🎉 Aula experimental gratuita!</strong> Experimenta o teu primeiro Pilates sem compromisso. <a href="/aulas-experimentais" style="text-decoration:underline;color:white;">Saber mais →</a></p>
      </div>

      {/* HERO */}
      <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-content">
            <span class="hero-badge"><i class="fas fa-leaf"></i> Estúdios em Carnaxide & Oeiras</span>
            <h1>Descobre o teu<br /><em>equilíbrio perfeito</em></h1>
            <p class="hero-desc">
              No MyPilates acreditamos que movimento inteligente transforma corpos e mentes.
              Aulas para todos os níveis, equipamentos de última geração e instrutores/fisioterapeutas certificados.
            </p>
            <div class="hero-actions">
              <a href="/marcacoes" class="btn btn-primary btn-lg"><i class="fas fa-calendar-plus"></i> Agendar Aula</a>
              <a href="/aulas" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.5);color:white;">Ver Aulas</a>
            </div>
          </div>
        </div>
        <div class="hero-scroll">
          <div class="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <div class="stats-band">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item fade-in">
              <div class="stat-number">2</div>
              <div class="stat-label">Estúdios</div>
            </div>
            <div class="stat-item fade-in">
              <div class="stat-number">200+</div>
              <div class="stat-label">Clientes Ativos</div>
            </div>
            <div class="stat-item fade-in">
              <div class="stat-number">3+</div>
              <div class="stat-label">Anos de Experiência</div>
            </div>
            <div class="stat-item fade-in">
              <div class="stat-number">7</div>
              <div class="stat-label">Instrutores Certificados</div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT INTRO */}
      <section class="section">
        <div class="container">
          <div class="about-grid">
            <div class="about-image-wrap">
              <img
                src="/static/img/IMG_1245.jpg"
                alt="MyPilates studio"
                class="about-img"
              />
              <div class="about-accent"></div>
            </div>
            <div class="about-text fade-in">
              <span class="section-label">Sobre Nós</span>
              <h2 class="section-title">Pilates com propósito,<br />ciência e paixão</h2>
              <div class="divider"></div>
              <p class="section-desc">
                O MyPilates nasceu da convicção de que o movimento é sinónimo de saúde. Desde a nossa abertura,
                temos ajudado centenas de pessoas a melhorar a sua postura, força, flexibilidade e bem-estar geral.
              </p>
              <p class="section-desc mt-4">
                Com dois estúdios — Carnaxide e Oeiras — levamos o melhor
                do método Pilates para perto de si, num ambiente acolhedor e sofisticado.
              </p>
              <ul class="about-list">
                <li><i class="fas fa-check-circle"></i> Instrutores/Fisioterapeutas certificados</li>
                <li><i class="fas fa-check-circle"></i> Equipamentos de última geração</li>
                <li><i class="fas fa-check-circle"></i> Aulas com 2 alunos por intrutor para maximixar a personalização</li>
                <li><i class="fas fa-check-circle"></i> Aulas adaptadas às condições físicas de cada aluno</li>
                <li><i class="fas fa-check-circle"></i> Estacionamento gratuito em ambas as unidades</li>
              </ul>
              <a href="/sobre-nos" class="btn btn-outline mt-8">Conheça a nossa história</a>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSES PREVIEW */}
      <section class="section" style="background:var(--sand);padding-top:100px;">
        <div class="container">
          <div class="section-center fade-in">
            <span class="section-label">As Nossas Aulas</span>
            <h2 class="section-title">Encontra a aula certa para ti</h2>
            <p class="section-desc">
              As nossas aulas são adaptadas às condições físicas de cada aluno.
            </p>
          </div>
          <div class="classes-grid-1">
            <div class="class-card fade-in">
              <div class="class-card-img">
                <img src="/static/img/image00106.jpg" alt="Reformer Pilates" />
              </div>
              <div class="class-card-body">
                <span class="class-tag">Todos os níveis</span>
                <h3>Pilates</h3>
                <p>Trabalha força, controlo e alinhamento com o equipamento mais versátil do Pilates.</p>
                <div class="class-meta">
                  <span><i class="fas fa-clock"></i> 50 min</span>
                  <span><i class="fas fa-users"></i> Máx. 2 pessoas/instrutor</span>
                </div>
              </div>
            </div>
            <div class="class-card fade-in">
              <div class="class-card-img">
                <img src="/static/img/IMG_1234.jpg" alt="Clínico" />
              </div>
              <div class="class-card-body">
                <span class="class-tag">Especializado</span>
                <h3>Pilates Clínico</h3>
                <p>Programa personalizado para reabilitação, dores crónicas e condições específicas.</p>
                <div class="class-meta">
                  <span><i class="fas fa-clock"></i> 50 min</span>
                  <span><i class="fas fa-users"></i> Máx. 2 pessoas/instrutor</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-8">
            <a href="/aulas" class="btn btn-outline">Ver todas as aulas <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section class="section testimonials">
        <div class="container">
          <div class="section-center fade-in">
            <span class="section-label">Testemunhos</span>
            <h2 class="section-title">O que dizem os nossos clientes</h2>
          </div>
          <div class="testimonials-grid">
            <div class="testimonial-card fade-in">
              <div class="testimonial-quote">"</div>
              <div class="stars">★★★★★</div>
              <p class="testimonial-text">Adoro!! Excelentes profissionais e de grande simpatia! Tem sido um excelente aliado na manutenção física, tem-me ajudado imenso no alívio das dores na coluna e melhorei imenso a nível de postura no meu dia-a-dia! Recomendo!!</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">A</div>
                <div>
                  <div class="testimonial-name">Rita Brito</div>
                  <div class="testimonial-since">Cliente desde 2024 · Carnaxide</div>
                </div>
              </div>
            </div>
            <div class="testimonial-card fade-in">
              <div class="testimonial-quote">"</div>
              <div class="stars">★★★★★</div>
              <p class="testimonial-text">Boas instalações e excelente acompanhamento. Prática de pilates personalizada e adaptada às minhas necessidades de mobilidade, flexibilidade e força. Recomendo vivamente ambos os estudios.</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">M</div>
                <div>
                  <div class="testimonial-name">Carla Alonso</div>
                  <div class="testimonial-since">Cliente desde 2025 · Oeiras</div>
                </div>
              </div>
            </div>
            <div class="testimonial-card fade-in">
              <div class="testimonial-quote">"</div>
              <div class="stars">★★★★★</div>
              <p class="testimonial-text">Finalmente encontrei o estilo de pilates que tanto procurava! Estúdio incrível, cheio de luz, com vista para o jardim, equipa super cuidadosa e atenciosa. Livrei-me da dor que sentia logo na segunda aula. Recomendo a TODOS!</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">C</div>
                <div>
                  <div class="testimonial-name">Victoria Passos</div>
                  <div class="testimonial-since">Cliente desde 2023 · Carnaxide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta-section">
        <div class="container fade-in">
          <span class="section-label" style="color:var(--sage-light)">Começa já hoje</span>
          <h2>A tua primeira aula é grátis</h2>
          <p>Sem compromisso. Experimenta qualquer aula nos nossos dois estúdios e descobre o MyPilates.</p>
          <a href="/marcacoes" class="btn btn-light btn-lg">
            <i class="fas fa-calendar-check"></i> Reservar Aula Experimental
          </a>
        </div>
      </section>

      {footer()}
      {scripts()}
    </>,
    { title: 'Estúdio de Pilates em Oeiras e Carnaxid' }
  )
})

// ── ABOUT ─────────────────────────────────────────────────────────────────────
app.get('/sobre-nos', (c) => {
  return c.render(
    <>
      {navbar('sobre-nos')}
      {pageHero('Sobre o MyPilates', 'Conheça a nossa história, missão e a equipa apaixonada que torna tudo possível.', 'Sobre Nós')}

      <section class="section">
        <div class="container">
          <div class="about-grid">
            <div class="about-image-wrap">
              <img
                src="https://sspark.genspark.ai/cfimages?u1=OR1oNOFW1g1K85Fxn0GM4ALQEnJYQsTxfP1EyRbah4n32ZqRHBsfXse84ff1WoScGXLEKUO%2BfTEwMHPJUEDIJHUiLmpX%2BOSIXgRDqFQpubk1qGTieQ2qeRdxGb2uBtoTSF4hAhUCWpCVQEcsVxTvtJzYyicCmmRrdiG0s4%2BoEuBR4f8%2F19p8WKu5zydFd7DNcs5C8UqfkfWwZdUW&u2=PNTY%2BTNqnVDCPwKY&width=2560"
                alt="MyPilates história"
                class="about-img"
              />
              <div class="about-accent"></div>
            </div>
            <div class="about-text fade-in">
              <span class="section-label">A Nossa História</span>
              <h2 class="section-title">Nascemos para mover</h2>
              <div class="divider"></div>
              <p class="section-desc">
                O MyPilates foi fundado em 2023 com o propósito de proporcionar aos nossos alunos aquilo que de melhor o Pilates tem para oferecer. A visão era simples: criar um espaço onde cada pessoa
                se sinta bem-vinda, apoiada e desafiada a superar-se.
              </p>
              <p class="section-desc mt-4">
                Abrimos o primeiro estúdio em Carnaxide e, face à procura crescente, expandimos para Oeiras em 2025.
                Hoje, com uma equipa de 7 instrutores e mais de 200 alunos, somos referência no Pilates
                na área de Lisboa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section class="section" style="background:var(--sand);">
        <div class="container">
          <div class="section-center fade-in">
            <span class="section-label">Os Nossos Valores</span>
            <h2 class="section-title">O que nos guia</h2>
          </div>
          <div class="classes-grid" style="margin-top:56px;">
            {[
              { icon: 'fas fa-heart', title: 'Bem-Estar Integral', desc: 'Acreditamos que o Pilates vai além do corpo físico — trabalha mente, emoções e espírito.' },
              { icon: 'fas fa-graduation-cap', title: 'Excelência Técnica', desc: 'Os nossos instrutores/fisioterapeutas atualizam-se continuamente para oferecer o melhor serviço possível aos nossos alunos.' },
              { icon: 'fas fa-users', title: 'Comunidade', desc: 'Criamos um espaço inclusivo onde todos são bem-vindos, independentemente do nível ou idade.' },
              { icon: 'fas fa-leaf', title: 'Sustentabilidade', desc: 'Compromisso com práticas sustentáveis nos nossos estúdios e operações diárias.' },
              { icon: 'fas fa-star', title: 'Personalização', desc: 'Cada corpo é único. Adaptamos sempre as aulas ao aluno.' },
              { icon: 'fas fa-shield-alt', title: 'Segurança', desc: 'Prioridade máxima à segurança e ao conforto em todos os exercícios e programas.' },
            ].map(v => (
              <div class="class-card fade-in" style="text-align:center;">
                <div class="class-card-body" style="padding:36px;">
                  <div style="width:56px;height:56px;background:var(--sage-light);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
                    <i class={v.icon} style="color:var(--sage-dark);font-size:1.1rem;"></i>
                  </div>
                  <h3 style="font-size:1.25rem;margin-bottom:10px;">{v.title}</h3>
                  <p style="font-size:0.88rem;">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section class="section">
        <div class="container">
          <div class="section-center fade-in">
            <span class="section-label">A Nossa Equipa</span>
            <h2 class="section-title">Instrutores certificados e apaixonados</h2>
            <p class="section-desc">Cada membro da nossa equipa é selecionado pela sua competência técnica e pela sua capacidade de inspirar.</p>
          </div>
          <div class="team-grid">
            {[
              { name: 'Francisca', role: 'Instrutora & Fisioterapeuta', initial: 'S', studio: 'Oeiras' },
              { name: 'Juliana', role: 'Instrutora', initial: 'J', studio: 'Carnaxide' },
              { name: 'Mafalda', role: 'Instrutora', initial: 'M', studio: 'Carnaxide' },
              { name: 'Marcela', role: 'Instrutora', initial: 'P', studio: 'Carnaxide' },
              { name: 'Rosana', role: 'Instrutora', initial: 'B', studio: 'Carnaxide' },
              { name: 'Thiago', role: 'Instrutor', initial: 'R', studio: 'Oeiras' },
              { name: 'IBeatriz', role: 'Administrativa', initial: 'I', studio: 'Carnaxide' },
              { name: 'Marta', role: 'Administrativa', initial: 'C', studio: 'Oeiras' },
            ].map(t => (
              <div class="team-card fade-in">
                <div class="team-photo" style="background:var(--sand-dark);">
                  <span style="font-family:var(--font-serif);font-size:3.5rem;color:var(--sage-dark);">{t.initial}</span>
                </div>
                <h4>{t.name}</h4>
                <span class="role">{t.role}</span>
                <p style="font-size:0.78rem;margin-top:4px;">{t.studio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {footer()}
      {scripts()}
    </>,
    { title: 'Sobre Nós' }
  )
})

// ── CLASSES ───────────────────────────────────────────────────────────────────
app.get('/aulas', (c) => {
  const classes = [
    { tag: 'Todos os níveis', name: 'Reformer Pilates', desc: 'O reformer é o equipamento mais versátil do Pilates, permitindo exercícios deitado, sentado e de pé com resistência ajustável. Melhora força, flexibilidade e coordenação de forma completa.', duration: '55 min', size: 'Máx. 6 pessoas', img: 'hoHMFo5J47fc7Byx72fgQyG%2Bjb16C%2F%2FJ54kcdSaOz7yRPDEXauaeJGYA1fy7w0yZ4HlegpyCMd44CUK9NV1lIixu1FimBcYI0YXhiCsGPyoZx%2FLrDB1NJYac5KtnoE3RCzWi74v9UdX9RWzMnWEEJlG9oF85FX%2BlTL6SThHfKaqTXAYOJ5bKI8h8GuEsS95j67Dr%2Bs3TwmOR%2B3J0dbKG%2FTF05tqqR%2Fv5Vjo5XTExnbiYMETi%2F71jEN8o4jv3VcngWtQ%3D' },
    { tag: 'Iniciante', name: 'Mat Pilates', desc: 'A forma mais acessível do Pilates. Trabalha o core, postura e respiração sem equipamento. Ideal para principiantes e para quem quer aprofundar os fundamentos do método.', duration: '60 min', size: 'Máx. 10 pessoas', img: 'E%2FP9ZeasfSZ6iNpbEPdSckTzbtGb8wfiOcwrtt4HXwgdN8NhVO7vQ75FcjupdV29RVB%2B2FgtbYXvhj7PQKbfep4kX%2B%2FDxLkoECRLIAUTVcCfuCOb2z084B5%2FhQywzytyL8gCRe%2BU5p1cXJQZ0yzF4gE%3D' },
    { tag: 'Especializado', name: 'Pilates Clínico', desc: 'Sessões individuais ou em duo, dirigidas por instrutores com formação específica em reabilitação. Indicado para dores crónicas, pós-cirurgia, escoliose e outras condições.', duration: '50 min', size: 'Individual / Duo', img: 'kGRqGPNH8V4%2FYV%2FO0MpWITnNX3FTyvIwkXywm%2BwGQuAPLojoyfbmnnleAOuLZu0NKjjV%2FuMy1sNwZmMsl7WPglTnmdg2M%2BHpfKWply1XRMYmgguAezougBh46ynFx8Gx%2BeufGr8YXonffSrY%2F4DXIthnDsTrfWO2l23WsYqVtcHC7tDWBvNLoZBvRW%2BKqkV4Yx7hhzpp%2BUOOtgMsQZR3zYq2BZ6%2FUykuxpBBYE6eV5kjBA%3D%3D' },
    { tag: 'Pré/Pós-natal', name: 'Pilates Maternal', desc: 'Programa especialmente concebido para acompanhar a gravidez e a recuperação pós-parto. Fortalece o pavimento pélvico, alivia dores e prepara o corpo para o parto.', duration: '55 min', size: 'Máx. 5 pessoas', img: 'po0aX76Il%2BjrSyEW8pyH6tt490k54AP0YXngzYQ2WEDhUmp4B28%2FJTzNc7OWK6vivn1d2I2l%2BBuZsY7zWgyyK4d3vOjcRKRbilIQ%2BCD7U1MD' },
    { tag: 'Avançado', name: 'Power Reformer', desc: 'Aula dinâmica e desafiante para praticantes com experiência. Combina movimentos complexos em circuito para aumentar resistência, potência e controlo corporal.', duration: '55 min', size: 'Máx. 6 pessoas', img: 'OR1oNOFW1g1K85Fxn0GM4ALQEnJYQsTxfP1EyRbah4n32ZqRHBsfXse84ff1WoScGXLEKUO%2BfTEwMHPJUEDIJHUiLmpX%2BOSIXgRDqFQpubk1qGTieQ2qeRdxGb2uBtoTSF4hAhUCWpCVQEcsVxTvtJzYyicCmmRrdiG0s4%2BoEuBR4f8%2F19p8WKu5zydFd7DNcs5C8UqfkfWwZdUW' },
    { tag: 'Todos os níveis', name: 'Pilates & Bola', desc: 'Combina o método Pilates com a bola suíça para trabalhar equilíbrio, estabilidade e coordenação de forma divertida e eficaz. Ótimo para a coluna vertebral.', duration: '60 min', size: 'Máx. 8 pessoas', img: 'FCJKGHbO03s2Yq%2Bw4Gaiyc9hDRKmXmKyD7t5H4mHkrYvNYlt18fFVsli9e3gfxLA2h2eXEkrZ8OoP65Qnl1JghHiiUvC758DtMf5nmxpWB0uMCjjHlRu%2B%2BPywL0CvbZBp7Vd8qF0aw0JD78IhQ6U0%2BN05s7tLJy0xhBegXhtNm3MQMc23nmlvT1yxj0uQIGa9%2BYcCDfk2zp2TWUpXUB26w%3D%3D' },
  ]
  return c.render(
    <>
      {navbar('aulas')}
      {pageHero('As Nossas Aulas', 'Uma variedade de classes para todos os níveis, objetivos e idades.', 'Aulas')}

      <section class="section">
        <div class="container">
          <div class="classes-grid">
            {classes.map(cls => (
              <div class="class-card fade-in">
                <div class="class-card-img">
                  <img src={`https://sspark.genspark.ai/cfimages?u1=${cls.img}&u2=Jt%2FM4u1UffTvsQWf&width=800`} alt={cls.name} />
                </div>
                <div class="class-card-body">
                  <span class="class-tag">{cls.tag}</span>
                  <h3>{cls.name}</h3>
                  <p>{cls.desc}</p>
                  <div class="class-meta">
                    <span><i class="fas fa-clock"></i> {cls.duration}</span>
                    <span><i class="fas fa-users"></i> {cls.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="section" style="background:var(--sand);">
        <div class="container">
          <div class="section-center fade-in">
            <span class="section-label">Dúvidas Frequentes</span>
            <h2 class="section-title">Perguntas sobre as aulas</h2>
          </div>
          <div class="faq-list">
            {[
              { q: 'Preciso de experiência prévia para me inscrever?', a: 'Não. Temos aulas específicas para iniciantes onde aprendes os fundamentos do método Pilates. Os nossos instrutores irão guiar-te desde o primeiro movimento.' },
              { q: 'O que devo vestir para as aulas?', a: 'Roupa desportiva confortável que permita liberdade de movimento. Praticamos sempre descalços ou com meias antiderrapantes (disponíveis para compra no studio).' },
              { q: 'Qual a diferença entre Mat e Reformer?', a: 'O Mat usa apenas o peso do próprio corpo e pequenos acessórios; é mais acessível e portátil. O Reformer utiliza uma máquina específica com molas de resistência ajustável, permitindo um trabalho mais profundo e versátil.' },
              { q: 'Posso fazer Pilates se estiver grávida?', a: 'Sim! O Pilates maternal é altamente recomendado durante a gravidez. Temos aulas específicas e instrutoras com formação pré-natal. Recomendamos consulta médica prévia.' },
              { q: 'Com que frequência devo praticar?', a: 'O ideal é 2 a 3 vezes por semana para sentir resultados consistentes. No entanto, mesmo 1 vez por semana traz benefícios significativos ao longo do tempo.' },
            ].map(faq => (
              <div class="faq-item">
                <button class="faq-question" onclick="toggleFaq(this)">
                  {faq.q} <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {footer()}
      {scripts()}
    </>,
    { title: 'Aulas de Pilates' }
  )
})

// ── PRICING ───────────────────────────────────────────────────────────────────
app.get('/precos', (c) => {
  return c.render(
    <>
      {navbar('precos')}
      {pageHero('Preços e Planos', 'Opções flexíveis para cada estilo de vida e orçamento.', 'Preços')}

      <section class="section">
        <div class="container">
          <div class="section-center fade-in">
            <span class="section-label">Planos de Aulas</span>
            <h2 class="section-title">Escolhe o plano ideal para ti</h2>
            <p class="section-desc">Os preços da modalidade podem variar consoante o estúdio que eleger.</p>
          </div>
          <div class="pricing-grid">
            <div class="pricing-card fade-in">
              <span class="pricing-name">Básico</span>
              <div class="pricing-price">
                <span class="price-amount">1x/ semana</span>
              </div>
              <span class="price-period">4 aulas por mês</span>
              <p class="pricing-desc">Perfeito para começar ou para quem tem uma agenda mais limitada.</p>
              <ul class="pricing-features">
                <li><i class="fas fa-check"></i> Casa de banho/vestiário</li>
                <li><i class="fas fa-check"></i> Flexibilidade de agendamento</li>
                <li><i class="fas fa-check"></i> Manutençao e Bem-Estar</li>
              </ul>
              <a href="/marcacoes" class="btn btn-outline" style="width:100%;justify-content:center;">Começar</a>
            </div>

            <div class="pricing-card featured fade-in">
              <span class="pricing-badge">Mais Popular</span>
              <span class="pricing-name">PRO</span>
              <div class="pricing-price">
                <span class="price-amount">2x/semana</span>
              </div>
              <span class="price-period">8 aulas por mês</span>
              <p class="pricing-desc">O equilíbrio perfeito para resultados consistentes.</p>
              <ul class="pricing-features">
                <li><i class="fas fa-check"></i> Casa de banho/vestiário</li>
                <li><i class="fas fa-check"></i> Flexibilidade de agendamento</li>
                <li><i class="fas fa-check"></i> Resultados visíveis</li>
              </ul>
              <a href="/marcacoes" class="btn btn-primary" style="width:100%;justify-content:center;">Começar</a>
            </div>

            <div class="pricing-card fade-in">
              <span class="pricing-name">Premium</span>
              <div class="pricing-price">
                <span class="price-amount">3x/semana</span>
              </div>
              <span class="price-period">12 aulas por mês</span>
              <p class="pricing-desc">Para quem quer transformar o Pilates num estilo de vida.</p>
              <ul class="pricing-features">
                <li><i class="fas fa-check"></i> Casa de banho/vestiário</li>
                <li><i class="fas fa-check"></i> Flexibilidade de agendamento</li>
                <li><i class="fas fa-check"></i> Transformação total</li>
              </ul>
              <a href="/marcacoes" class="btn btn-outline" style="width:100%;justify-content:center;">Começar</a>
            </div>
          </div>

          {/* Private sessions */}
          <div style="margin-top:80px;">
            <div class="section-center fade-in">
              <span class="section-label">Outras modalidades</span>
              <h2 class="section-title">Pensado para si</h2>
              <p class="section-desc">Para uma prática totalmente personalizável às suas preferências e disponibilidade.</p>
            </div>
            <div class="pricing-grid-1" style="margin-top:48px;">
              {[
                { name: 'Sessão Individual', price: '€75', per: '/ sessão', features: ['1 pessoa', '50 minutos', 'Instrutor dedicado', 'Programa personalizado', 'Todos os equipamentos'] },
                { name: 'Pack 10 aulas', price: '€50', per: '/ pack', features: ['Máx. 2 pessoas', '50 minutos', 'Instrutor dedicado', 'Programa semipersonalizado', 'Todos os equipamentos'] },
              ].map(p => (
                <div class="pricing-card fade-in">
                  <span class="pricing-name">{p.name}</span>
                  <div class="pricing-price"><span class="price-amount">{p.price}</span></div>
                  <span class="price-period">{p.per}</span>
                  <ul class="pricing-features" style="margin-top:20px;">
                    {p.features.map(f => <li><i class="fas fa-check"></i> {f}</li>)}
                  </ul>
                  <a href="/contactos" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:24px;">Reservar</a>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style="background:var(--sand);border-radius:var(--radius);padding:36px;margin-top:60px;" class="fade-in">
            <h3 style="font-size:1.3rem;margin-bottom:16px;">Notas importantes</h3>
            <ul style="display:flex;flex-direction:column;gap:10px;">
              {[
                'A primeira aula experimental é gratuita e sem compromisso.',
                'Os planos mensais renovam automaticamente e podem ser cancelados com 30 dias de antecedência.',
                'Aulas não utilizadas num mês não transitam para o mês seguinte.',
                'Consultar promoções e campanhas em vigor com o seu estúdio de preferência - Oeiras ou Carnaxide.',
                'Para grupos empresariais e parcerias, contacte-nos para condições especiais.',
              ].map(n => <li style="display:flex;gap:10px;font-size:0.9rem;color:var(--mid-gray);"><i class="fas fa-info-circle" style="color:var(--sage-dark);margin-top:3px;flex-shrink:0;"></i> {n}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {footer()}
      {scripts()}
    </>,
    { title: 'Preços e Planos' }
  )
})

// ── SCHEDULE ──────────────────────────────────────────────────────────────────
app.get('/horarios', (c) => {
  const carnaxideSchedule = [
    { time: '07:00-14:00', cls: 'Pilates', instructor: 'Catarina Lima', level: 'all', spots: '2 vagas/aula' },
    { time: '07:00-14:00', cls: 'Pilates', instructor: 'Sofia Mendes', level: 'all', spots: '2 vagas/aula' },
    { time: '14:00-21:00', cls: 'Pilates', instructor: 'Sofia Mendes', level: 'all', spots: '2 vagas/aula' },
    { time: '14:00-21:00', cls: 'Pilates', instructor: 'Rui Pereira', level: 'all', spots: '2 vagas/aula' },
    { time: '08:00-13:00 (Sab)', cls: 'Pilates', instructor: 'Rui Pereira', level: 'all', spots: '2 vagas/aula' },
  ]
  const oeiraSchedule = [
    { time: '07:00-14:00', cls: 'Pilates', instructor: 'Inês Rodrigues', level: 'all', spots: '2 vagas/aula' },
    { time: '07:00´-14:00', cls: 'Pilates', instructor: 'Mariana Costa', level: 'all', spots: '2 vagas/aula' },
    { time: '14:00-21:00', cls: 'Pilates', instructor: 'Mariana Costa', level: 'all', spots: '2 vagas/aula' },
    { time: '14:00-21:00', cls: 'Pilates', instructor: 'Beatriz Nunes', level: 'all', spots: '2 vagas/aula' },
  ]

  const renderTable = (rows: typeof carnaxideSchedule) => (
    <table class="schedule-table">
      <thead>
        <tr>
          <th>Hora</th>
          <th>Aula</th>
          <th>Instrutor/a</th>
          <th>Nível</th>
          <th>Disponibilidade</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr>
            <td><span class="sched-time">{r.time}</span></td>
            <td><span class="sched-class">{r.cls}</span></td>
            <td><span class="sched-instructor">{r.instructor}</span></td>
            <td><span class={`sched-badge ${r.level}`}>{r.level === 'all' ? 'Todos' : r.level === 'intermediate' ? 'Intermédio' : r.level === 'advanced' ? 'Avançado' : 'Iniciante'}</span></td>
            <td><span class={`sched-spots${r.low ? ' low' : ''}`}>{r.spots}</span></td>
            <td><a href="/marcacoes" class="btn btn-primary" style="padding:7px 16px;font-size:0.72rem;">Reservar</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return c.render(
    <>
      {navbar('horarios')}
      {pageHero('Horários', 'Consulta os horários semanais dos dois studios e reserva já a tua aula.', 'Horários')}

      <section class="section">
        <div class="container">
          <div class="fade-in" style="margin-bottom:16px;">
            <p style="font-size:0.88rem;color:var(--mid-gray);margin-bottom:24px;">
              <i class="fas fa-info-circle" style="color:var(--sage-dark);margin-right:6px;"></i>
              Horário válido de Segunda a Sábado. Aos domingos ambos os studios estão fechados. Os horários podem sofrer alterações — consulta sempre a app.
            </p>
          </div>
          <div class="schedule-tabs">
            <button class="tab-btn active" onclick="showTab('carnaxide', this)">
              <i class="fas fa-map-marker-alt"></i> Carnaxide
            </button>
            <button class="tab-btn" onclick="showTab('oeiras', this)">
              <i class="fas fa-map-marker-alt"></i> Oeiras
            </button>
          </div>

          <div id="carnaxide" class="tab-content active fade-in">
            <h3 style="font-family:var(--font-serif);font-size:1.4rem;margin-bottom:24px;color:var(--charcoal);">
              <i class="fas fa-map-marker-alt text-sage" style="margin-right:8px;"></i>Studio Carnaxide
            </h3>
            {renderTable(carnaxideSchedule)}
          </div>

          <div id="oeiras" class="tab-content fade-in">
            <h3 style="font-family:var(--font-serif);font-size:1.4rem;margin-bottom:24px;color:var(--charcoal);">
              <i class="fas fa-map-marker-alt text-sage" style="margin-right:8px;"></i>Studio Oeiras
            </h3>
            {renderTable(oeiraSchedule)}
          </div>

          <div style="background:var(--sand);border-radius:var(--radius);padding:32px;margin-top:48px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;" class="fade-in">
            <div style="flex:1;min-width:240px;">
              <h4 style="font-family:var(--font-serif);font-size:1.3rem;margin-bottom:8px;">Sessões Privadas</h4>
              <p style="font-size:0.88rem;">Preferes horários personalizados? As sessões privadas adaptam-se completamente à tua agenda.</p>
            </div>
            <a href="/contactos" class="btn btn-outline">Solicitar Horário Privado</a>
          </div>
        </div>
      </section>

      {footer()}
      {scripts()}
    </>,
    { title: 'Horários' }
  )
})

// ── STUDIOS ───────────────────────────────────────────────────────────────────
app.get('/studios', (c) => {
  return c.render(
    <>
      {navbar('studios')}
      {pageHero('Os Nossos Estúdios', 'Dois espaços pensados ao detalhe para a sua prática de Pilates.', 'Studios')}

      <section class="section">
        <div class="container">
          <div class="studios-grid">
            <div class="studio-card fade-in">
              <div class="studio-img">
                <img src="https://sspark.genspark.ai/cfimages?u1=41ckaJSzm%2BoHHJ%2F8y8ZCr1mmztMgNwIVhUt49n3l4fQHRzO0DDmOdZVSgUEXmzDndoVEP59NH26MJ2Kh9KwKUvMlgxLhZn0R0numYvgeVf9J8A%2B81xZPKqTzVs0xSsJB8x3S&u2=cDCaCx4rp%2BGkoKAW&width=2560" alt="Studio Carnaxide" />
              </div>
              <div class="studio-body">
                <span class="studio-tag"><i class="fas fa-map-marker-alt"></i> Carnaxide</span>
                <h3>Estúdio Carnaxide</h3>
                <p>O nosso primeiro estúdio, aberto em 2023. Espaço com luz natural e uma vista deslumbrante para o jardim.</p>
                <div class="studio-info">
                  <div class="studio-info-row"><i class="fas fa-map-marker-alt"></i><span>Av. Tomás Ribero 43, Piso 0 SalaG, 2790-221 Carnaxide</span></div>
                  <div class="studio-info-row"><i class="fas fa-phone"></i><span>+351 960 046 395</span></div>
                  <div class="studio-info-row"><i class="fas fa-envelope"></i><span>escritorio.mypilates@gmail.com</span></div>
                  <div class="studio-info-row"><i class="fas fa-clock"></i><span>Seg–Sex: 07:00–21:00 · Sáb: 08:00–13:00</span></div>
                  <div class="studio-info-row"><i class="fas fa-car"></i><span>Estacionamento gratuito no local</span></div>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;">
                  {['Reformer','Chair','Barrel', 'Cadillac', 'Casa de Banho', 'Jardim', 'Estacionamento'].map(f => (
                    <span style="background:var(--sage-light);color:var(--sage-dark);padding:4px 12px;border-radius:100px;font-size:0.72rem;font-weight:500;">{f}</span>
                  ))}
                </div>
                <a href="https://maps.app.goo.gl/ycTLgD4wPJhaeYkJA" target="_blank" class="btn btn-outline"><i class="fas fa-directions"></i> Como Chegar</a>
              </div>
            </div>

            <div class="studio-card fade-in">
              <div class="studio-img">
                <img src="https://sspark.genspark.ai/cfimages?u1=FCJKGHbO03s2Yq%2Bw4Gaiyc9hDRKmXmKyD7t5H4mHkrYvNYlt18fFVsli9e3gfxLA2h2eXEkrZ8OoP65Qnl1JghHiiUvC758DtMf5nmxpWB0uMCjjHlRu%2B%2BPywL0CvbZBp7Vd8qF0aw0JD78IhQ6U0%2BN05s7tLJy0xhBegXhtNm3MQMc23nmlvT1yxj0uQIGa9%2BYcCDfk2zp2TWUpXUB26w%3D%3D&u2=lKeg4i4UkUmhPP6e&width=2560" alt="Studio Oeiras" />
              </div>
              <div class="studio-body">
                <span class="studio-tag"><i class="fas fa-map-marker-alt"></i> Oeiras</span>
                <h3>Estúdio Oeiras</h3>
                <p>Inaugurado em 2025, o estúdio de Oeiras combina design moderno com vistas para o jardim.</p>
                <div class="studio-info">
                  <div class="studio-info-row"><i class="fas fa-map-marker-alt"></i><span>Lagoas Park Edifício 4, 2740-268 Porto Salvo</span></div>
                  <div class="studio-info-row"><i class="fas fa-phone"></i><span>+351 960 182 612</span></div>
                  <div class="studio-info-row"><i class="fas fa-envelope"></i><span>escritorio.mypilatesoeiras@gmail.com</span></div>
                  <div class="studio-info-row"><i class="fas fa-clock"></i><span>Seg–Sex: 07:00–21:00</span></div>
                  <div class="studio-info-row"><i class="fas fa-car"></i><span>Estacionamento gratuito no local</span></div>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px;">
                  {['Reformer','Chair','Barrel', 'Cadillac', 'Casa de Banho', 'Estacionamento', 'Vestiário', 'Casa de Banho', 'Jardim'].map(f => (
                    <span style="background:var(--sage-light);color:var(--sage-dark);padding:4px 12px;border-radius:100px;font-size:0.72rem;font-weight:500;">{f}</span>
                  ))}
                </div>
                <a href="https://maps.app.goo.gl/GR3Pke9vjHGB8rFg7" target="_blank" class="btn btn-outline"><i class="fas fa-directions"></i> Como Chegar</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {footer()}
      {scripts()}
    </>,
    { title: 'Os Nossos Estúdios' }
  )
})

// ── TRIAL BOOKING ─────────────────────────────────────────────────────────────
app.get('/aulas-experimentais', (c) => {
  return c.render(
    <>
      {navbar()}
      {pageHero('Aula Experimental Grátis', 'A tua primeira aula no MyPilates é completamente gratuita e sem compromisso.', 'Aula Experimental')}
      <section class="section">
        <div class="container" style="max-width:680px;">
          <div class="contact-form fade-in">
            <div class="section-center" style="margin-bottom:36px;">
              <span class="section-label">Sem custo · Sem compromisso</span>
              <h2 class="section-title" style="font-size:1.9rem;">Reserva a tua aula grátis</h2>
              <p>Preenche o formulário e a nossa equipa entrará em contacto dentro de 24h para confirmar.</p>
            </div>
            <form onsubmit="handleForm(event)">
              <div class="form-row">
                <div class="form-group">
                  <label>Nome *</label>
                  <input type="text" name="name" required placeholder="O teu nome" />
                </div>
                <div class="form-group">
                  <label>Telefone *</label>
                  <input type="tel" name="phone" required placeholder="+351 9XX XXX XXX" />
                </div>
              </div>
              <div class="form-group">
                <label>Email *</label>
                <input type="email" name="email" required placeholder="o.teu@email.com" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Estúdio</label>
                  <select name="studio">
                    <option value="">Seleciona...</option>
                    <option>Carnaxide</option>
                    <option>Oeiras</option>
                    <option>Indiferente</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Tipo de aula</label>
                  <select name="class_type">
                    <option value="">Seleciona...</option>
                    <option>Pilates</option>
                    <option>Pilates Clínico</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Tens alguma condição física que devemos saber?</label>
                <textarea name="notes" placeholder="Lesões, gravidez, condições especiais..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">
                <i class="fas fa-calendar-check"></i> Reservar Aula Grátis
              </button>
            </form>
          </div>
        </div>
      </section>
      {footer()}
      {scripts()}
    </>,
    { title: 'Aula Experimental Gratuita' }
  )
})

// ── BOOKINGS ──────────────────────────────────────────────────────────────────
app.get('/marcacoes', (c) => {
  return c.render(
    <>
      {navbar()}
      {pageHero('Marcações', 'Reserva a tua próxima aula de forma rápida e simples.', 'Marcações')}
      <section class="section">
        <div class="container" style="max-width:700px;">
          <div class="contact-form fade-in">
            <div class="section-center" style="margin-bottom:36px;">
              <span class="section-label">Reservar Aula</span>
              <h2 class="section-title" style="font-size:1.9rem;">Agenda a tua sessão</h2>
              <p>Preenche o formulário ou liga para um dos nossos studios. A nossa equipa confirmará a tua reserva.</p>
            </div>
            <form onsubmit="handleForm(event)">
              <div class="form-row">
                <div class="form-group">
                  <label>Nome *</label>
                  <input type="text" name="name" required placeholder="O teu nome completo" />
                </div>
                <div class="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" required placeholder="o.teu@email.com" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Telefone</label>
                  <input type="tel" name="phone" placeholder="+351 9XX XXX XXX" />
                </div>
                <div class="form-group">
                  <label>Estúdio *</label>
                  <select name="studio" required>
                    <option value="">Seleciona...</option>
                    <option>Carnaxide</option>
                    <option>Oeiras</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Tipo de aula *</label>
                  <select name="class_type" required>
                    <option value="">Seleciona...</option>
                    <option>Pilates</option>
                    <option>Pilates Clínico</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Data preferida</label>
                  <input type="date" name="date" />
                </div>
              </div>
              <div class="form-group">
                <label>Observações</label>
                <textarea name="notes" placeholder="Alguma preferência de horário ou instructor?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">
                <i class="fas fa-calendar-plus"></i> Confirmar Reserva
              </button>
            </form>
          </div>
        </div>
      </section>
      {footer()}
      {scripts()}
    </>,
    { title: 'Marcações' }
  )
})

// ── CONTACTS ──────────────────────────────────────────────────────────────────
app.get('/contactos', (c) => {
  return c.render(
    <>
      {navbar('contactos')}
      {pageHero('Contactos', 'Estamos aqui para ajudar. Fale connosco!', 'Contactos')}

      <section class="section">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info fade-in">
              <div class="contact-block">
                <h4><i class="fas fa-map-marker-alt text-sage" style="margin-right:10px;"></i>Estúdio Carnaxide</h4>
                <p><i class="fas fa-location-dot"></i> Av. Tomás Ribeiro 43, Piso 0 Sala G, 2790-221 Carnaxide</p>
                <p><i class="fas fa-phone"></i> <a href="tel:+351214000100">+351 960 046 395</a></p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:carnaxide@mypilates.pt">ecritorio.mypilates@gmail.com</a></p>
                <p><i class="fas fa-clock"></i> Seg–Sex: 07:00–21:00 · Sáb: 08:00–13:00</p>
              </div>

              <div class="contact-block">
                <h4><i class="fas fa-map-marker-alt text-sage" style="margin-right:10px;"></i>Estúdio Oeiras</h4>
                <p><i class="fas fa-location-dot"></i> Lagoas Park Edifíco 4, 2740-268 Porto Salvo</p>
                <p><i class="fas fa-phone"></i> <a href="tel:+351214000200">+351 960 182 612</a></p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:oeiras@mypilates.pt">escritorio.mypilatesoeiras@gmail.com</a></p>
                <p><i class="fas fa-clock"></i> Seg–Sex: 07:00–21:00</p>
              </div>

              <div class="contact-block">
                <h4><i class="fas fa-headset text-sage" style="margin-right:10px;"></i>Geral</h4>
                <p><i class="fas fa-envelope"></i> <a href="mailto:geral@mypilates.pt">geral.mypilates@gmail.com</a></p>
                <p><i class="fas fa-globe"></i> www.mypilates.pt</p>
              </div>

              <div class="contact-block">
                <h4><i class="fas fa-share-nodes text-sage" style="margin-right:10px;"></i>Redes Sociais</h4>
                <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:12px;">
                  {[
                    { icon: 'fab fa-instagram', label: '@mypilates.pt', href: '#' },
                    { icon: 'fab fa-facebook', label: 'MyPilates', href: '#' },
                  ].map(s => (
                    <a href={s.href} style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:var(--charcoal);background:var(--sand);padding:8px 16px;border-radius:100px;">
                      <i class={s.icon} style="color:var(--sage-dark);"></i> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div class="contact-form fade-in">
              <h3 style="font-family:var(--font-serif);font-size:1.7rem;margin-bottom:8px;">Envia-nos uma mensagem</h3>
              <p style="margin-bottom:28px;font-size:0.9rem;">Respondemos em menos de 24 horas nos dias úteis.</p>
              <form onsubmit="handleForm(event)">
                <div class="form-row">
                  <div class="form-group">
                    <label>Nome *</label>
                    <input type="text" name="name" required placeholder="O teu nome" />
                  </div>
                  <div class="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required placeholder="o.teu@email.com" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Telefone</label>
                    <input type="tel" name="phone" placeholder="+351 9XX XXX XXX" />
                  </div>
                  <div class="form-group">
                    <label>Assunto</label>
                    <select name="subject">
                      <option value="">Seleciona...</option>
                      <option>Informações sobre aulas</option>
                      <option>Preços e planos</option>
                      <option>Marcação de aula</option>
                      <option>Aula experimental</option>
                      <option>Parcerias empresariais</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label>Mensagem *</label>
                  <textarea name="message" required placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">
                  <i class="fas fa-paper-plane"></i> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {footer()}
      {scripts()}
    </>,
    { title: 'Contactos' }
  )
})

// ── PRIVACY ───────────────────────────────────────────────────────────────────
app.get('/privacidade', (c) => {
  return c.render(
    <>
      {navbar()}
      {pageHero('Política de Privacidade', 'Última atualização: Janeiro de 2025', 'Privacidade')}
      <section class="section">
        <div class="container">
          <div class="prose-content fade-in">
            <p>A <strong>MyPilates, Lda.</strong> (doravante "MyPilates") compromete-se a proteger a privacidade e os dados pessoais dos seus clientes, utilizadores e visitantes, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD – Regulamento UE 2016/679).</p>
            <h2>1. Responsável pelo Tratamento</h2>
            <p><strong>MyPilates, Lda.</strong><br />NIF: 123 456 789<br />Rua das Flores, 45 · 2790-078 Carnaxide, Portugal<br />Email: privacidade@mypilates.pt</p>
            <h2>2. Dados Recolhidos</h2>
            <p>Recolhemos os seguintes dados pessoais:</p>
            <ul>
              <li>Dados de identificação: nome, data de nascimento, número de identificação civil</li>
              <li>Dados de contacto: email, número de telefone, morada</li>
              <li>Dados de saúde (apenas quando necessário para adequação das aulas): condições físicas relevantes, lesões, estado de gravidez</li>
              <li>Dados de pagamento: processados de forma segura por terceiros (não armazenamos dados bancários)</li>
              <li>Dados de utilização do website: através de cookies (ver política de cookies)</li>
            </ul>
            <h2>3. Finalidades do Tratamento</h2>
            <p>Os seus dados são utilizados para:</p>
            <ul>
              <li>Gestão de inscrições, marcações e frequência de aulas</li>
              <li>Faturação e processamento de pagamentos</li>
              <li>Comunicações relacionadas com os serviços contratados</li>
              <li>Envio de newsletters e promoções (apenas com consentimento)</li>
              <li>Cumprimento de obrigações legais</li>
              <li>Melhoria dos nossos serviços e website</li>
            </ul>
            <h2>4. Base Legal</h2>
            <p>O tratamento dos seus dados baseia-se em: execução de contrato, cumprimento de obrigação legal, consentimento explícito (para dados de saúde e marketing) e interesse legítimo.</p>
            <h2>5. Partilha de Dados</h2>
            <p>Os seus dados podem ser partilhados com:</p>
            <ul>
              <li>Prestadores de serviços de processamento de pagamentos</li>
              <li>Plataformas de gestão de marcações (com garantias de proteção adequadas)</li>
              <li>Autoridades competentes quando legalmente exigido</li>
            </ul>
            <p>Nunca vendemos nem cedemos os seus dados a terceiros para fins comerciais.</p>
            <h2>6. Conservação dos Dados</h2>
            <p>Os dados são conservados durante o período necessário para as finalidades descritas, ou pelo prazo legalmente exigido. Dados de clientes inativos são eliminados após 5 anos. Dados de saúde são eliminados após cessação da relação contratual, salvo obrigação legal.</p>
            <h2>7. Os Seus Direitos</h2>
            <p>Nos termos do RGPD, tem direito a:</p>
            <ul>
              <li><strong>Acesso:</strong> solicitar cópia dos seus dados pessoais</li>
              <li><strong>Retificação:</strong> corrigir dados incorretos ou incompletos</li>
              <li><strong>Apagamento:</strong> solicitar a eliminação dos seus dados ("direito ao esquecimento")</li>
              <li><strong>Limitação:</strong> restringir o tratamento dos seus dados</li>
              <li><strong>Portabilidade:</strong> receber os seus dados em formato estruturado</li>
              <li><strong>Oposição:</strong> opor-se ao tratamento para fins de marketing direto</li>
            </ul>
            <p>Para exercer estes direitos, contacte-nos por email: <a href="mailto:privacidade@mypilates.pt">privacidade@mypilates.pt</a></p>
            <h2>8. Cookies</h2>
            <p>O nosso website utiliza cookies essenciais para o seu funcionamento e cookies analíticos (com consentimento) para melhorar a experiência do utilizador. Pode gerir as preferências de cookies através das definições do seu browser.</p>
            <h2>9. Segurança</h2>
            <p>Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, alteração, divulgação ou destruição.</p>
            <h2>10. Reclamações</h2>
            <p>Tem o direito de apresentar reclamação à autoridade supervisora nacional: <strong>CNPD – Comissão Nacional de Proteção de Dados</strong> (www.cnpd.pt).</p>
            <h2>11. Alterações a esta Política</h2>
            <p>Podemos atualizar esta política periodicamente. Notificaremos os clientes registados sobre alterações significativas. A versão mais recente estará sempre disponível nesta página.</p>
            <p style="margin-top:2rem;padding:20px;background:var(--sand);border-radius:var(--radius);font-size:0.88rem;">
              Para qualquer questão sobre privacidade, contacte o nosso Responsável pela Proteção de Dados:<br />
              <strong>Email:</strong> privacidade@mypilates.pt<br />
              <strong>Morada:</strong> Rua das Flores, 45 · 2790-078 Carnaxide
            </p>
          </div>
        </div>
      </section>
      {footer()}
      {scripts()}
    </>,
    { title: 'Política de Privacidade' }
  )
})

// ── TERMS ─────────────────────────────────────────────────────────────────────
app.get('/termos', (c) => {
  return c.render(
    <>
      {navbar()}
      {pageHero('Termos e Condições', 'Condições de utilização dos serviços MyPilates.', 'Termos')}
      <section class="section">
        <div class="container">
          <div class="prose-content fade-in">
            <p>Os presentes Termos e Condições regulam a utilização dos serviços prestados pela <strong>MyPilates, Lda.</strong> Ao inscrever-se ou frequentar as nossas aulas, aceita os presentes termos.</p>
            <h2>1. Inscrição e Contrato</h2>
            <p>A inscrição é realizada online ou presencialmente, mediante preenchimento do formulário e pagamento da primeira mensalidade/pack. O contrato é celebrado entre o cliente e MyPilates, Lda., e rege-se pelos presentes termos.</p>
            <h2>2. Planos e Pagamentos</h2>
            <ul>
              <li>Os planos mensais são renovados automaticamente no início de cada mês</li>
              <li>O pagamento é processado no 1.º dia útil de cada mês</li>
              <li>Em caso de falha de pagamento, o acesso é suspenso após 5 dias</li>
              <li>Os preços podem ser atualizados com aviso prévio de 30 dias</li>
            </ul>
            <h2>3. Cancelamentos e Reembolsos</h2>
            <ul>
              <li>Cancelamento de plano mensal: aviso prévio de 30 dias</li>
              <li>Cancelamento de aula marcada: até 12h antes sem custo; após esse prazo, a aula é contabilizada</li>
              <li>Packs de sessões não são reembolsáveis, mas são transferíveis para outro cliente</li>
              <li>Em caso de lesão documentada, estuda-se caso a caso</li>
            </ul>
            <h2>4. Saúde e Responsabilidade</h2>
            <p>O cliente declara estar em condições físicas adequadas para a prática de Pilates. Deve informar o instrutor de qualquer condição médica, lesão ou gravidez. O MyPilates não é responsável por lesões resultantes de informação incorreta fornecida pelo cliente.</p>
            <h2>5. Regras do Studio</h2>
            <ul>
              <li>Pontualidade: por cortesia, chegar 5 minutos antes da aula</li>
              <li>Higiene: meias antiderrapantes obrigatórias no equipamento</li>
              <li>Telemóveis em modo silencioso durante as aulas</li>
              <li>Respeito pelos instrutores e demais clientes</li>
              <li>Não é permitida a entrada após o início da aula (por segurança e respeito)</li>
            </ul>
            <h2>6. Proteção de Dados</h2>
            <p>O tratamento de dados pessoais é regulado pela nossa <a href="/privacidade">Política de Privacidade</a>.</p>
            <h2>7. Propriedade Intelectual</h2>
            <p>Todo o conteúdo deste website — textos, imagens, logótipo, design — é propriedade exclusiva do MyPilates e não pode ser reproduzido sem autorização expressa.</p>
            <h2>8. Legislação Aplicável</h2>
            <p>Os presentes termos são regidos pela lei portuguesa. Para resolução de litígios, as partes elegem o foro da comarca de Lisboa, com expressa renúncia a qualquer outro.</p>
            <p style="margin-top:2rem;padding:20px;background:var(--sand);border-radius:var(--radius);font-size:0.88rem;">
              Dúvidas? Contacte-nos em <a href="mailto:geral@mypilates.pt">geral@mypilates.pt</a>
            </p>
          </div>
        </div>
      </section>
      {footer()}
      {scripts()}
    </>,
    { title: 'Termos e Condições' }
  )
})

// ── 404 ───────────────────────────────────────────────────────────────────────
app.notFound((c) => {
  return c.render(
    <>
      {navbar()}
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 20px 80px;">
        <div>
          <div style="font-family:var(--font-serif);font-size:8rem;line-height:1;color:var(--sage-light);font-weight:300;">404</div>
          <h2 style="margin-bottom:1rem;">Página não encontrada</h2>
          <p style="margin-bottom:2rem;">A página que procuras não existe ou foi movida.</p>
          <a href="/" class="btn btn-primary"><i class="fas fa-home"></i> Voltar ao Início</a>
        </div>
      </div>
      {footer()}
      {scripts()}
    </>,
    { title: 'Página não encontrada' }
  )
})

// ── SHARED COMPONENTS ─────────────────────────────────────────────────────────

function scripts() {
  return (
    <script dangerouslySetInnerHTML={{__html: `
      // Navbar scroll
      const nav = document.querySelector('.navbar');
      window.addEventListener('scroll', () => {
        nav?.classList.toggle('scrolled', window.scrollY > 60);
      });

      // Mobile menu
      const hamburger = document.getElementById('hamburger');
      const mobileNav = document.getElementById('mobile-nav');
      const closeBtn = document.getElementById('mobile-close');
      hamburger?.addEventListener('click', () => mobileNav?.classList.add('open'));
      closeBtn?.addEventListener('click', () => mobileNav?.classList.remove('open'));
      document.querySelectorAll('#mobile-nav a').forEach(a => {
        a.addEventListener('click', () => mobileNav?.classList.remove('open'));
      });

      // Fade in observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.12 });
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

      // Back to top
      const btt = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        btt?.classList.toggle('visible', window.scrollY > 400);
      });
      btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

      // Schedule tabs
      window.showTab = (id, btn) => {
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(id)?.classList.add('active');
        btn.classList.add('active');
      };

      // FAQ accordion
      window.toggleFaq = (btn) => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      };

      // Form handler
      window.handleForm = (e) => {
        e.preventDefault();
        const toast = document.getElementById('toast');
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 4000);
        }
        e.target.reset();
      };
    `}} />
  )
}

export default app

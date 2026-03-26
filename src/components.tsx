export function navbar(active?: string) {
  const links = [
    { href: '/sobre-nos', label: 'Sobre Nós', key: 'sobre-nos' },
    { href: '/aulas', label: 'Aulas', key: 'aulas' },
    { href: '/horarios', label: 'Horários', key: 'horarios' },
    { href: '/precos', label: 'Preços', key: 'precos' },
    { href: '/studios', label: 'Studios', key: 'studios' },
    { href: '/contactos', label: 'Contactos', key: 'contactos' },
  ]

  return (
    <>
      <nav class="navbar" id="navbar">
        <div class="container navbar-inner">
          <a href="/" class="navbar-brand">MyPilates</a>
          <ul class="navbar-nav">
            {links.map(l => (
              <li><a href={l.href} class={active === l.key ? 'active' : ''}>{l.label}</a></li>
            ))}
            <li><a href="/marcacoes" class="navbar-cta">Reservar</a></li>
          </ul>
          <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div class="mobile-nav" id="mobile-nav">
        <button class="mobile-close" id="mobile-close"><i class="fas fa-times"></i></button>
        <a href="/">Início</a>
        {links.map(l => <a href={l.href}>{l.label}</a>)}
        <a href="/marcacoes" class="btn btn-primary">Reservar Aula</a>
      </div>
    </>
  )
}

export function footer() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="footer-brand">MyPilates</div>
              <p class="footer-tagline">Transformamos corpos e mentes através do movimento inteligente. Dois studios na Área Metropolitana de Lisboa.</p>
              <div class="footer-social">
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
            <div class="footer-col">
              <h5>Navegação</h5>
              <nav class="footer-links">
                <a href="/">Início</a>
                <a href="/sobre-nos">Sobre Nós</a>
                <a href="/aulas">Aulas</a>
                <a href="/horarios">Horários</a>
                <a href="/precos">Preços</a>
                <a href="/studios">Studios</a>
              </nav>
            </div>
            <div class="footer-col">
              <h5>Serviços</h5>
              <nav class="footer-links">
                <a href="/aulas">Reformer Pilates</a>
                <a href="/aulas">Mat Pilates</a>
                <a href="/aulas">Pilates Clínico</a>
                <a href="/aulas">Pilates Maternal</a>
                <a href="/marcacoes">Sessões Privadas</a>
                <a href="/aulas-experimentais">Aula Experimental</a>
              </nav>
            </div>
            <div class="footer-col">
              <h5>Contactos</h5>
              <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><span>Carnaxide: Rua das Flores, 45</span></div>
              <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><span>Oeiras: Av. República, 120</span></div>
              <div class="footer-contact-item"><i class="fas fa-phone"></i><span>+351 214 000 100</span></div>
              <div class="footer-contact-item"><i class="fas fa-envelope"></i><span>geral@mypilates.pt</span></div>
            </div>
          </div>
          <div class="footer-bottom">
            <span class="footer-copy">© 2025 MyPilates, Lda. Todos os direitos reservados.</span>
            <nav class="footer-legal">
              <a href="/privacidade">Política de Privacidade</a>
              <a href="/termos">Termos e Condições</a>
              <a href="/contactos">Contactos</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button class="back-to-top" id="back-to-top" aria-label="Voltar ao topo">
        <i class="fas fa-chevron-up"></i>
      </button>

      {/* Toast notification */}
      <div class="toast" id="toast">
        <i class="fas fa-check-circle"></i>
        <span>Mensagem enviada! Entraremos em contacto em breve.</span>
      </div>
    </>
  )
}

export function pageHero(title: string, desc: string, breadcrumb: string) {
  return (
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <a href="/">Início</a>
          <i class="fas fa-chevron-right" style="font-size:0.55rem;"></i>
          <span>{breadcrumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

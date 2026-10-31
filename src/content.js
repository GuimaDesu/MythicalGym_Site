/**
 * Conteúdo do site — MOCKUP.
 * Textos, preços e contactos ilustrativos. Substitui pelos dados reais da
 * Mythical Gym.
 */

export const NAV_LINKS = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Método', href: '#metodo' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contacto', href: '#contacto' },
]

export const HERO = {
  phrase: 'A força é um ritual.',
  disciplines: ['Força', 'Hipertrofia', 'Recuperação'],
  place: 'Lisboa · Portugal',
  year: 'MMXXVI',
}

export const MANIFESTO = {
  index: '01',
  label: 'Manifesto',
  text: 'Não treinas para te tornares maior. Treinas para te tornares inabalável.',
  note: 'Constância acima de intensidade. Técnica acima de peso.',
}

export const METHOD = {
  index: '02',
  label: 'O método',
  title: 'Quatro passos. Zero adivinhação.',
  steps: [
    { title: 'Avaliação', text: 'Medimos força, mobilidade e histórico antes de tocar na barra.' },
    { title: 'Força', text: 'Barra livre, progressão carga-a-carga, técnica acima do número.' },
    { title: 'Volume', text: 'Hipertrofia com controlo: tempo sob tensão e descanso calculado.' },
    { title: 'Recuperação', text: 'O músculo não cresce no treino. Cresce no tempo que dás depois.' },
  ],
}

export const SPACE = {
  index: '03',
  label: 'O espaço',
  title: 'Uma sala feita para treinar a sério.',
  caption: 'Mythical Gym · Lisboa',
  note: 'Piso técnico, luz controlada, silêncio suficiente para ouvir a tua respiração.',
  stats: [
    { value: 1200, suffix: ' m²', label: 'Sala de treino' },
    { value: 42, suffix: '', label: 'Estações de força' },
    { value: 6, suffix: '', label: 'Racks olímpicos' },
    { value: 18, suffix: 'h', label: 'Aberto todos os dias' },
  ],
}

export const MARQUEE = ['Força', 'Constância', 'Ritual', 'Disciplina', 'Recuperação', 'Ofício']

export const PLANS = {
  index: '04',
  label: 'Planos',
  title: 'Escolhe o teu ritmo.',
  note: 'Valores ilustrativos. Sem fidelização.',
  plans: [
    {
      name: 'Base',
      price: '29',
      period: '/mês',
      summary: 'Acesso livre à sala.',
      features: ['Horário alargado', 'App com planos-base', 'Aulas de mobilidade'],
      featured: false,
    },
    {
      name: 'Ritual',
      price: '49',
      period: '/mês',
      summary: 'O plano completo, com plano escrito.',
      features: ['Tudo do Base', 'Avaliação e plano trimestral', 'Reavaliação a cada 8 semanas', 'Sessão de técnica mensal'],
      featured: true,
    },
    {
      name: 'Mítico',
      price: '89',
      period: '/mês',
      summary: 'Como um atleta da casa.',
      features: ['Tudo do Ritual', 'Coach dedicado', '2 sessões pessoais por mês', 'Sala de recuperação'],
      featured: false,
    },
  ],
  cta: 'Agendar visita',
}

export const CONTACT = {
  index: '05',
  label: 'Contacto',
  title: 'Vem conhecer o espaço.',
  lede: 'Primeira visita gratuita, sem compromisso.',
  cta: 'Agendar visita gratuita',
  details: [
    { label: 'Morada', value: 'Rua da Prata 128, 1100-421 Lisboa' },
    { label: 'Horário', value: 'Seg a Sex · 05:30 – 24:00\nSáb e Dom · 08:00 – 22:00' },
    { label: 'Email', value: 'ola@mythicalgym.pt', href: 'mailto:ola@mythicalgym.pt' },
    { label: 'Telefone', value: '+351 210 000 000', href: 'tel:+351210000000' },
  ],
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Google Maps', href: '#' },
    { label: 'Termos', href: '#' },
  ],
}

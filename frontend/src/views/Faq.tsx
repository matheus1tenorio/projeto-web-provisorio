import { faqSections } from '../data/faq';

export default function Faq() {
  return (
    <section className="view active" id="faq">
      <div className="page-heading">
        <div>
          <p className="eyebrow">AJUDA</p>
          <h1>FAQ — Perguntas Frequentes</h1>
          <p className="subtitle">Tudo o que você precisa saber sobre o Apadrinhamento ADS.</p>
        </div>
      </div>

      {faqSections.map((section) => (
        <section key={section.title} className="card" style={{ marginBottom: 18 }}>
          <h2 style={{ font: '600 16px Outfit, sans-serif', margin: '0 0 14px' }}>{section.title}</h2>
          <div style={{ display: 'grid', gap: 8 }}>
            {section.items.map((item) => (
              <details
                key={item.question}
                style={{
                  border: '1px solid var(--border, #e6e6e6)',
                  borderRadius: 10,
                  padding: '10px 14px',
                }}
              >
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 14 }}>
                  {item.question}
                </summary>
                <p style={{ fontSize: 13, marginTop: 8, marginBottom: 2, color: 'var(--muted, #666)' }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
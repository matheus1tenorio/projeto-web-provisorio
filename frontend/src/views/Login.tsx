import { useToast } from '../context/ToastContext';
import type { ViewId } from '../types';

interface LoginProps {
  onNavigate: (view: ViewId) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const { showToast } = useToast();

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'var(--canvas)' }}>
      <form
        className="card"
        style={{ width: 'min(400px, 92vw)', padding: 32 }}
        onSubmit={(e) => {
          e.preventDefault();
          showToast('Login realizado com sucesso!');
          onNavigate('inicio');
        }}
      >
        <div className="logo" style={{ marginBottom: 26 }}>
          <span className="logo-mark">a</span>
          <span style={{ color: 'var(--ink)' }}>
            apadrinha<span style={{ color: 'var(--green)' }}>ADS</span>
          </span>
        </div>

        <h1 style={{ font: '600 22px Outfit, sans-serif', margin: '0 0 6px' }}>Bem-vinda de volta</h1>
        <p className="subtitle" style={{ margin: '0 0 22px' }}>
          Entre com sua conta institucional para continuar.
        </p>

        <label style={{ display: 'grid', gap: 6, fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
          E-mail institucional
          <input type="email" placeholder="seunome@discente.ifpe.edu.br" required />
        </label>
        <label style={{ display: 'grid', gap: 6, fontSize: 12, fontWeight: 700, marginBottom: 20 }}>
          Senha
          <input type="password" placeholder="••••••••" required />
        </label>

        <button className="primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
          Entrar
        </button>

        <p style={{ textAlign: 'center', fontSize: 13, marginTop: 18 }}>
          Ainda não tem conta?{' '}
          <button
            type="button"
            className="text-button"
            style={{ display: 'inline', padding: 0 }}
            onClick={() => onNavigate('cadastro')}
          >
            Cadastre-se
          </button>
        </p>
      </form>
    </div>
  );
}
import PageTitle from "../../components/PageTitle";
import './style.css'

export default function Login() {

    return (
        <div>
            <PageTitle title='Login' />
            <main className="auth-layout">
                <section className="brand-panel">
                    <div className="brand-mark">
                        <img src="../assets/obrigadov2.png" alt="Logo TechStart" />
                    </div>
                    <p className="eyebrow">Plataforma de duelos de programacao</p>
                    <h1>TechStart</h1>
                    <p className="brand-copy">Treine, dispute rounds, acompanhe ranking e receba feedback automatizado sobre suas solucoes.</p>
                    <div className="brand-badges">
                        <span>Duelo em rounds</span>
                        <span>Ranking</span>
                        <span>Ajuda externa</span>
                    </div>
                </section>

                <section className="auth-card">
                    <div className="auth-header">
                        <p className="section-label">Acesso</p>
                        <h2>Entre na sua conta</h2>
                        <p>Use login, cadastre-se ou explore como convidado.</p>
                    </div>

                    <div className="top-actions">
                        <button type="button" className="secondary-button" id="focus-login">Login</button>
                        <a className="secondary-button" href="./pages/cadastro/cadastro.html">Cadastre-se</a>
                        <button type="button" className="ghost-button" id="guest-login">Entrar como convidado</button>
                    </div>

                    <form id="login-form" className="auth-form">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="email" id="usuario" placeholder="Digite seu email" required />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite sua senha" required />

                        <button type="submit" className="primary-button">Entrar</button>
                    </form>

                    <p id="login-feedback" className="feedback" aria-live="polite"></p>

                    <div className="auth-links">
                        <a href="./pages/recuperar/recuperar.html">Esqueci minha senha</a>
                        <p>Novo por aqui? <a href="./pages/cadastro/cadastro.html">Faca seu cadastro</a></p>
                    </div>
                </section>
            </main>

            <div id="success-popup" className="popup hidden" role="dialog" aria-modal="true" aria-labelledby="popup-title">
                <div className="popup-card">
                    <p className="section-label">Sucesso</p>
                    <h3 id="popup-title">Login efetuado com sucesso</h3>
                    <p>Voce sera redirecionado para a tela inicial do usuario.</p>
                    <button type="button" className="primary-button" id="popup-confirm">Continuar</button>
                </div>
            </div>
        </div>
    );
}

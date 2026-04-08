import { Link } from "react-router-dom";

export default function Navegacao() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link to="/jogaroffline">
                            Jogar Offline
                        </Link>
                    </li>

                    <li>
                        <Link to="/cadastro">
                            Cadastro
                        </Link>
                    </li>

                    <li>
                        <Link to="/recuperarsenha">
                            Recuperar senha
                        </Link>
                    </li>

                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
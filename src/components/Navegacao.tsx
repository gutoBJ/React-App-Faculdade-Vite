import { Link } from "react-router-dom";

export default function Navegacao() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/jogaroffline">
                            Jogar Offline
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
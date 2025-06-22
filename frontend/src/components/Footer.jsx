
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="newsletter">
                    <h3>Suscríbete a nuestro Newsletter</h3>
                    <input type="email" placeholder="Tu correo electrónico" />
                    <button>Suscribirse</button>
                </div>
                <div className="socials">
                    <a href='https://instagram.com' target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href='https://youtube.com' target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
                <div className="contact">
                    <p>Correo: camanchacaoficial@gmail.com</p>
                    <p>&copy; 2025 Camanchaca Encuadernaciones</p>
                </div>
            </div>
        </footer>
    );
};

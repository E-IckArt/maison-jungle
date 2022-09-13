import logo from '../assets/logo.png';
import '../styles/Banner.css';

const Banner = () => {
    const title = 'La Maison Jungle';
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    const recommendation = isSpring ? (
        <div>C'est le printemps, rempotez 🌱</div>
    ) : (
        <div>Ce n'est pas le moment de rempoter</div>
    );

    return (
        <div className="lmj-banner">
            <div className="lmj-banner-row">
                <div className="lmj-banner-brand">
                    <img
                        src={logo}
                        alt="La maison jungle"
                        className="lmj-logo"
                    />
                    <h1 className="lmj-title">{title}</h1>
                </div>
                {recommendation}
            </div>
        </div>
    );
};

export default Banner;

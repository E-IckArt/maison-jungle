import { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        // si la valeur saisie n'inclue pas '@'
        if (!inputValue.includes('@')) {
            alert(
                `Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`
            );
        }
    };

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre email :</div>
            <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="tarzan@jungle.fr"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    );
};

export default Footer;

import React from 'react';
import './contact.css'; 

const ContactPage = () => {
    return (
        <div className="contact-page">
            <header>
                <h1>Contact US</h1>
            </header>

            <main>
                <section id="contact-info">
                    <h2>Telefon orqali</h2>
                    <p>Bizning telefon raqamlarimiz orqali tezkor va samarali aloqada bo'lishingiz mumkin:</p>
                    <ul>
                        <li><strong>Ofis telefon:</strong> +998 71 234 56 78 (Dushanba - Juma, 09:00 - 18:00)</li>
                    </ul>

                    <h2>Elektron pochta</h2>
                    <p>Agar siz elektron pochta orqali bog'lanishni afzal ko'rsangiz:</p>
                    <ul>
                        <li><strong>Umumiy savollar:</strong> <a href="#x">info@misol.com</a></li>
                    </ul>

                    <h2>Manzil</h2>
                    <p>Biz joylashgan manzil:</p>
                    <address>
                        Misol Ko'chasi, 12-uy, Toshkent, O'zbekiston<br />
                    </address>

                    <h2>Ijtimoiy tarmoqlar</h2>
                    <p>Ijtimoiy tarmoqlarda bizni izlang:</p>
                    <ul>
                        <li><a href="https://facebook.com/misol" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com/misol" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com/company/misol" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://twitter.com/misol" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>

                    <h2>Contact</h2>
                    <form action="https://example.com/submit-form" method="POST">
                        <label htmlFor="name">Ismingiz:</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="email">Elektron pochta:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="phone">Telefon raqami:</label>
                        <input type="tel" id="phone" name="phone" />
                        
                        <label htmlFor="message">Xabar:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                        
                        <button type="submit">Send</button>
                    </form>

                    <h2>Ish vaqtlari</h2>
                    <p>Bizning o'quv markaz quyidagi ish vaqtlari bo'yicha faoliyat ko'rsatadi:</p>
                    <ul>
                        <li>Dushanba - Shanba: 09:00 - 18:00</li>
                        <li>Yakshanba: Dam olish kuni</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;

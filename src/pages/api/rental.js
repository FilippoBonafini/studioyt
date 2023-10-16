const nodemailer = require("nodemailer")

export default async function rental(req, res) {

    const { nome, email, telefono, messaggio, carrello, data } = req.body

    const html = `
    <p>Nome: ${nome}</p>
    <p>Email: ${email}</p>
    <p>Telefono: ${telefono}</p>
    <p>Messaggio: ${messaggio}</p>
    <p>Data: ${data}</p>
    <p>Carrello:</p>
    <ul>
        ${carrello.map(item => `
            <li>
                <p>Nome: ${item.name}</p>
                <p>Prezzo: ${item.price}€</p>
                <p>Quantità: ${item.quantity}</p>
            </li>
            <hr>
        `).join('')}
    </ul>
`;

    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: "filippo.bonafini@outlook.com",
            pass: "Quarantatresedici99!",
        },
    });

    try {
        const info = await transporter.sendMail({
            from: 'Richiesta preventivo <filippo.bonafini@outlook.com>',
            to: 'filippo.bonafini@outlook.com',
            subject: 'Richiesta Preventivo!',
            html: html,
            secure: true,
            port: 587,
            timeout: 5000,
        });

        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.error('Errore nell invio:', error);
        return res.status(400).json({ message: "error" });
    }

}
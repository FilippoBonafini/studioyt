const nodemailer = require("nodemailer")



export default async function contact(req, res) {

    const { nome, email, compagnia, telefono, messaggio, budget } = req.body

    const html = `
             <p>Nome: ${nome}</p>
             <p>Email: ${email}</p>
             <p>Messaggio: ${messaggio}</p>
             <p>Compagnia: ${compagnia}</p>
             <p>Telefono: ${telefono}</p>
             <p>Budget: ${budget}</p>
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
        const info = transporter.sendMail({
            from: 'NewContact <filippo.bonafini@outlook.com>',
            to: 'filippo.bonafini@outlook.com',
            subject: 'Un nuovo contatto!',
            html: html,
            timeout: 5000,
        })
        console.log('email inviata', info)
        return res.status(200).json({ message: "success" })
    } catch (error) {
        console.log('errore nell invio', error)
        return res.status(400).json({ message: "error" })
    }

}

import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
    const { nome, email, compagnia, telefono, messaggio, budget } = req.body

    const user = "contact.info.tulpa@gmail.com"
    const pass = "Quarantatresedici99!"

    const clientId = '714986042263-buak0uth2qi1s33hp39q4hp4t7a2jflr.apps.googleusercontent.com'

    const clientSeecret = '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'

    const refreshToken = '1//04-hzXX2gGD54CgYIARAAGAQSNwF-L9Ir911_o_a7UneHmqtYzd2DlnnKuR7hzSbcLybHUQmt0FGbmzZwAIR2ZVOjpPoeh3M331s'

    const redirectUrl = 'https://developers.google.com/oauthplayground'


    const oAuth2Client = new GOOGLE_FONT_PROVIDER.auth.OAuth2(
        clientId,
        clientSeecret,
        redirectUrl
    )

    oAuth2Client.setCredentiaals({ refresh_token: refreshToken })

    // const transporter = nodemailer.createTransport({

    //     host: "smtp.gmail.com",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: user,
    //         pass: pass,
    //     }
    // });

    // try {

    //     const mail = await transporter.sendMail({
    //         from: user,
    //         to: "filippo.bonafini@outlook.com",
    //         replyTo: email,
    //         subject: "Nuove informazioni di contatto",
    //         html: `
    //         <p>Nome: ${nome}</p>
    //         <p>Email: ${email}</p>
    //         <p>Messaggio: ${messaggio}</p>
    //         <p>Compagnia: ${compagnia}</p>
    //         <p>Telefono: ${telefono}</p>
    //         <p>Budget: ${budget}</p>
    //         `
    //     })

    //     return res.status(200).json({ message: "success" })
    // } catch (error) {
    //     res.status(500).json({
    //         message: "invio della mail non riuscito."
    //     })
    // }
}


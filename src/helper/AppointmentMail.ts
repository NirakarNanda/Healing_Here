import { transporter } from '@/src/config/mailer';


export const sendMail = async ({ name, phone, date, services, problem, message, policy, email }: any) => {
    try {
        console.log("email", email)
        const mailOption = {
            from: `${name} <${email}>`,
            to: 'healinghere18@gmail.com',
            subject: `New Appointment Request for ${problem}`,
            html: `
                <h2>Here is your new booking appointment.</h2>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Phone: ${phone}</li>
                    <li>Email: ${email}</li>
                    <li>Date: ${date}</li>
                    <li>Services: ${services}</li>
                    <li>Problem: ${problem}</li>
                    <li>Policy: ${policy}</li>
                </ul>

                <p>Here is the message: <br> ${message} </p>
            `
        };

        try {
            const info = await transporter.sendMail(mailOption);
            return info.accepted;
        } 
        catch (error) {
            console.log(error)   
            return null
        }
    } 
    catch (error: any) {
        console.log('Could not send email.')
        console.log(error.message)
    }
}
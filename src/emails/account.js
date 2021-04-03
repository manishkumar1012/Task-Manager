const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "manishkumar67248@gmail.com",
        pass: "manishk1299e",
    },
});

const sendMail = (mailOptions) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Sent! ", info.response);
    });
};

const sendWelcomeMail = () => {
    const mailOptions = {
        from: "manishkumar67248@gmail.com",
        to: "mainhkumar_11710465@nitkkr.ac.in",
        subject: "Welcome to my site",
        text: "This mail was sent for testing purpose.",
    };
    sendMail(mailOptions);
};

const sendCancellationMail = () => {
    const mailOptions = {
        from: "manishkumar67248@gmail.com",
        to: "mainhkumar_11710465@nitkkr.ac.in",
        subject: "Sad to see you go",
        text: "This mail was sent for testing purpose.",
    };
    sendMail(mailOptions);
};

module.exports = {
    sendWelcomeMail,
    sendCancellationMail,
};

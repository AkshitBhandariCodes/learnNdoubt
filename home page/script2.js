const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Serve your HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.html'));
});

// Handle form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'manasnegi1403@gmail.com',  // Your Gmail address
                pass: 'jtyu fbjv nrzm eavb'  // Use app-specific password
            },
            logger: true,  // Enable logging
            debug: true    // Enable debug mode
        });

        const mailOptions = {
            from: 'manasnegi1403@gmail.com',
            to: email,
            subject: 'Login Confirmation',
            text: `You have successfully logged in with the email: ${email}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error:', error);
                res.send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Login successful. Confirmation email sent!');
            }
        });
    } else {
        res.send('Invalid login credentials');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useInput } from './hooks/inputHook'
import axios from 'axios'


const Contact = (props) => {

    const { value: nameUser, bind: bindName, reset: resetName } = useInput('');
    const { value: emailUser, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: subject, bind: bindSubject, reset: resetSubject } = useInput('');
    const { value: message, bind: bindMessage, reset: resetMessage } = useInput('');

    const handleFormSubmit = e => {
        e.preventDefault()
        sendMail()
        resetName()
        resetEmail()
        resetSubject()
        resetMessage()
    }

    const sendMail = () => {
        axios.post('https://server-myportfolio.herokuapp.com/send', {
            name: nameUser,
            email: emailUser,
            subject: subject,
            message: message
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <section id="contact">

            <div className="row section-head">

                <div className="two columns header-col">

                    <h1><span>Contáctame.</span></h1>
                </div>
                <div className="ten columns">

                    <h2> Aqui puedes contactar conmigo: </h2>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" {...bindName} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" {...bindEmail} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Asunto</Form.Label>
                            <Form.Control type="text" name="subject" {...bindSubject} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control type="text" name="message" {...bindMessage} />
                        </Form.Group>

                        <Button variant="dark" type="submit">Enviar</Button>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
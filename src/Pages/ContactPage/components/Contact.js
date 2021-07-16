import React, {useState} from 'react'

import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [disable, setDisable] = useState(false);

    function sendEmail(e){
        e.preventDefault();
        setDisable(true)

        if(name.length && email.length && message.length){
            emailjs.sendForm('service_nlm249n', 'template_nfjpjjr', e.target, 'user_IaDRuy0b8kMunu7k8LTYP')
            .then((result) => {
                toast.success('Submission Sent', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log(error.text);
            });
        } else {
            toast.warning('Missing Fields', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        e.target.reset();

        setDisable(false)
        
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <div className="contact-input-container">
                    <label className="contact-single-input">
                        <input required type="text" value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                        <span className="placeholder">Name</span>
                    </label>
                    <label className="contact-single-input">
                        <input required type="text" value={message} onChange={(e) => setMessage(e.target.value)} name="message"/>
                        <span className="placeholder">Message</span>
                    </label>
                    <label className="contact-single-input">
                        <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                        <span className="placeholder">Email</span>
                    </label>
                    <div>
                        <button className="btn-contact" disabled={disable} type="submit" value="Submit">Submit</button>
                    </div>
                </div>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </div>
    )
}

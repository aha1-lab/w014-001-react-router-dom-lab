import { useState } from "react";
import {useNavigate} from 'react-router';


const initialState = {
    mailbox:0,
    name:"",
    message:"",
};


function LetterForm({mailboxes, sendLetter}){

    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate();
    
    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    function handleSubmit(event){
        event.preventDefault();
        sendLetter(formData);
        setFormData(initialState);
        navigate(`/mailboxes/${formData.mailbox}`);
    };

    return(
        <div>
            <h2>Send Letter</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailbox">Mail Box</label>
                <select 
                    name="mailbox" 
                    id="mailbox"
                    onChange={handleChange}
                    >
                        <option value={0}></option>
                    {mailboxes.map((mailbox)=>
                        <option key={mailbox._id} value={mailbox._id}>{mailbox._id}</option>
                    )}
                </select>

                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="message">Message</label>
                <input 
                    type="textarea" 
                    name="message" 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                />

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default LetterForm;
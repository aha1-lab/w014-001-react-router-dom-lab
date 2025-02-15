import { useState } from "react";
import {useNavigate} from 'react-router';

const initialState = {
    boxSize: '',
    boxOwner: '',
};

function MailboxForm({addMailboxes}){

    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    function handleChange(event){
        setFormData({...formData,[event.target.name]: event.target.value});
    };

    function handleSubmit(event){
        event.preventDefault();
        addMailboxes(formData);
        setFormData(initialState);
        navigate("/mailboxes");
    };

    return(
        <>
            <h1>MailboxForm</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize">Box Size</label>
                <input 
                    type="text" 
                    name="boxSize" 
                    id="boxSize" 
                    value={formData.boxSize}
                    onChange={handleChange}
                />
                
                <label htmlFor="boxOwner">Box Owner</label>
                <input 
                    type="text" 
                    name="boxOwner" 
                    id="boxOwner" 
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <button type="submit" >Submit</button>
            </form>
        </>
    );
}

export default MailboxForm;
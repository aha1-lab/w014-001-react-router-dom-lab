import {Link} from 'react-router';


function MailboxList({mailboxes}){

    return (
        <>
            <h1>MailboxList</h1>
            {mailboxes.length ===0 ? "Empty" :"" }
            {mailboxes.map((mailbox)=>
            <Link  key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
                <div className="mail-box">
                    <h2>Box Number {mailbox._id}</h2>
                </div>
            </Link>
            )}
        </>
    );
};

export default MailboxList;
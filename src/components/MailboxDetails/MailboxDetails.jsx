import { useParams } from "react-router";


function MailboxDetails(props){
    const { mailboxId } = useParams();
    const foundMailbox = props.mailboxes.find((mailbox) => {
        return mailbox._id === Number(mailboxId)
    });

    const selectedLetters = props.letters.filter((letter) => {
        return letter.mailbox == mailboxId
    });

    return(
        <>
            <h2>{foundMailbox._id}</h2>
            <dl>
                <dt>Box Size: {foundMailbox.boxSize}</dt>
                <dd></dd>
                <dt>Box Owner {foundMailbox.boxOwner}</dt>
                <dd></dd>
            </dl>
            <h2>Letters</h2>
            {selectedLetters.length ===0 ? "Empty" :"" }
            {selectedLetters.map((letter)=>
                <div key={letter._id}>
                    <p>Dear {letter.name},</p>
                    <dd></dd>
                    <dd></dd>
                    <p>{letter.message}</p>
                </div>

            )}
        </>
    );
};

export default MailboxDetails;
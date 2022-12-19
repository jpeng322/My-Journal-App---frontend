const EntryDetails = (props) => {
    // console.log(props)

    return (
        <>
            <h1>Topic: {props.entry.topic}</h1>
            <h3>Date: {props.entry.date}</h3>
            <p>Details: {props.entry.details}</p>
            <button>Delete</button>
        </>
    );
}

export default EntryDetails;


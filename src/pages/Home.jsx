import EntryList from "../components/EntryList"
import EntryForm from '../components/EntryForm'
import EntryContextProvider from '../contexts/EntryContext'

const Home = () => {
    return (
    <div className="app">
        <div className="content">
            {/* <EntryContextProvider> */}
                <EntryList />
                <EntryForm />
            {/* </EntryContextProvider> */}
        </div>
    </div>);
}

export default Home;
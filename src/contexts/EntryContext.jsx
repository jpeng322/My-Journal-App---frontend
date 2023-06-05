import { useState, createContext, useEffect, useContext } from "react";
import date from "date-and-time";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const EntryContext = createContext();

const EntryContextProvider = (props) => {
  const [entries, setEntries] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchEntries = () =>
      axios
        .get(`${import.meta.env.VITE_FRONTEND_URL}/entries`, {
          headers: { Authorization: `Bearer ${user.data.token}` },
        })
        .then((response) => {
          setEntries(response.data);
        });

    if (user) {
      fetchEntries();
    }
  }, [user]);

  const format = date.compile("MMMM DD, YYYY");
  const currentDate = date.format(new Date(), format);
  const addEntry = (topic, details) => {

    axios
      .post(
        `${import.meta.env.VITE_FRONTEND_URL}/entries`,
        { topic, date: currentDate, details, favorite: false },
        { headers: { Authorization: `Bearer ${user.data.token}` } }
      )
      .then((response) => setEntries([response.data, ...entries]));
  };

  const deleteEntry = (id) => {
    axios
      .delete(`${import.meta.env.VITE_FRONTEND_URL}/${id}`, {
        headers: { Authorization: `Bearer ${user.data.token}` },
      })
      .then(setEntries(entries.filter((entry) => entry.id !== id)));
  };

  const editEntry = (id, topic, date, details, favorite) => {
    setChangeId("");
    const index = entries.findIndex((entry) => entry.id === id);
    axios
      .put(
        `${import.meta.env.VITE_FRONTEND_URL}/entries/${id}`,
        {
          topic: topic,
          details: details,
          date: date,
          id: id,
          favorite: favorite,
        },
        { headers: { Authorization: `Bearer ${user.data.token}` } }
      )
      .then((response) => {
        entries.splice(index, 1, response.data);
        setEntries([...entries]);
      });
  };

  const [changeId, setChangeId] = useState("");

  const cancelEdit = () => {
    setChangeId("");
  };

  const toggleEdit = (id) => {
    setChangeId(id);
  };

  const [active, setActive] = useState(false);

  const toggleForm = () => {
    setActive(!active);
  };

  const closeForm = () => {
    setActive(false);
  };

  const addFavorite = (id) => {
    axios
      .put(
        `${import.meta.env.VITE_FRONTEND_URL}/entries/${id}`,
        {
          favorite: true,
        },
        { headers: { Authorization: `Bearer ${user.data.token}` } }
      )
      .then(() => {
        const updatedEntries = entries.map((entry) => {
          if (entry.id === id) {
            return { ...entry, favorite: true };
          } else {
            return entry;
          }
        });
        setEntries(updatedEntries);
      });
  };

  const delFavorite = (id) => {
    axios
      .put(
        `${import.meta.env.VITE_FRONTEND_URL}/entries/${id}`,
        {
          favorite: false,
        },
        { headers: { Authorization: `Bearer ${user.data.token}` } }
      )
      .then(() => {
        const updatedEntries = entries.map((entry) => {
          if (entry.id === id) {
            return { ...entry, favorite: false };
          } else {
            return entry;
          }
        });
        // setFavorites(favorites.filter(entry => entry.id !== id))
        setEntries(updatedEntries);
      });
  };

  return (
    <EntryContext.Provider
      value={{
        entries,
        setEntries,
        addEntry,
        deleteEntry,
        editEntry,
        toggleEdit,
        changeId,
        setChangeId,
        cancelEdit,
        active,
        currentDate,
        toggleForm,
        closeForm,
        addFavorite,
        delFavorite,
      }}
    >
      {props.children}
    </EntryContext.Provider>
  );
};

export default EntryContextProvider;

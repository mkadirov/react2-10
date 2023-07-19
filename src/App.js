import { createContext, useState } from "react";
import Form3 from "./components/Form/Form3";
import FormHook from "./components/Form/FormHook";
import FormUseState from "./components/Form/FormUseState";
import Table1 from "./components/Tables/Table1";
import Table2 from "./components/Tables/Table2";



export const UserContext = createContext({users: [], users2: [], setUsers: () => {}, setUsers2: () => {}})
function App() {

  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);

  return (
    <>
      <UserContext.Provider value={{users,users2, setUsers, setUsers2}}>
        <FormUseState/>
        <FormHook/>
        <Table2/>
        <Form3/> 
        <Table1/> 
        
      </UserContext.Provider>
      
    </>
  );
}

export default App;

//import react
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import { Dashboard } from './pages/entry/dashboard/Dashboard.page';




function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
      <Dashboard/>
      </DefaultLayout>
      
    </div>
  );
}

export default App;







// import React from "react";

// export const Placeholder = () => {
//     return (
//         <div>
   
//         </div>
        
//     )
// }
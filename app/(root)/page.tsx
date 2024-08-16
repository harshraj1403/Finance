import React from "react"
import HeaderBox from "../../components/HeaderBox"
import TotalBalance from "../../components/TotalBalance"
import RightSidebar from "../../components/RightSidebar"
import {getLoggedInUser} from "../../lib/actions/user.actions"

const Home = async()=>{
   //const loggedIn={firstName:'Harsh',lastName:'Raj',email:"harsh@gmail.com"}
   const loggedIn=await getLoggedInUser()
  return(
    <section className="home">
      <div className="home-content">
      <header className="home-header">
       <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.name || 'Guest'}
        subtext="Access and manage your account and transactions efficiently."
       />
        <TotalBalance
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250}
        
        />

        
      </header>
     Recent
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:2321.34},{currentBalance:6454.24}]}
      />
      
    </section>
  )
}

export default Home







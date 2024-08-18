import React from "react"
import HeaderBox from "../../components/HeaderBox"
import TotalBalance from "../../components/TotalBalance"
import RightSidebar from "../../components/RightSidebar"
import {getLoggedInUser} from "../../lib/actions/user.actions"
import { getAccount, getAccounts } from '../../lib/actions/bank.action';

const Home = async({ searchParams: { id, page } }: SearchParamProps)=>{
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })
   
  return(
    <section className="home">
      <div className="home-content">
      <header className="home-header">
       <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your account and transactions efficiently."
       />
        <TotalBalance
        accounts={accountsData}
        totalBanks={accounts?.totalBanks}
        totalCurrentBalance={accounts?.totalCurrentBalance}
        
        />

        
      </header>
     Recent
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={account?.transactions}
      banks={accountsData?.slice(0, 2)}
      />
      
    </section>
  )
}

export default Home







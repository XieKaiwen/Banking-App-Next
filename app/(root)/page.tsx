import React from 'react'
import HeaderBox  from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

export default function Home(){
    const loggedIn = {
        firstName: "Kaiwen",
        lastName: "Xie",
        email: "xiekaiwen3@gmail.com"
    }
    return(
        <section className='home'> 
        {/* .home is a class created using tailwindcss classes */}
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type="greeting" 
                    title="Welcome"
                    user={loggedIn.firstName}
                    subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user={loggedIn}
                transactions = {[]}
                banks = {[{currentBalance: 123.50}, {currentBalance: 500}]}
            />
        </section>
    )
}
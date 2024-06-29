import React from 'react'
import HeaderBox  from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

export default function Home(){
    const loggedIn = {
        firstName: "Kaiwen"
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
            </div>
        </section>
    )
}
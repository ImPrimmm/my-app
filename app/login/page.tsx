import React from 'react'
import { LoginGoogleButton } from '@/components/button-google'

const Page = () => {
    return (
        <>  
            <section>
                <div className="bg-[#27548A] flex flex-col items-center justify-center h-[calc(100vh-57px)]">
                    <LoginGoogleButton />
                </div>
            </section>
        </>
    )
}

export default Page
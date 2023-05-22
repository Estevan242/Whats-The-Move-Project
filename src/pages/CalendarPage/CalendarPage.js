import './CalendarPage.css'
import { useState } from 'react'
import { getMonth } from '../../util'
import CalendarHeader from '../../components/Calendar/CalendarHeader'
import Month from '../../components/Calendar/Month'
import CalendarSidebar from '../../components/Calendar/CalendarSidebar';

function CalendarPage(){
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    return(
        <>
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1"> 
                    <CalendarSidebar />
                    <Month month={currentMonth}/>
                </div>
            </div>
        </>
    );
};

export default CalendarPage;
import React, {useState} from 'react'
import PlatTabsData from './PlatTabsData'

const PlatformTabs = () => {

   const [visible, setVisible] = useState(1);
  return (
    <>
    <div className='platTabs overflow-hidden'>

      <div className=' max-w-7xl m-auto py-20 pr-5 pl-5'>
        <div className='w-full pb-8 ' data-aos="fade-up" >
            <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:p-4 '>
                <li className={` ${visible === 1 ? "blue-bg text-white hover:text-white" : "bg-white"} py-3 px-5 text-lg border-2 text-center rounded-md font-semibold transition-all hover:cursor-pointer hover:text-cyan-600`} onClick={()=>setVisible(1)}>Registration</li>
                <li className={` ${visible === 2 ? "blue-bg text-white hover:text-white" : "bg-white"} py-3 px-5 text-lg border-2 text-center rounded-md font-semibold transition-all hover:cursor-pointer hover:text-cyan-600`} onClick={()=>setVisible(2)}>Appointment</li>
                <li className={`${visible === 3 ? "blue-bg text-white hover:text-white" : "bg-white"} py-3 px-5 text-lg border-2 text-center rounded-md font-semibold transition-all hover:cursor-pointer hover:text-cyan-600`} onClick={()=>setVisible(3)}>Payments</li>
                <li className={`${visible === 4 ? "blue-bg text-white hover:text-white" : "bg-white"} py-3 px-5 text-lg border-2 text-center rounded-md font-semibold transition-all hover:cursor-pointer hover:text-cyan-600`} onClick={()=>setVisible(4)}>Communicate</li>
                <li className={`${visible === 5 ? "blue-bg text-white hover:text-white" : "bg-white"} py-3 px-5 text-lg border-2 text-center rounded-md font-semibold transition-all hover:cursor-pointer hover:text-cyan-600`} onClick={()=>setVisible(5)}> Teatment</li>
                <li className={`${visible === 6 ? "blue-bg text-white hover:text-white" : "bg-white"} py-3 px-5 text-lg border-2 text-center rounded-md font-semibold transition-all hover:cursor-pointer hover:text-cyan-600`} onClick={()=>setVisible(6)}>Patient Record</li>
            </ul>

        </div>
        <div className='w-full'>
          {visible === 1 && <PlatTabsData headingLeft="In-take & Registration" headingRight="Features" para="Increase patient acquisition with simplified onboarding. Patients can self-register for healthcare services from their own devices, no matter where they are. Health organizations can receive inbound referrals for new patient registrations" one="Self-register patient account, demographics, and profile" two="Smart forms and assessments" three="Insurance verification, credit card on file" four="See product offering / Referrals" five="Consent management"/>}

           {visible === 2 && <PlatTabsData headingLeft="Self-Scheduling & Appointment" headingRight="Features" para="Supports a number scheduling models including schedule confirmations and self-scheduling. Integrates with EMR calendar, or built-in healthonier calendar" one="In-office and virtual visits" two="Confirmations" three="Reason for visit" four="Notifications & reminders" five="Provider availability" six="Booking and scheduling"/>}

           {visible === 3 && <PlatTabsData headingLeft="Payments" headingRight="Features" para="Reduce bad debt and time chasing payments. healthonier's system enables you to take online payments and validate for insurance." one="Insurance validation" two="Online credit-card payments" three="Eligibility" four="Co-pay" five="Virtual terminal and credit card readers" six="Merchant account link to bank account of your choice"/>}

           {visible === 4 && <PlatTabsData headingLeft="Communicate" headingRight="Features" para="Engage and retain patients by communicating through their preferred channels. This module supports multiple synchronous and asynchronous digital patient communication technologies" one="HD video & audio calls" two="Moderated health communities" three="Secure messaging" four="Notifications" five="SIP Calls" six="Campaigns & Surveys"/>}

           {visible === 5 && <PlatTabsData headingLeft="Diagnosis & Treatment" headingRight="Features" para="Healtfully’s powerful Practice Workspace provides practice users with all the tools to plan and manage patient engagement." one="Notes - multiple Note Types" two="Care and Community Plan" three="E-Prescribing" four="See Referral product offering" five="Visit summaries" />}

           {visible === 6 && <PlatTabsData headingLeft="Patient Records" headingRight="Features" para="ONC certified patient portal including new data sets for SDOH, Device Data, and patient generated assessments and forms" one="Certified patient portal" two="Prescription refills" three="Healthboard" four="Patient Portal" five="Lab Order/results" />}

        </div>

      </div>
      </div>
    </>
  )
}

export default PlatformTabs

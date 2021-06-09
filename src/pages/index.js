import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Logos from "../components/Logos/logos"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"

import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"
import serverImg from "../images/server.png"
import workstationImg from "../images/workstation.png"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"


const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="Auditing an entire machine manually can be very tedious and is prone to mistakes"
        paragraph="With our software, you just need to sit back, relax
        and let our software do its job"
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="We have the tools to help you suceed"
        subtitle="Audit Thing is a easy to use and reliable piece of software
        capable of doing a security audit on your whole machine in just
        a couple of minutes. All audit results will be saved locally on your own
        machine for enhanced security."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Speedy"
            content="Super-fast response times ensure that you can spen more time on fixing vulnerabilities in your system rather than finding them"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Affordable"
            content="A choice of packages to suit every business type and size"
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="Reliable"
            content="Our script is based on the CIS CentOS 8 benchmark and has been tested extensively"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Our Packages"
        para="Choose the perfect solution for you."
      >
       
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          
          <Package title="Full package" active={true}>
            <ul>
            <li>
                <MdDone />Full Aduit based on CentOS 8 CIS Benchmark
              </li>
              <li>
                <MdDone />
                Covers Initial Setup, Services, Network Configuration, Logging and Auditing, System Maintenance
              </li>
              
            </ul>
            
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1CqmPYLP8MJdwXaREyuvqQMxZads-GRi4" cta="Download"/>
           
          </Package>
        </IconContext.Provider>
      </Packages>
      
      <Packages
        para="Choose your package based on the profile of the machine you are auditing"
      >
       
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          
          <Package title="Level 1 - Server">
            <ul>
            <Logos
                img={serverImg}
            />
            <li>
                <MdDone />Practical and prudent
              </li>
              <li>
                <MdDone />Provides a clear security benefit
              </li>
              <li>
                <MdDone />Does not inhibit the utility of the technology beyond acceptable means.
              </li>
              <li>
                <MdDone />This profile is intended for servers
              </li>
              
            </ul>
            
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1fKZIeqxePjN_wgqgTGp20MOAIf3-fFxg" cta="Download"/>
           
          </Package>
          <Package title="Level 2 - Server">
            <ul>
            <Logos
                img={serverImg}
            />
            <li>
                <MdDone />Intended for environments or use cases where security is paramount.

              </li>
              <li>
                <MdDone />Provides a clear security benefit
              </li>
              <li>
                <MdDone /> May negatively inhibit the utility or performance of the technology.
              </li>
              <li>
                <MdDone />This profile is intended for servers
              </li>
            </ul>
            
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1ZkHJhyeKFhLGxqj49eIUaBNxdRUfDhwL" cta="Download"/>
           
          </Package>
          <Package title="Level 1 - Workstation">
            <ul>
            <Logos
                img={workstationImg}
            />
            <li>
                <MdDone />Practical and prudent
              </li>
              <li>
                <MdDone />Provides a clear security benefit
              </li>
              <li>
                <MdDone /> Does not inhibit the utility of the technology beyond acceptable means.
              </li>
              <li>
                <MdDone />This profile is intended for workstations
              </li>
            </ul>
            
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1FpQWKKIwRQ5sRW537G9P_aJRv2VdYe9x" cta="Download"/>
           
          </Package>
          <Package title="Level 2 - Workstation">
            <ul>
            <Logos
                img={workstationImg}
            />
            <li>
                <MdDone /> Intended for environments or use cases where security is paramount.
              </li>
              <li>
                <MdDone />Acts as defense in depth measure.
              </li>
              <li>
                <MdDone /> May negatively inhibit the utility or performance of the technology
              </li>
              <li>
                s 
                <MdDone />This profile is intended for workstations
              </li>
            </ul>
            
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1s10U6Ir2I7AUpEJKCppoINDEbyCaXsbj" cta="Download"/>
           
          </Package>
        </IconContext.Provider>
      </Packages>
    </>
  )
}
  /*  *after </packages>*
  <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
      
      
   <Logos
                img={serverImg}
            />
  
   <Packages>
        
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          

          <Package title="Initial Setup">
            <ul>
            
              <li>
                <MdDone />Full Audit based on CentOS 8 CIS Benchmark
              </li>
              <li>
                <MdDone />
                Covers Initial Setup, Services, Network Configuration, Logging and Auditing, System Maintenance
              </li>
           
            </ul>
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1dYIwgJ_6_09hqFxbHjV0S54MxbG25MAn" cta="Download"/>

          </Package>

          <Package title="Services">
            <ul>
            <li>
                <MdDone />Full Audit based on CentOS 8 CIS Benchmark
              </li>
              <li>
                <MdDone />
                Covers Initial Setup, Services, Network Configuration, Logging and Auditing, System Maintenance
              </li>
            </ul>
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1dYIwgJ_6_09hqFxbHjV0S54MxbG25MAn" cta="Download"/>

            
          </Package>

          <Package title="Network Configuration">
            <ul>
            <li>
                <MdDone />Full Audit based on CentOS 8 CIS Benchmark
              </li>
              <li>
                <MdDone />
                Covers Initial Setup, Services, Network Configuration, Logging and Auditing, System Maintenance
              </li>
            </ul>
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1dYIwgJ_6_09hqFxbHjV0S54MxbG25MAn" cta="Download"/>

          </Package>

          <Package title="Logging and Auditing">
            <ul>
            <li>
                <MdDone />Full Audit based on CentOS 8 CIS Benchmark
              </li>
              <li>
                <MdDone />
                Covers Initial Setup, Services, Network Configuration, Logging and Auditing, System Maintenance
              </li>
            </ul>
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1dYIwgJ_6_09hqFxbHjV0S54MxbG25MAn" cta="Download"/>

          </Package>
          
          <Package title="System Maintenance">
            <ul>
            <li>
                <MdDone />Full Audit based on CentOS 8 CIS Benchmark
              </li>
              <li>
                <MdDone />
                Covers Initial Setup, Services, Network Configuration, Logging and Auditing, System Maintenance
              </li>
            </ul>
            <Button label="Download" anchor={true} href="https://drive.google.com/uc?export=download&id=1dYIwgJ_6_09hqFxbHjV0S54MxbG25MAn" cta="Download"/>

          </Package>
        </IconContext.Provider>
      </Packages>chu48.yuuy ssssaew
  
            */
export default HomePage

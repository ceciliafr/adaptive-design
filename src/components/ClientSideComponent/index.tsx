import { useDeviceContext } from "@/contexts/device"
import Navbar from "@/components/Navbar"
import Image from 'next/image'
import Title from "@/components/Title"

export default function ClientSideComponent() {
  const { isDesktop } = useDeviceContext()

  return (
    <>
      <Navbar/>
      {isDesktop ? 
        <>
          <Title>This is a desktop <span>client</span> side page</Title> 
          <Image 
            width="800" 
            height="400" 
            src="/icon-desktop.svg"
            alt="Picture of a desktop device"
          /> 
        </>
        : 
        <>
          <Title>This is a mobile <span>client</span> side page</Title>
          <Image 
            width="400" 
            height="400" 
            src="/icon-mobile.svg"
            alt="Picture of a mobile device"
          />
        </>
      }
    </>
  )
}
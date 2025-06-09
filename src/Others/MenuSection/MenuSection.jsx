import React, { useEffect, useState } from 'react'
import './MenuSection.css';
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { GoTriangleRight } from "react-icons/go";
const MenuSection = () => {
  const [open, setOpen] = useState(false)
  const [brands, setBrands] = useState([])
  useEffect(() => {
    fetch('shop.json')
      .then(res => res.json())
      .then(data => setBrands(data))
  }, [])
  // console.log(brands)
  return (
    <div className='text-white  bg-[#1F294E] lg:sticky  lg:top-0 lg:z-10'>
      <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
        {
          open === true ? <CgMenuMotion /> : <RiMenuAddLine />
        }

      </div>
      <div className='menu-section'
      // className={` absolute px-6 duration-1000
      //   ${open ? 'left-0' : '-left-80'} menu-section`}
        >
        <ul className='' >

          <li className=''>Desktop
            <div className='menu-dropdown '>
              {
                brands?.filter(b => b?.category === 'Desktop')?.map(brand =>
                  <ul>
                    <li>{brand?.brand}</li>
                  </ul>
                )
              }

            </div>
          </li>

          <li>Laptop
            <div className='menu-dropdown'>
              {
                brands?.filter(b => b?.category === 'Laptop')?.map(brand =>
                  <ul>
                    <li>{brand?.brand}</li>
                  </ul>
                )
              }
            </div>
          </li>

          <li>PC Components
            <div className='menu-dropdown'>
              <ul>

                <li><a className='flex justify-between items-center' href="">Processor <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li><a className='flex justify-between items-center' href="">Inter <GoTriangleRight /></a>
                        <div className='menu-dropdown3'>
                          <ul>
                            <li><a className='flex justify-between items-center' href="">Core i3 <GoTriangleRight /></a>
                              <div className='menu-dropdown4'>
                                <li>10th Generation</li>
                                <li>11th Generation</li>
                                <li>12th Generation</li>
                                <li>13th Generation</li>
                              </div>
                            </li>
                            <li><a className='flex justify-between items-center' href="">Core i5 <GoTriangleRight /></a>
                              <div className='menu-dropdown4'>
                                <li>10th Generation</li>
                                <li>11th Generation</li>
                                <li>12th Generation</li>
                                <li>13th Generation</li>
                                <li>14th Generation</li>
                              </div>
                            </li>
                            <li><a className='flex justify-between items-center' href="">Core i7 <GoTriangleRight /></a>
                              <div className='menu-dropdown4'>
                                <li>10th Generation</li>
                                <li>11th Generation</li>
                                <li>12th Generation</li>
                                <li>13th Generation</li>
                                <li>14th Generation</li>
                              </div>
                            </li>
                            <li><a className='flex justify-between items-center' href="">Core i9 <GoTriangleRight /></a>
                              <div className='menu-dropdown4'>
                                <li>10th Generation</li>
                                <li>11th Generation</li>
                                <li>12th Generation</li>
                                <li>13th Generation</li>
                                <li>14th Generation</li>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li><a className='flex justify-between items-center' href="">AMD <GoTriangleRight /></a>
                        <div className='menu-dropdown3'>
                          <ul>
                            <li>Ryzen 3</li>
                            <li>Ryzen 5</li>
                            <li>Ryzen 7</li>
                            <li>Ryzen 9</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li><a className='flex justify-between items-center' href="">Motherboard <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>Asus (AMD)</li>
                      <li>Asus (Inter)</li>
                      <li>MSI (AMD)</li>
                      <li>MSI (Intel)</li>
                      <li>Gigabyte (AMD)</li>
                      <li>Gigabyte (Inter)</li>
                      <li>ASRock (AMD)</li>
                      <li>ASRock (Inter)</li>
                    </ul>
                  </div>
                </li>

                {/* grid menu */}
                <li><a className='flex justify-between items-center' href="">RAM <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>Corsair</li>
                      <li>Team</li>
                      <li>Twinmos</li>
                      <li>G.Skill</li>
                      <li>Adata</li>
                      <li>Gigabyte</li>
                      <li>PNY</li>
                      <li>Thermaltake</li>
                      <li>Geil</li>
                      <li>AITC</li>
                      <li>Apacer</li>
                      <li>Patriot</li>
                      <li>Kingston</li>
                      <li>Ramsta</li>
                      <li>OCPC</li>
                      <li>OCPC</li>
                    </ul>
                  </div>
                </li>

                <li><a className='flex justify-between items-center' href="">SSD <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>Corsair</li>
                      <li>Samsung</li>
                      <li>Twinmos</li>
                      <li>Adata</li>
                      <li>Apacer</li>
                      <li>Westem Digital</li>
                      <li>Kingsman</li>
                      <li>Gigabyte</li>
                      <li>PNY</li>
                      <li>Ramsta</li>
                      <li>MSkI</li>
                      <li>Team</li>
                      <li>HP</li>
                      <li>Intel</li>
                      <li>Kingston</li>
                      <li>KingSpec</li>
                      <li>CARBONO</li>
                    </ul>
                  </div>
                </li>

                <li><a className='flex justify-between items-center' href="">Casing <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>Antec</li>
                      <li>Gigabyte</li>
                      <li>Corsair</li>
                      <li>Thermaltake</li>
                      <li>Golden Field</li>
                      <li>Gamdias</li>
                      <li>Gamemax</li>
                      <li>MSI</li>
                      <li>Cooler Master</li>
                      <li>Safe way</li>
                      <li>Xtreme</li>
                      <li>OVO</li>
                      <li>Delux</li>
                      <li>Value Top</li>
                      <li>Asus</li>
                      <li>Montech</li>
                      <li>Cougar</li>
                      <li>Max Green</li>
                      <li>View One</li>
                      <li>Redragon</li>
                      <li>PC Power</li>
                      <li>Aptech</li>
                      <li>1STPLAYER</li>
                      <li>Acer</li>
                      <li>Revenger</li>
                    </ul>
                  </div>
                </li>

                <li><a className='flex justify-between items-center' href="">Hard Disk <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li><a className='flex justify-between items-center' href="">Inter <GoTriangleRight /></a>
                        <div className='menu-dropdown3'>
                          <ul>
                            <li>Core i3</li>
                            <li>Core i5</li>
                            <li>Core i7</li>
                            <li>Core i9</li>
                          </ul>
                        </div>
                      </li>
                      <li><a className='flex justify-between items-center' href="">AMD <GoTriangleRight /></a>
                        <div className='menu-dropdown3'>
                          <ul>
                            <li>Ryzen 3</li>
                            <li>Ryzen 5</li>
                            <li>Ryzen 7</li>
                            <li>Ryzen 9</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li><a className='flex justify-between items-center' href="">Graphics Card <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>Gigabyte</li>
                      <li>MSI</li>
                      <li>Zotac</li>
                      <li>Asus</li>
                      <li>Colorful</li>
                      <li>Sapphire</li>
                      <li>PNY</li>
                      <li>Intel</li>
                    </ul>
                  </div>
                </li>

                <li><a className='flex justify-between items-center' href="">Power Supply <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>Corsair</li>
                      <li>Gigabyte</li>
                      <li>Antec</li>
                      <li>Therma ltake</li>
                      <li>MSI</li>
                      <li>Value Top</li>
                      <li>Golden Field</li>
                      <li>Gamdias</li>
                      <li>Cooler Master</li>
                      <li>Safe way</li>
                      <li>1STPLAYER</li>
                    </ul>
                  </div>
                </li>

                <li><a className='flex justify-between items-center' href="">CPU Cooler <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>Corsair</li>
                      <li>Deepcool</li>
                      <li>Cooler Master</li>
                      <li>Therma ltake</li>
                      <li>Antec</li>
                      <li>MSI</li>
                      <li>Gigabyte</li>
                      <li>Kingsman</li>
                      <li>DarkFlash</li>
                      <li>Aigo</li>
                      <li>Gamdias</li>
                      <li>1STPLAYER</li>
                    </ul>
                  </div>
                </li>
                <li>Casing Cooler Fan</li>

              </ul>
            </div>
          </li>

          <li>Monitor
            <div className='menu-dropdown'>
              {
                brands?.filter(b => b?.category === 'Monitor')?.map(brand =>
                  <ul>
                    <li>{brand?.brand}</li>
                  </ul>
                )
              }
            </div>
          </li>

          <li>Accessories
            <div className='menu-dropdown'>
              <ul>
                <li><a className='flex justify-between items-center' href="">Mouse <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>Logitech</li>
                      <li>Asus</li>
                      <li>Fantech</li>
                      <li>A4tech</li>
                      <li>Delux</li>
                      <li>Santech</li>
                      <li>Corsair</li>
                      <li>Havit</li>
                      <li>Value Top</li>
                      <li>Redragon</li>
                      <li>Razer</li>
                      <li>Gamdias</li>
                      <li>Xtrike Me</li>
                      <li>Astrum</li>
                      <li>Benq</li>
                      <li>iMICE</li>
                      <li>Gigabyte</li>
                      <li>Rapoo</li>
                    </ul>
                  </div>
                </li>
                <li><a className='flex justify-between items-center' href="">Headphone <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>Redragon</li>
                      <li>KWG Taurus</li>
                      <li>Fantech</li>
                      <li>Delux</li>
                      <li>Gamdias</li>
                      <li>Corsair</li>
                      <li>Poly</li>
                      <li>Razer</li>
                      <li>iMICE</li>
                      <li>Havit</li>
                      <li>Rapoo</li>
                      <li>Logitech</li>
                      <li>Astrum</li>
                    </ul>
                  </div>
                </li>
                <li><a className='flex justify-between items-center' href="">Keyboard <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul className='grid-menu grid grid-cols-2'>
                      <li>A4tech</li>
                      <li>Fantech</li>
                      <li>Havit</li>
                      <li>Xtreme</li>
                      <li>Redragon</li>
                      <li>Asus</li>
                      <li>Corsair</li>
                      <li>Deepcool</li>
                      <li>Razer</li>
                      <li>Gamdias</li>
                      <li>Xtrike Me</li>
                      <li>Astrum</li>
                      <li>Golden Feild</li>
                      <li>Logitech</li>
                      <li>Rapoo</li>
                      <li>Matias</li>
                      <li>iMICE</li>
                      <li>Cougar</li>
                      <li>Dereu</li>
                      <li>Micropack</li>
                      <li>Skyloong</li>
                      <li>RK Royal Kludge</li>
                      <li>MeeTion</li>
                    </ul>
                  </div>
                </li>
                <li>Power Bank</li>
                <li>Power Strip</li>
                <li>Mouse Pad</li>
                <li>Web Camera</li>
                <li>Laptop Bag</li>
                <li>Monitor Stand</li>
                <li>Megaphones</li>
              </ul>
            </div>
          </li>

          <li>Office Equipment
            <div className='menu-dropdown'>
              <ul>
                <li><a className='flex justify-between items-center' href="">Scanner <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>Canon</li>
                      <li>Plustek</li>
                    </ul>
                  </div>
                </li>
                <li><a className='flex justify-between items-center' href="">Projector <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>Epson</li>
                      <li>BenQ</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li>Printer
            <div className='menu-dropdown'>
              {
                brands?.filter(b => b?.category === 'Printer')?.map(brand =>
                  <ul>
                    <li>{brand?.brand}</li>
                  </ul>
                )
              }
            </div>
          </li>

          <li>Storage
            <div className='menu-dropdown'>
              <ul>
                <li><a className='flex justify-between items-center' href="">External HDD <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>Transcend</li>
                      <li>Western Digital</li>
                      <li>Seagate</li>
                      <li>Adata</li>
                      <li>Silicon</li>
                    </ul>
                  </div>
                </li>
                <li><a className='flex justify-between items-center' href="">External SSD <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>Intel</li>
                      <li>Transcend</li>
                      <li>Samsung</li>
                      <li>Western Digital</li>
                      <li>ADATA</li>
                    </ul>
                  </div>
                </li>
                <li><a className='flex justify-between items-center' href="">Pen Drive <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>PNY</li>
                      <li>ADATA</li>
                      <li>TEAM</li>
                      <li>Transcend</li>
                    </ul>
                  </div>
                </li>

              </ul>
            </div>
          </li>
          {/* <li><a href="">UPS +</a>
            <ul>
              {
                brands?.filter(b => b?.category === 'UPS')?.map(brand =>
                  <li className=''>{brand?.brand}</li>
                )
              }
            </ul>
          </li> */}

          <li>Networking
            <div className='menu-dropdown'>
              <ul>
                <li><a className='flex justify-between items-center' href="">Router <GoTriangleRight /></a>
                  <div className="menu-dropdown2">
                    <ul>
                      <li>TP Link</li>
                      <li>Netis</li>
                      <li>Mikrotik</li>
                      <li>NETGEAR</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li>Software
            <div className='menu-dropdown'>
              {
                brands?.filter(b => b?.category === 'Software')?.map(brand =>
                  <ul>
                    <li>{brand?.brand}</li>
                  </ul>
                )
              }
            </div>
          </li>

          <li>Gadget
            <div className='menu-dropdown'>
              <ul>
                <li><a className='flex justify-between items-center' href="">Earbuds</a></li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default MenuSection

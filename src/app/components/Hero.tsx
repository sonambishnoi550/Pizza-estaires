import React from 'react'
import Image from 'next/image'
import CustomButton from './common/CustomButton'
const Hero = () => {
    return (
        <div className="min-h-screen p-6 pt-20">
            <div className="max-w-[1685px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="">
                    <h1 className="lg:text-[74px] md:text-6xl text-[28px] font-semibold leading-[110%] md:pb-[30px] pb-3">
                        Commandez, Savourez, Régalez-Vous </h1>
                    <p className="md:text-[40px] text-base leading-[130%] text-[#000000B2] lg:max-w-[385px] w-full pb-[30px]">en un clic, sans bouger de chez vous !</p> 
                    <CustomButton text="Commander maintenant" myClass="!text-white md:!block !hidden !rounded-full !bg-[#FF7F00] py-6 px-[33px] !text-xl !leading-[127%] !font-bold !uppercase !border-none" />
                </div>
                <div className="relative">
                    <Image className='xl:max-w-[640px] md:max-w-[480px] max-w-[290px] max-lg:mx-auto' src="/assets/images/png/hero-pizza.png"
                        alt="Pizza" width={640} height={640}/>
                    <div className="absolute top-0 xl:-left-[20%] left-[10%] flex bg-white shadow-lg rounded-xl p-4 xl:max-w-[334px] md:max-w-[237px] max-w-[200px] gap-[13px]">
                        <Image className="md:w-[65px] w-[30px] md:h-[65px] h-[30px]" src="/assets/images/png/free.png" alt="free" width={65} height={65} />
                        <p className='leading-[130%] xl:text-[31px] md:text-xl text-sm md:max-w-[204px] max-w-[94px] font-medium'>
                            2 pizzas th Purchased
                            the 3th FREE*
                        </p>
                    </div>
                    <div className="absolute xl:top-0 top-[30%] right-0 bg-white shadow-lg rounded-xl p-3 flex items-center space-x-2">
                        <Image src="/assets/images/svg/phone.svg" alt="phone" width={36} height={36} />
                        <span className="text-xl font-semibold leading-[140%] md:block hidden">03 28 43 86 24</span>
                    </div>
                    <div className="absolute md:bottom-24 bottom-16 left-0 bg-white shadow-lg gap-[10px] flex rounded-xl p-3 max-w-[277px]">
                        <Image className="md:w-[46px] md:h-[46px] h-[26px] w-[26px]" src="/assets/images/svg/free-home.svg" alt="free" width={46} height={46} />
                        <p className='md:max-w-[190px] max-w-[134px] md:text-xl text-sm font-normal'>
                            FREE HOME & OFFICE DELIVERY **
                        </p>
                    </div>
                    <div className="absolute -bottom-[5%] right-0 bg-white md:!hidden shadow-xl rounded-xl px-4 py-2 flex items-center space-x-2">
                        <Image className='max-sm:w-[50px]' src="/assets/images/svg/delivery.svg" alt='delivery' width={82}
                            height={41} />
                        <p className="md:text-xl text-sm font-normal md:max-w-[108px] max-w-[80px]">Take away or delivery</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap max-w-[1280px] lg:gap-5 mx-auto lg:justify-between pt-[73px]">
                <div className='md:block hidden'>
                <p className='font-normal text-sm leading-[140%] text-[#000000CC] max-w-[546px]'>
                    * Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                    <p className='font-normal text-sm leading-[140%] text-[#000000CC] max-w-[546px]'>
                    ** Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                </div>
                <div>
                <p className='font-normal md:text-xl text-base leading-[140%] text-[#000000CC]  border-l-4 border-gray-600 md:pl-4 pl-[10px] max-w-[457px]'>
                    Nous sommes ouverts aujourd'hui le 12 Mars 2025 du 11h à 14h et du 18h à 22h30.
                </p>
                </div>
                <div className=" bg-white max-md:hidden shadow-xl rounded-xl px-4 py-2 flex items-center space-x-2">
                    <Image src="/assets/images/svg/delivery.svg" alt='delivery' width={82 }
                    height={41}/>
                    <p className="text-xl font-normal max-w-[108px]">Take away or delivery</p>
                </div>
                <CustomButton text="Commander maintenant" myClass="!text-white !rounded-full !bg-[#FF7F00] max-sm:!mt-5 md:py-6 !py-[10px] md:px-[33px] !px-[17px] md:!text-xl !text-sm md:!hidden block !leading-[127%] !font-bold !uppercase !border-none" />
            </div>
        </div>
    )
}
export default Hero

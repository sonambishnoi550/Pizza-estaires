import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-white to-pink-100 text-black text-sm px-4">
            <div className="max-w-[1685px] mx-auto py-8 flex flex-row !justify-between">
                <div className="mb-6 md:mb-0 flex md:block max-md:hidden max-sm:justify-center items-center md:items-start">
                    <img src="/assets/images/png/logo.png" alt="Logo" className="w-[124px] h-auto mb-2" />
                    <p className="text-center md:text-left md:hidden block max-w-[151px]">Plaza Estoires: Adresse, téléphone, VAT, SIREN</p>
                </div>
                <div className="flex lg:justify-between md:justify-end xl:gap-[91px] md:gap-[54px] gap-[30px] max-lg:flex-wrap text-center md:text-left">
                    <div>
                        <h3 className="font-semibold md:text-2xl text-xl leading-[140%] mb-2">Livraison</h3>
                        <ul>
                            <li className='font-normal md:text-lg text-base leading-[140%]'>59 000 Estoires</li>
                            <li className='font-normal md:text-lg text-base leading-[140%]'>59 100 Merville</li>
                            <li className='font-normal md:text-lg text-base leading-[140%]'>59 100 Merville</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold md:text-2xl text-xl leading-[140%] mb-2">Livraison</h3>
                        <ul>
                            <li className='font-normal md:text-lg text-base leading-[140%]'>59 000 Estoires</li>
                            <li className='font-normal md:text-lg text-base leading-[140%]'>59 100 Merville</li>
                            <li className='font-normal md:text-lg text-base leading-[140%]'>59 100 Merville</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold md:text-2xl text-xl leading-[140%] mb-2">Recrutement</h3>
                        <ul>
                            <li className='font-normal md:text-lg text-base leading-[140%] text-left'>Offer 1</li>
                            <li className='font-normal md:text-lg text-base leading-[140%] text-left'>Offer 2</li>
                        </ul>
                    </div>
                    <div className='!flex md:!hidden'>
                        <div className="mb-6 md:mb-0 md:hidden !flex w-full max-md:block max-sm:justify-center items-center">
                            <img src="/assets/images/png/logo.png" alt="Logo" className="w-[124px] h-auto mb-2" />
                            <div className='flex-col'>
                                <p className="text-center md:text-left  max-w-[151px] pb-3">Plaza Estoires:</p>
                                <p className="text-center md:text-left  max-w-[151px]"> Adresse, téléphone, VAT, SIREN</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-2xl leading-[140%] mb-2 md:block hidden">Réseaux Sociaux</h3>
                        <div className="flex justify-center md:justify-start gap-3">
                            <Link href="https://www.facebook.com/" target='_blank'>
                                <Image className='hover:scale-110 transition-all duration-500' src="/assets/images/svg/facebook.svg" alt="facebook" width={48} height={48} />
                            </Link>
                            <Link href="https://www.instagram.com/" target='_blank'>
                                <Image className='hover:scale-110 transition-all duration-500' src="/assets/images/svg/instagram.svg" alt="instagram" width={48} height={48} />
                            </Link>
                            <Link href="https://www.facebook.com/" target='_blank'>
                                <Image className='hover:scale-110 transition-all duration-500' src="/assets/images/svg/tiktok.svg" alt="tiktok" width={48} height={48} />
                            </Link>
                            <Link href="https://www.google.co.in/" target='_blank'>
                                <Image className='hover:scale-110 transition-all duration-500' src="/assets/images/svg/google.svg" alt="google" width={48} height={48} />
                            </Link>
                            <Link href="https://in.pinterest.com/" target='_blank'>
                                <Image className='hover:scale-110 transition-all duration-500' src="/assets/images/svg/pinterest.svg" alt="pinterest" width={48} height={48} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1685px] mx-auto py-4 flex justify-between">
                <p className="text-center md:text-left md:block hidden text-lg font-normal leading-[140%]"> <span className='text-xl'>Plaza Estoires:</span> Adresse, téléphone, VAT, SIREN</p>
                <div className=" px-4 flex flex-row justify-center md:justify-end gap-3 text-center md:text-xl text-base font-normal leading-[140%]">
                    <a href="#">CGU</a>
                    <a href="#">Politique de confidentialité</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
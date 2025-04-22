import React from 'react'
import Image from 'next/image';
import { FEATURES } from '../utils/helper';
interface Feature{
    icon: string;
    title: string;
    description: string;
}
const Pizzeria = () => {
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-16">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
                Pourquoi choisir notre pizzeria ?
            </h2>
            <div className="md:hidden flex flex-col items-center gap-6">
                <Image
                    src="/assets/images/png/pizza-slice.png"
                    alt="Pizza Slices"
                    width={968}
                    height={968}
                />
                {(FEATURES as Feature[]).map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow p-4 flex gap-4 items-start w-full max-w-md"
                    >
                        <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                        <div>
                            <h3 className="font-semibold text-base text-gray-900">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View */}
            <div className="max-md:hidden relative max-w-7xl mx-auto gap-8">
                <div className="bg-white left-0 lg:top-[10%] top-0 absolute rounded-xl max-w-[480px] shadow p-4 flex gap-4 items-start">
                    <Image
                        src={FEATURES[0].icon}
                        alt={FEATURES[0].title}
                        width={91}
                        height={91}
                    />
                    <div>
                        <h3 className="font-medium xl:text-2xl text-xl leading-[130%] max-w-[217px]">
                            {FEATURES[0].title}
                        </h3>
                        <p className="font-normal xl:text-xl text-base leading-[140%] xl:max-w-[420px] max-w-[270px]">
                            {FEATURES[0].description}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <Image
                        src="/assets/images/png/pizza-slice.png"
                        alt="Pizza Slices"
                        className="max-w-[768px]"
                        width={968}
                        height={968}
                    />
                </div>

                <div className="absolute right-0 lg:top-[10%] top-[23%] bg-white max-w-[480px] rounded-xl shadow p-4 flex gap-4 items-start">
                    <Image
                        src={FEATURES[2].icon}
                        alt={FEATURES[2].title}
                        width={91}
                        height={91}
                    />
                    <div>
                        <h3 className="font-medium xl:text-2xl text-xl leading-[130%] max-w-[217px]">
                            {FEATURES[2].title}
                        </h3>
                        <p className="font-normal xl:text-xl text-base leading-[140%] xl:max-w-[420px] max-w-[270px]">
                            {FEATURES[2].description}
                        </p>
                    </div>
                </div>

                <div className="absolute lg:bottom-[20%] bottom-[30%] left-0 bg-white max-w-[480px] rounded-xl shadow p-4 flex gap-4 items-start">
                    <Image
                        src={FEATURES[1].icon}
                        alt={FEATURES[1].title}
                        width={91}
                        height={91}
                    />
                    <div>
                        <h3 className="font-medium xl:text-2xl text-xl leading-[130%] max-w-[217px]">
                            {FEATURES[1].title}
                        </h3>
                        <p className="font-normal xl:text-xl text-base leading-[140%] xl:max-w-[420px] max-w-[270px]">
                            {FEATURES[1].description}
                        </p>
                    </div>
                </div>

                <div className="absolute bg-white lg:bottom-[20%] bottom-[3%] right-0 max-w-[480px] rounded-xl shadow p-4 flex gap-4 items-start">
                    <Image
                        src={FEATURES[3].icon}
                        alt={FEATURES[3].title}
                        width={91}
                        height={91}
                    />
                    <div>
                        <h3 className="font-medium xl:text-2xl text-xl leading-[130%] max-w-[217px]">
                            {FEATURES[3].title}
                        </h3>
                        <p className="font-normal xl:text-xl text-base leading-[140%] xl:max-w-[420px] max-w-[270px]">
                            {FEATURES[3].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pizzeria
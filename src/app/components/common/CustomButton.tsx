import React from "react";
interface CustomButtonProps {
    text: string;
    myClass?: string;
    custonOnClick?: () => void;

}
const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass = "", custonOnClick, }) => {
    return (
        <button
            onClick={custonOnClick}
            className={`font-normal whitespace-nowrap leading-[127%] cursor-pointer transition-all duration-500 rounded-[10px] border border-black ease-in-out text-xl ${myClass}
`}> {text}</button>
    );
};
export default CustomButton;
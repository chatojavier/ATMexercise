export function ButtonRounded({ children, compClass, isActive, color, onClick }) {
    return (
        <button className={"uppercase w-52 py-4 font-bold rounded-full border border-solid text-center active:bg-gradient-to-br active:text-white" + (color ? ` border-${color} text-${color} from-${color} to-${color}-dark ` : " border-blue text-blue from-blue to-blue-dark ") + (compClass ? compClass : "") + (isActive ? " bg-gradient-to-br from-blue to-blue-dark text-white cursor-default" : " hover:shadow ")} onClick={(children === "Deposit") ? () => onClick(true) : () => onClick(false)}>
            {children}
        </button>
    );
}
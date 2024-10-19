interface Props {
    socijalnaMreza: string;
}

const ProfiliInput = ({ socijalnaMreza }: Props) => {
    return (
        <div>
            <div className="flex space-x-4 w-full border border-gray-300 rounded-2xl px-2">
                <label htmlFor={socijalnaMreza} className="flex items-center">
                    <img className="h-[80%]" src={`/images/filip/${socijalnaMreza}.png`} alt={socijalnaMreza} />
                </label>
                <input
                    id={socijalnaMreza}
                    className="w-[50%] focus:border-none focus:outline-none focus-border-0"
                    type="text"
                    placeholder={`https://www.${socijalnaMreza}.com/your-username`}
                />
            </div>
        </div>
    );
};

export default ProfiliInput;

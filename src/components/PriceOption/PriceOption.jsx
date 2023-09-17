import {VscDebugBreakpointLog} from "react-icons/vsc";

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className="bg-sky-300 px-5 py-5 rounded-lg flex flex-col">
            <h2 className="text-gray-800 text-center">
                <span className="text-5xl font-bold mt-3">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-2xl italic my-3 text-center">
                {name}
            </h4>
            <div className="ml-10 py-5 flex-grow">
                <h1 className="text-2xl font-medium text-rose-600 my-2 underline">Features: </h1>
                {
                    features.map(feature => <li className="text-xl font-medium text-red-400  list-decimal flex gap-2 items-center"><VscDebugBreakpointLog className="text-red-600"></VscDebugBreakpointLog>{feature}</li>)
                }
            </div>

            <button className="btn w-4/5 btn-primary py-3 rounded-lg mx-10 my-5">Buy Now</button>
        </div>
    )
}

export default PriceOption
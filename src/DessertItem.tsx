import { Dessert } from './App';

type AppProps = {
    dessert: Dessert;
    onAddDessert: (dessert: Dessert) => void;
};

export default function DessertItem({ dessert, onAddDessert }: AppProps) {
    const { name, category, price, image } = dessert;

    return (
        <li onClick={() => onAddDessert(dessert)}>
            <div>
                <img src={image.mobile} alt="" />
            </div>
            <div>
                <p className="text-rose-500">{category}</p>
                <p className="font-semibold">{name}</p>
                <p className="text-red font-semibold">${price}</p>
            </div>
        </li>
    );
}

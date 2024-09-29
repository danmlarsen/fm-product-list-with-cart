import desserts from './data.json';

import DessertItem from './DessertItem';

import { Dessert } from './App';

type AppProps = {
    onAddDessert: (dessert: Dessert) => void;
};

export default function Desserts({ onAddDessert }: AppProps) {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold">Desserts</h1>
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {desserts.map(dessert => (
                    <DessertItem key={dessert.name} dessert={dessert} onAddDessert={onAddDessert} />
                ))}
            </ul>
        </div>
    );
}

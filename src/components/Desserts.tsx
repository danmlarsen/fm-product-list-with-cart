import desserts from '../data.json';

import DessertItem from './DessertItem';

export interface DessertType {
    name: string;
    category: string;
    price: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
}

export default function Desserts() {
    return (
        <main className="space-y-8">
            <h1 className="text-4xl font-bold leading-[1.2]">Desserts</h1>
            <ul className="grid gap-6 md:gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                {desserts.map(dessert => (
                    <DessertItem key={dessert.name} dessert={dessert} />
                ))}
            </ul>
        </main>
    );
}

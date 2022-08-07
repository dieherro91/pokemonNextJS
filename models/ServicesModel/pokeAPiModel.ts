export interface PokemonListInterface {
	count: number;
	next?: string;
	previous?: string;
	results: SmallPokemonInterface[];
}

export interface SmallPokemonInterface {
	name: string;
	url: string;
	img?: string;
	id?: string;
}

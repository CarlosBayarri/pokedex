import { Description } from './description';
import { Language } from './language';

export interface Region {
    descriptions: Description[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: any[];
    pokemon_entries: any[];
    region: Language;
    version_groups: Language[];
}

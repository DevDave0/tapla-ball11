import { AgGridReact } from "ag-grid-react"
import { 
    ModuleRegistry, 
    ValidationModule, 
    ClientSideRowModelModule,
    TextFilterModule,
    NumberFilterModule,
    CustomFilterModule
} from 'ag-grid-community';

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ValidationModule,
    TextFilterModule, 
    NumberFilterModule, 
    CustomFilterModule
    // add more modules here as needed
]);

export const GameStats = (game) => {
    return (
        <section>
            {console.log(game)}
            Game Stats
        </section>
    );
};
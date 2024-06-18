import {IMovie} from "./movie.interface";

export interface IPage { // 20 movies per page
    page: number;
    results: IMovie[];
    total_pages: number,
    total_results: number
}
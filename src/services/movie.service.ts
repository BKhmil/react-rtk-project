import {IPage} from "../interfaces/page.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const movieService = {
    getPageByNumber: (pageNumber: number): Promise<IPage> =>
        apiService.get(urls.discover.getMoviesPage(pageNumber)).then(response => response.data)
}

export {
    movieService
}
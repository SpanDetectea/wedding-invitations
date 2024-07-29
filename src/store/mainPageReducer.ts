import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISites } from '../types/ISites';

let initialState: ISites[] = [{
    id: 1,
    name: "perv",
    price: 12,
    description: ["dsadsa", "dsadsa"],
    image: "https://images.wallpaperscraft.ru/image/single/para_zvezdnoe_nebo_art_123338_1920x1080.jpg"
}, {
    id: 2,
    name: "vt",
    price: 124,
    description: ["dsadsa", "dsadsa"],
    image: "https://images.wallpaperscraft.ru/image/single/para_zvezdnoe_nebo_art_123338_1920x1080.jpg"
},{
    id: 3,
    name: "vt",
    price: 124,
    description: ["dsadsa", "dsadsa"],
    image: "https://images.wallpaperscraft.ru/image/single/para_zvezdnoe_nebo_art_123338_1920x1080.jpg"
}]
const mainPageReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        getSites: (state, {payload}: PayloadAction<ISites>) => {
        },
        // getFilms: (state, { payload }: PayloadAction<IFilm[]>) => {
        //     state.films = payload
        // },
        // getMoreFilms: (state, { payload }: PayloadAction<IFilm[]>) => {
        //     state.films = [...state.films, ...payload]
        // },
        // getInfoAboutFilm: (state, { payload }: PayloadAction<[]>) => {
        //     state.infoAboutFilm = payload
        // }
    }
})

// getInfoAboutFilm ?? нету
// export const { getFilms, getMoreFilms, getInfoAboutFilm } = mainPageReducer.actions


export default mainPageReducer.reducer;
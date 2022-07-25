import { GalleryModel } from './../gallery/gallery.model';
import { createReducer, on } from "@ngrx/store";
import { GET_GALLERY_PROPS, retrievedGallery } from './gallery.actions';

export const initialState : GalleryModel[] = [];

const _galleryReducer = createReducer(
    initialState,
    on(retrievedGallery, (state, {allGallery}) => {
        return [...allGallery];
    })
)


export function galleryReducer(state: any, actions: any) {
    return _galleryReducer(state, actions);
}
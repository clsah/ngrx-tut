import { GalleryModel } from './../gallery/gallery.model';
import { createAction, props } from "@ngrx/store";

export const GET_GALLERY_PROPS = 'allGallery';
export const GALLERY_API_SUCCESS = '[Gallery API] API Success'
export const GALLERY_API_INVOKED = '[Gallery API] Invoked'
export const retrievedGallery = createAction(
    GALLERY_API_SUCCESS,
    props<{ allGallery: GalleryModel[]}>()
);

export const invokeGalleryAPI = createAction(
    GALLERY_API_INVOKED
)
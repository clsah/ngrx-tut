import { GalleryModel } from './../gallery/gallery.model';
import { createAction, props } from "@ngrx/store";

export const GET_GALLERY_PROPS = 'allGallery';

export const retrievedGallery = createAction(
    '[Gallery API] API Success',
    props<{[GET_GALLERY_PROPS]: GalleryModel[]}>()
)
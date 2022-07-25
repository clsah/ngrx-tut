import { GalleryModel } from './../gallery/gallery.model';

export interface AppStore {
    gallery: GalleryModel[];
}
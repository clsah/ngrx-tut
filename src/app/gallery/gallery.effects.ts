import { GALLERY_API_SUCCESS, GALLERY_API_INVOKED } from './../store/gallery.actions';
import { GalleryService } from './gallery.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs';

@Injectable()
export class GalleryEffects {

    constructor(
        private $action: Actions,
        private galleryService: GalleryService
    ) {

    }

    $loadGallery1 = createEffect(() => {
        return this.$action.pipe(
            ofType(GALLERY_API_INVOKED),
            mergeMap(()=>{
                return this.galleryService.loadGallery()
                    .pipe(
                        map((data) => ({ type: GALLERY_API_SUCCESS, allGallery: data }))
                    );
            })
        )
        }
    )

}
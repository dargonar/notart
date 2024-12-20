export interface ActivationDataModel {
    img_first: string;
    pre_title: string;
    title: string;
    data: string;
    img_last: string;    
}

export interface ActivationGalleryModel {
    title: string;
    desc: string;
    img: string;
}

export interface ActivationModel {
    name: string;
    slug: string;
    title: string;
    categories: string[];
    img_big: string;
    img_small: string;
    tagline: string;
    data: ActivationDataModel[];
    link: string;
    gallery: ActivationGalleryModel[];
}


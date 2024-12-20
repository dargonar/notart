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


export const defaultActivationDataModel = {
    img_first: "",
    pre_title: "",
    title: "",
    data: "",
    img_last: "",
}

export const defaultActivationGalleryModel = {
    title: "",
    desc: "",
    img: "",
}

export const defaultActivationModel: ActivationModel = {
    name: "",
    slug: "",
    title: "",
    categories: [],
    img_big: "",
    img_small: "",
    tagline: "",
    data: [defaultActivationDataModel],
    link: "",
    gallery: [defaultActivationGalleryModel],
};


export interface ActivationFilter{
    title:string, 
    exclude_slug:string, 
    category:string, 
    show_soon:boolean, 
    layout:number
};

export const defaultActivationFilter: ActivationFilter = {
    title: "", 
    exclude_slug : "", 
    category:"", 
    show_soon:false, 
    layout:1,
};
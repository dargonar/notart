export interface ServiceModel {
    name:string;
    slug:string;
    title:string;
    action:string;
    category:string;
    img_big:string;
    img_small:string;
    tagline:string;
    skill_title:string;
    skill_description:string;
    extra_html:string;

}

export const defaultServiceModel: ServiceModel = {
    name : "",
    slug : "",
    title : "",
    action : "",
    category : "",
    img_big : "",
    img_small : "",
    tagline : "",
    skill_title : "",
    skill_description : "",
    extra_html : "",
};


// export interface ActivationFilter{
//     title:string, 
//     exclude_slug:string, 
//     category:string, 
//     show_soon:boolean, 
//     layout:number
// };

// export const defaultActivationFilter: ActivationFilter = {
//     title: "", 
//     exclude_slug : "", 
//     category:"", 
//     show_soon:false, 
//     layout:1,
// };
'use client'

import { notFound } from 'next/navigation';
import { getActivations } from "../../data/activations";
import ActivationPage from "../components/activation_page";
import { usePathname} from 'next/navigation';
import {ActivationModel} from "../../model/activation";
import { ContactInfo } from "../../components/footer";
import Gallery from "../components/gallery";

export default function ActivationBySlug() {
  const pathname = usePathname();
  const activation_slug = pathname.split("/");
  
  let _slug = activation_slug[activation_slug.length-1];
  
  const is_gallery = _slug == "gallery";
  if (is_gallery){
    _slug = activation_slug[activation_slug.length-2];
  }
  const activation : ActivationModel | undefined = getActivations().find(obj => obj.slug === _slug);
  if (!activation) {
    notFound();
  }

  return (
    <>
      {!is_gallery && 
        <>
          <ActivationPage {...activation}/> 
          <ContactInfo />
        </>
      }
      {is_gallery && <Gallery {...activation} />}
      
    </>
    );
}

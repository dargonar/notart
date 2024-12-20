'use client'

import { notFound } from 'next/navigation';
import { getActivations } from "../../data/activations";
import ActivationPage from "../components/activation_page";
import { usePathname} from 'next/navigation';
import {ActivationModel} from "../../model/activation";
import { ContactInfo } from "../../components/footer";

export default function ActivationBySlug() {
  const pathname = usePathname();
  const activation_slug = pathname.split("/");
  const _slug = activation_slug[activation_slug.length-1];
  const activation : ActivationModel | undefined = getActivations().find(obj => obj.slug === _slug);
  if (!activation) {
    notFound();
  }

  return (
    <>
      <ActivationPage {...activation}/>
      <ContactInfo />
    </>
    );
}

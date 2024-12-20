'use client'

import { activations } from "../../data/activations";
import ActivationPage from "../components/activation_page";
import { usePathname} from 'next/navigation';

export default function ActivationBySlug() {
  const pathname = usePathname();
  const activation_slug = pathname.split("/");
  const _slug = activation_slug[activation_slug.length-1];
  const activation = activations.find(obj => obj.slug === _slug);
  return (
    <>
      <ActivationPage {...activation}/>
    </>
    );
}

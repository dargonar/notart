'use client'

import { getServices } from "../../data/services";
import { ServiceModel, defaultServiceModel } from "../../model/service";
import ServicePage from "../components/service_page";
import { usePathname} from 'next/navigation';
import { ContactInfo } from "../../components/footer";

export default function ServiceBySlug() {
  const pathname = usePathname();
  const service_slug = pathname.split("/");
  const service : ServiceModel = getServices().find(obj => obj.slug === service_slug[service_slug.length-1]) || defaultServiceModel;
  return (
    <>
      <ServicePage {...service}/>
      <ContactInfo />
    </>
    );
}

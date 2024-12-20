'use client'

import { services } from "../../data/services";
import ServicePage from "../components/service_page";
import { usePathname} from 'next/navigation';
import { ContactInfo } from "../../components/footer";

export default function ServiceBySlug() {
  const pathname = usePathname();
  const service_slug = pathname.split("/");
  const service = services.find(obj => obj.slug === service_slug[service_slug.length-1]);
  return (
    <>
      <ServicePage {...service}/>
      <ContactInfo />
    </>
    );
}

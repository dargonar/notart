'use client'

import Image from "next/image";
import { services } from "../../data/services";
import ServicePage from "../components/service_page";
import { useRouter , usePathname} from 'next/navigation';

export default function ServiceBySlug() {
  const router = useRouter();
  // const service = services.find(obj => obj.slug === router.query.slug);
  const pathname = usePathname();
  const service_slug = pathname.split("/");
  const service = services.find(obj => obj.slug === service_slug[service_slug.length-1]);
  // const service_slug_last = service_slug[service_slug.length-1];
  return (
    <>
      <ServicePage {...service}/>
    </>
    );
}

'use client'

import { getServices } from "../../data/services";
import { ServiceModel, defaultServiceModel } from "../../model/service";
import ServicePage from "../components/service_page";
import { usePathname} from 'next/navigation';
import { ContactInfo } from "../../components/footer";
import ServiceSocialLabPage from "../components/social_lab_page";
import ServiceUrbanActionsPage from "../components/urban_actions_page";
import ServiceVisualEngPage from "../components/visual_engagement_page";

export default function ServiceBySlug() {
  const pathname = usePathname();
  const _slug = pathname.split("/");
  const service_slug = _slug[_slug.length-1];
  const service : ServiceModel = getServices().find(obj => obj.slug === service_slug) || defaultServiceModel;

  if(service_slug=="social_lab")
  {
    return (
    <>
      <ServiceSocialLabPage {...service}/>
      <ContactInfo />
    </>
    );
  }
  if(service_slug=="urban_actions")
  {
    return (
    <>
      <ServiceUrbanActionsPage {...service}/>
      <ContactInfo />
    </>
    );
  }
  if(service_slug=="visual_engagement")
  {
    return (
    <>
      <ServiceVisualEngPage {...service}/>
      <ContactInfo />
    </>
    );
  }
  return (
    <>
      <ServicePage {...service}/>
      <ContactInfo />
    </>
    );
}

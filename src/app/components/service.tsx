import Link from 'next/link';

export default function Service(props) {
  // <a className="item media media-service" href="/services/{{props.slug}}">	
  // href={`/services/${encodeURIComponent(props.slug)}`}
  // href={{ pathname: '/services/[slug]', query: { slug: props.slug } }}
  // key="{props.slug}" 
  return (
  		 <div className="col-12 col-lg-4" >
          <Link href={`/services/${encodeURIComponent(props.slug)}`} className="item media media-service">
            <div className="img">
              <i className="icon ion-code-working"></i>
            </div>
            <div className="media-body">
              <h4 className="" dangerouslySetInnerHTML={{__html: props.title}} />
              <p dangerouslySetInnerHTML={{__html: props.action}} />
            </div>
          </Link>
        </div>
  )
};

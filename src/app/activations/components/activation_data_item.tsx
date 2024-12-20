export default function ActivationDataItem(props) {
    const data = props;
    return (
        <div className="title-desc">
            { data.pre_title && <h2 className="display-4 display-title anim-2 decor" dangerouslySetInnerHTML={{__html: data.pre_title}} /> }
            <h2 className="display-3 display-title anim-1" dangerouslySetInnerHTML={{__html: data.title}} />
            <p className="anim-2" dangerouslySetInnerHTML={{__html: data.data}} />
        </div>  
    );
}
export default function Package({data}) {
  const {title, price, features, isRecommended} = data;
  
  return (
    <div className={isRecommended ?"package recommended" :"package"}>
      {
       isRecommended&&(<p className="recom">recommended</p>)
      }

        <h4 className="package-name">{title}</h4>
        <h3 className="package-price">$ <span>{price}</span>/mon</h3>
        <div className="package-festures">
            {
              features.map((feature, i)=>{
                return (
                  <p key={i}>
              <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
  /></svg>
          {feature}</p>
                )
              })
            }
        </div>
        <button className="package-btn">Signup Today</button>
        <p></p>
    </div>
  )
}

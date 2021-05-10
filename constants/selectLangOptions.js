

const selectLangOtions = [
    {
      label: (
        <>
          <div className="d-flex align-items-center justify-content-start">
            <i className="icon flag-icon" style={{backgroundImage: "url(/images/icons/united-kingdom.svg)"}}/>
            <span className="ml-3">English</span>
          </div>
        </>
      ),
      value: 'en',
    },
    {
      label: (
        <>
          <div className="d-flex align-items-center justify-content-start">
            <i className="icon flag-icon" style={{backgroundImage: "url(/images/icons/france.svg)"}}/>
            <span className="ml-3">Français</span>
          </div>
        </>
      ),
      value: 'fr',
    },
    {
      label: (
        <>
          <div className="d-flex align-items-center justify-content-start">
            <i className="icon flag-icon" style={{backgroundImage: "url(/images/icons/sweden.svg)"}}/>
            <span className="ml-3">Svenska</span>
          </div>
        </>
      ),
      value: 'sv',
    },
    {
      label: (
        <>
          <div className="d-flex align-items-center justify-content-start">
            <i className="icon flag-icon" style={{backgroundImage: "url(/images/icons/germany.svg)"}}/>
            <span className="ml-3">Deutsch</span>
          </div>
        </>
      ),
      value: 'de',
    },
  ]

  export default selectLangOtions;
import * as locales from './locale';

import englandFlag from '../assets/flags/england.webp';
import albaniaFlag from '../assets/flags/albania.webp';
import germanyFlag from '../assets/flags/german.webp';

const England = () => {
  return (
    <div>
        <img src={englandFlag} alt="" width="20px" height="20px"></img>
    </div>
  );
};

const Albania = () => {
  return (
    <div>
        <img src={albaniaFlag} alt="" width="20px" height="20px"></img>
    </div>
  );
};

const Germany = () => {
  return (
    <div>
       <img src={germanyFlag} alt="" width="20px" height="20px"></img>
    </div>
  );
};

const languages = 
{
  [locales.enUS]:{
      language:"English",
      locale:locales.enUS,
      img:<England/>
  },
  [locales.sqAL]:{
      language:"Albanian",
      locale:locales.sqAL,
      img:<Albania/>
  },
  [locales.deDE]:{
      language:"German",
      locale:locales.deDE,
      img:<Germany/>
  },
}

export default languages;
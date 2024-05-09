import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // let ga_id = 'G-RRCZW6YW84';

  // document.write(`<script async src="https://www.googletagmanager.com/gtag/js?id=${ga_id}"></script>`);
  // document.write(`
  //   <script>
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());
  
  //     gtag('config', '${ga_id}');
  //   </script>
  // `);


  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, InjectionToken, Injector, OnInit, ViewChild, ViewContainerRef, createNgModule } from '@angular/core';
import { from, map, switchMap, tap } from 'rxjs';

  class GreetingService {
    constructor() {
    }

    greet() {
    }
  }

 @Component({
   selector: 'app-programmatic-loading',
   standalone: false,
   templateUrl: './programmatic-loading.component.html'
 })
 export class ProgrammaticLoadingComponent implements OnInit {

   @ViewChild('placeHolder', { read: ViewContainerRef })
   viewContainer!: ViewContainerRef;

   constructor(private injector: Injector) { }

   async ngOnInit(): Promise<void> {
    // console.log('getting service');
    // const m = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4205/remoteEntry.js',
    //   exposedModule: './Shared'
    // });

    // console.log('loaded :>> ', m);

    console.log('loading...');

    from(loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: './Shared'
    })).pipe(
      // tap((mod) => console.log('mod :>> ', mod['SharedModule'])),
      // switchMap((module) => this.compiler.compileModuleAsync<YourContract>(module[YourModule])),
      switchMap(async (module) => createNgModule(module['SharedModule'], this.injector)),
      map((moduleRef) => {
        // console.log('ref :>> ', moduleRef.instance['providers']);
        const svc = moduleRef.instance['GreetingService'];
        // const svc = moduleRef.injector.get(LAZY_SERVICE_TOKEN);
        console.log('svc :>> ', svc);
      //  const moduleRef = moduleFactory.create(this.injector);
      //  const instance = moduleRef.instance;
      //  return instance.getService(); // Your contract
     })).subscribe();
   }

  //  async load(): Promise<void> {

  //      const m = await import('app4/HeaderComponent');

  //      console.log('m :>> ', m.HeaderComponent);
  //      const ref = this.viewContainer.createComponent(m.HeaderComponent);
  //      // const compInstance = ref.instance;
  //      // compInstance.ngOnInit()
  //  }

   async load(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: './HeaderComponent'
    });
    console.log('m :>> ', m);
    const ref = this.viewContainer.createComponent(m.HeaderComponent);
    // const compInstance = ref.instance;
}

 }

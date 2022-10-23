import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, NoPreloading} from '@angular/router';

const routes: Routes = [
  {
    path: 'memorable-quotes-v1-basics',
    // INTERESTING: Lazy loading a module - the build system creates multiple bundles
    //              Here we are loading via a default export
    loadChildren: async () => (await import('../memorable-quotes-v1-basics/memorable-quotes-v1-basics.module')).default
  },
  {
    path: 'memorable-quotes-v2-di',
    //              Here we are loading by a named export
    loadChildren: async () => (await import('../memorable-quotes-v2-di/memorable-quotes-v2-di.module')).MemorableQuotesV2DiModule
  },
  {
    path: 'memorable-quotes-v3-tests',
    //              Here we are loading by a named export
    loadChildren: async () => (await import('../memorable-quotes-v3-tests/memorable-quotes-v3-tests.module')).default
  },
  {
    path: 'election-results-v1-pipes',
    loadChildren: async () => (await import('../election-results-v1-pipes/election-results-v1-pipes.module')).default
  },
  {
    path: 'election-results-v2-routing',
    loadChildren: async () => (await import('../election-results-v2-routing/election-results-v2-routing.module')).default
  },
  {
    path: 'course-booking-v1-rest',
    loadChildren: async () => (await import('../course-booking-v1-rest/course-booking-v1.module')).default
  },
  {
    path: 'course-booking-v2-template-forms',
    loadChildren: async () => (await import('../course-booking-v2-template-forms/course-booking-v2.module')).default
  },
  {
    path: 'course-booking-v3-reactive-forms',
    loadChildren: async () => (await import('../course-booking-v3-reactive-forms/course-booking-v3.module')).default
  },
  {
    path: 'misc/lifecycle',
    loadChildren: async () => (await import('../lifecycle/lifecycle.module')).default,
  },
  {
    path: 'misc/interceptors',
    loadChildren: async () => (await import('../interceptor/interceptor.module')).default,
  },
  {
    path: 'misc/custom-pipes',
    loadChildren: async () => (await import('../custom-pipes/custom-pipes.module')).default
  },
  {
    path: 'misc/guards',
    loadChildren: async () => (await import('../guards/guards.module')).default
  },
  {
    path: 'misc/custom-controls',
    loadChildren: async () => (await import('../custom-control/custom-control.module')).default
  },
  {
    path: 'misc/nested-content',
    loadChildren: async () => (await import('../nested-content/nested-content.module')).default
  },
  {
    path: 'misc/directives',
    loadChildren: async () => (await import('../directives/directives.module')).default
  },
  {
    path: 'misc/dom-interaction',
    loadChildren: async () => (await import('../dom-interaction/dom-interaction.module')).default
  },
  {
    path: 'misc/host-binding',
    loadChildren: async () => (await import('../host-binding/host-binding.module')).default
  },
  {
    path: 'misc/subjects',
    loadChildren: async () => (await import('../subjects/subjects.module')).default
  },
  {
    path: 'misc/subsink',
    loadChildren: async () => (await import('../subsink/sub-sink.module')).default
  },
  {
    path: 'misc/change-detection',
    loadChildren: async () => (await import('../change-detection/change-detection.module')).default
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // INTERESTING: We can configure lazy loading, preloading and of course we can eager load by simple Imports
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: NoPreloading
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

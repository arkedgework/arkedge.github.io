import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { ManagedserviceComponent } from './managedservice/managedservice.component';
import { CompanyComponent } from './company/company.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { ProjectengineeringComponent } from './projectengineering/projectengineering.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TechnologyComponent } from './technology/technology.component';
import { IndustriesComponent } from './industries/industries.component';
import { AdvancesolutionComponent } from './advancesolution/advancesolution.component';
import { StaffingComponent } from './staffing/staffing.component';
import { DatamgmtComponent } from './datamgmt/datamgmt.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { AiComponent } from './ai/ai.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Advancesolution', component: AdvancesolutionComponent},
  {path: 'Technology', component: TechnologyComponent},
  {path: 'Industries', component: IndustriesComponent},
  {path: 'OurProduct', component: OurproductComponent},
  {path: 'productDetail', component: ProductDetailComponent},
  {path: 'ManagedServices', component: ManagedserviceComponent},
  {path: 'Company', component: AboutComponent},
  {path: 'Career', component: CareerComponent},
  {path: 'Contactus', component: ContactusComponent},
  {path: 'NewsAndEventUpdate', component: NewsComponent},
  {path: 'WhoWeAre', component: AboutComponent},
  {path: 'WhyArkedgeTchnologies', component: AboutComponent},
  {path: 'CentersOfExcellence', component: AboutComponent},
  {path: 'VisionAndMission', component: AboutComponent},
  {path: 'ValueOfExcellence', component: AboutComponent},
  {path: 'OurLeadership', component: AboutComponent},
  {path: 'TestimonialClientSpeaks', component: TestimonialsComponent},
  {path: 'OurHappyClients', component: ClientComponent},
  {path: 'NewsAndEventUpdate', component: AboutComponent},
  {path: 'ValueOfExcellence', component: AboutComponent},
  {path: 'OurHappyClients', component: ClientComponent},
  {path: 'SoftwareEngineering', component: ProjectengineeringComponent},
  {path: 'ItStafingAndServices', component: StaffingComponent},
  {path: 'ConsultingSercvices', component: DatamgmtComponent},
  {path: 'Sitemap', component: SitemapComponent},
  {path: 'ai', component: AiComponent}

];

@NgModule({
  declarations: [
    AdvancesolutionComponent,
    HomeComponent,
    OurproductComponent,
    ProductDetailComponent,
    ManagedserviceComponent,
    CompanyComponent,
    CareerComponent,
    ContactusComponent,
    NewsComponent,
    AboutComponent,
    ClientComponent,
    TechnologyComponent,
    IndustriesComponent,
    ProjectengineeringComponent,
    TestimonialsComponent,
    StaffingComponent,
    DatamgmtComponent,
    SitemapComponent,
    AiComponent
],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled', }),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

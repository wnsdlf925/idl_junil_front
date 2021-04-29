import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { AnnoComponent } from './anno/anno.component';
import { IdeaComponent } from './idea/idea.component';
import { NoticeComponent } from './notice/notice.component';
import { CsComponent } from './cs/cs.component';
import { CsUploadComponent } from './cs-upload/cs-upload.component';
import { LoginComponent } from './login/login.component';
import { JoinAuthComponent } from './join-auth/join-auth.component';
import { ChosenAgreeComponent } from './chosen-agree/chosen-agree.component';
import { JoinComponent } from './join/join.component';
import { FindPwComponent } from './find-pw/find-pw.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { ContactComponent } from './contact/contact.component';
import { IdeaPushComponent } from './idea-push/idea-push.component';
import { CheckInfoComponent } from './check-info/check-info.component';
import { ReviseComponent } from './revise/revise.component';
import { PointComponent } from './point/point.component';
import { PointUseComponent } from './point-use/point-use.component';
import { PointSaveComponent } from './point-save/point-save.component';
import { MyInterComponent } from './my-inter/my-inter.component';
import { MyIdeaComponent } from './my-idea/my-idea.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { NoticeDetailComponent } from './notice-detail/notice-detail.component';
import { IdeaResetComponent } from './idea-reset/idea-reset.component';
import { CsResetComponent } from './cs-reset/cs-reset.component';




const routes: Routes = [
  // 회원쪽
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {animation: 'home'}}, 
  { path: 'board/anno', component: AnnoComponent , data: {animation: 'anno'} },
  { path: 'board/idea', component: IdeaComponent , data: {animation: 'idea'} },
  { path: 'board/notice', component: NoticeComponent , data: {animation: 'notice'} },
  { path: 'board/cs', component: CsComponent  , data: {animation: 'cs'}},
  { path: 'board/cs/csUpload', component: CsUploadComponent  , data: {animation: 'csUpload'}},
  { path: 'member/login', component: LoginComponent  , data: {animation: 'login'}},
  { path: 'member/joinAuth', component: JoinAuthComponent  , data: {animation: 'joinAuth'}},
  { path: 'member/chosenAgree', component: ChosenAgreeComponent  , data: {animation: 'chosenAgree'}},
  { path: 'member/join', component: JoinComponent  , data: {animation: 'join'}},
  { path: 'member/findPw', component: FindPwComponent  , data: {animation: 'findPw'}},
  { path: 'member/resetPw', component: ResetPwComponent  , data: {animation: 'resetPw'}},
  { path: 'board/contact', component: ContactComponent  , data: {animation: 'contact'}},
  { path: 'member/myIdea/ideaPush', component: IdeaPushComponent  , data: {animation: 'ideaPush'}},
  { path: 'member/checkInfo', component: CheckInfoComponent  , data: {animation: 'checkInfo'}},
  { path: 'member/revise', component: ReviseComponent  , data: {animation: 'revise'}},
  { path: 'member/point', component: PointComponent  , data: {animation: 'point'}},
  { path: 'member/myInter', component: MyInterComponent  , data: {animation: 'myInter'}},
  { path: 'member/myIdea', component: MyIdeaComponent  , data: {animation: 'myIdea'}},
  { path: 'board/cs/detail', component: CsDetailComponent  , data: {animation: 'csDetail'}},
  { path: 'board/notice/detail', component: NoticeDetailComponent  , data: {animation: 'noticeDetail'}},
  { path: 'member/myIdea/ideaReset', component: IdeaResetComponent  , data: {animation: 'ideaReset'}},
  { path: 'board/cs/reset', component: CsResetComponent  , data: {animation: 'csReset'}},
  { path: 'member/pointUse', component: PointUseComponent  , data: {animation: 'pointUse'}},
  { path: 'member/pointSave', component: PointSaveComponent  , data: {animation: 'pointSave'}},



  { path: '**', redirectTo: '/home', pathMatch: 'full', data: {animation: 'HomePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }